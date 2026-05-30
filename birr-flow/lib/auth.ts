import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma from "./prisma"

import crypto from "crypto"

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite", // use sqlite to bypass mongodb kysely dialect crash, Prisma handles real db
  }),
  advanced: {
    database: {
      generateId: () => crypto.randomBytes(12).toString('hex'),
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
})
