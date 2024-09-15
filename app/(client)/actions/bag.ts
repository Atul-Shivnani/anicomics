"use server";

import { getServerSession } from "next-auth";
import prisma from "@/prisma/prisma";
import { authOptions } from "../store/auth";
import { Catamaran } from "next/font/google";

async function getUserId() {
  const session = await getServerSession(authOptions);
  console.log("Session:", session); // Debugging
  return session?.user?.id; 
}

async function notifyChannel() {
  try {
    await prisma.$executeRaw`NOTIFY bagUpdate, 'update'`;
    console.log("Notification sent"); // Debugging
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

export const addToBag = async ({id, size}: any) => {
  const userId = await getUserId();
  if (!userId) {
    throw new Error("User must be logged in to add items to the bag.");
  }

  try {
    console.log("Adding to bag:", { userId, id, size }); // Debugging
    const foundProduct = await prisma.bag.findFirst({
      where: {
        userId: userId,
        productId: id,
        size: size
      },
    });

    if (foundProduct) {
      await prisma.bag.update({
        where: {
          id: foundProduct.id,
          size: foundProduct.size
        },
        data: {
          quantity: foundProduct.quantity + 1,
        },
      });

      await notifyChannel();
    } else {
      await prisma.bag.create({
        data: {
          userId,
          productId: id,
          quantity: 1,
          size: size 
        },
      });

      await notifyChannel();
    }

    return { success: true, message: "Added to bag" };
  
  } catch (error) {
    console.error("Error adding to bag:", error);
    throw new Error("Failed to add item to bag.");
  }
};


export const bagProduct= async ()=>{
const userID = await getUserId()
try{
  const data = prisma.user.findFirst({
    select:{
      bag:true
    },
    where:{
      id:userID
    }
  })
  return data
} catch (e){
return e
}

}