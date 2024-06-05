import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest){
    //extract body
    const body = await req.json();
    // store body
   const user = await client.user.create({
    data: {
        username: body.username,
        password: body.password
    }
   })
    //return to user
    return Response.json({
        message: "You are logged in"
    })
}