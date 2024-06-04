
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(request){
    const body = await request.json()
    const {name, email, password} = body
    console.log(body)

    if(!name || !email || !password){
        return new NextResponse('Missing name, email, or password',{status:400})
    }

    const exist = await prisma.user.findUnique({
        where
    })

} 
