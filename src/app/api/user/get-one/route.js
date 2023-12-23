import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export const GET = async(req, res) => {
    try{
        const {searchParams} = new URL(req.url);
        let id = searchParams.get('id');
        const prisma = new PrismaClient();
        let result = await prisma.users.findUnique({
            where: {id: parseInt(id)},
        });
        return NextResponse.json({status: "success", data:result}, { status: 200 });
    }
    catch(e){
        return NextResponse.json({status: "fail", data:e.toString()}, { status: 500 });
    }
}
