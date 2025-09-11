import connect from "@/lib/db";
import User from "@/lib/modals/user";
import Complaint from "@/lib/modals/complaint";
import {NextResponse} from 'next/server';
import {Types} from "mongoose";


export const GET = async (request: Request) => {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }
        await connect();

        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found in the database"}), {status: 400})
        }

        const complaints = await Complaint.find({
            user: new Types.ObjectId(userId),
        });
        return new NextResponse(JSON.stringify(complaints), {status: 200});
    } catch (err: any) {
        return new NextResponse("Error in fetching complaints" + err.message, {status: 500});
    }
}

export const POST = async (request: Request) => {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        const {title} = await request.json();

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }

        await connect();
        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found "}), {status: 404})
        }
        const newComplaint = new Complaint({
            title,
            user: new Types.ObjectId(userId),
        });
        await newComplaint.save();

        return new NextResponse(JSON.stringify({
            message: "complaint is created",
            complaint: newComplaint
        }), {status: 200});

    } catch (err: any) {
        return new NextResponse("Error in creating complaints" + err.message, {status: 500});
    }
}

