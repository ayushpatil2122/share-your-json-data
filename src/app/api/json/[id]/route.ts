import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, {params} : {
    params : {
        id : "string"
    }
}) {
    const{ id } = params
    try {
        const json = await prisma.jsonData.findUnique({
            where : {
                id : id
            }, 
            select : {
                id : true,
                name : true,
                content : true,
                createdAt : true
            }
        });

        return NextResponse.json(json);
    } catch (error: any) {
        console.error("Error Fetching Json data ", error);
        return NextResponse.json({
            error: "Error fetching Json data "
        }, {
            status: 500
        });
    }
}
