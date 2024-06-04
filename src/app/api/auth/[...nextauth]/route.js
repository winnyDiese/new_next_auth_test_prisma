
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials:{
                username : {label: "Username", type: "text", placeholder: "jsmith"},
                passworld : {label: "Password", type: "password"},
                email : {label: "Email", type: "email"},
            },
            async authorize(credentials){
                // check to see if mail and password is valid
                if(!credentials.email || !credentials.passworld) return

                // Check to see if user exist 
                const user = await prisma.user.findUnique({
                    where: {email:redentials.email}
                })

                if(!user) return null

                // check to see if 
            }
        })
    ],
    session:{
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "developpement",
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

