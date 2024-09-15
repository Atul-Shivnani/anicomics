import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/prisma";
import { user } from "../../../store/validations";
import bcrypt from "bcrypt";

// Step 1: Define and export the NextAuth options
export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const parsedData = user.safeParse(credentials);

          if (!parsedData.success) {
            throw new Error("Invalid credentials");
          }

          const foundUser = await prisma.user.findFirst({
            where: { email: parsedData.data.email },
          });

          if (!foundUser) {
            throw new Error("No user found with this email");
          }

          const isValidPassword = await bcrypt.compare(parsedData.data.password, foundUser.password || "");
          if (!isValidPassword) {
            throw new Error("Incorrect password");
          }

          return { id: foundUser.id, email: foundUser.email };
        } catch (error) {
          console.error("Error in authorize:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl || "/";
    },
    async jwt({ token, account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        const foundUser = await prisma.user.findFirst({
          where: { email: profile.email },
        });

        if (!foundUser) {
          const newUser = await prisma.user.create({
            data: {
              email: profile.email,
              password: null,
            },
          });
          token.id = newUser.id;
        } else {
          token.id = foundUser.id;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
};

// Step 2: Create the handler using the authOptions
const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
