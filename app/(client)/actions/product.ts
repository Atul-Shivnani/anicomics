"use server";

import prisma from "@/prisma/prisma";

export default async function getProductData(id: string | string[]) {
  // Ensure id is a string
  const productId = Array.isArray(id) ? id[0] : id;

  try {
    const productData = await prisma.product.findFirst({
      where: {
        id: productId
      },
      include:{
        images:true,
        sizes:true,
        collection:true,
        category:true
    }
    });
    return productData;
  } catch (e) {
    console.error("Error fetching product data:", e);
    return null;
  }
}
