import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export const POST = async (req,res) => {
    try{
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let result = await prisma.users.create({
            data: reqBody
        })

        return NextResponse.json({status: "success", data:result}, { status: 200 });
    }
    catch(e){
        return NextResponse.json({status: "fail", data:e.toString()}, { status: 500 });
    }
}