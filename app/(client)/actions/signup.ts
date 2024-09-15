"use server"
import bcrypt from 'bcrypt';
import prisma from '@/prisma/prisma'
import { user } from '../store/validations'

export async function signUp(data: { email: string, password: string }) {
  try {
    const parsedData = user.parse(data)

    const oldUser = await prisma.user.findFirst({
      where: { email: parsedData.email }
    })

    if (oldUser) {
      console.log("user already exist")
      return { success: false, message: "User already registered with this email" }
    }

    const hashedPassword = await bcrypt.hash(parsedData.password, 10)

    const newUser = await prisma.user.create({
      data: {
        email: parsedData.email,
        password: hashedPassword
      }
    })

    if (newUser) {
      console.log(newUser)
      return { success: true, message: "User registered successfully" }
    }
  } catch (e) {
    console.error("Error in signUp:", e)
    return { success: false, message: "Error while registering user" }
  }
}