import connect from "@/lib/db";
import User from "@/lib/modals/user";
import Complaint from "@/lib/modals/complaint";
import {NextResponse} from 'next/server';
import {Types} from "mongoose";


export const PATCH = async (request: Request, context: { params: any }) => {
    const complaintId = context.params!.complaint;
    try {
        const body = await request.json();
        const {title} = body;

        const {searchParams} = new URL(request.url);
        console.log(searchParams.get("userId"));

        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }

        if (!complaintId || !Types.ObjectId.isValid(complaintId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing complaint id "}), {status: 404})
        }

        await connect();
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found"}), {status: 404})
        }

        const complaint = await Complaint.findOne({_id: complaintId, user: userId});

        if (!complaint) {
            return new NextResponse(JSON.stringify({message: "complaint not found"}), {status: 400})
        }

        const updateComplaint = await Complaint.findByIdAndUpdate(complaintId, {title}, {new: true})

        return new NextResponse(JSON.stringify({
            message: "Category is Updated successfully",
            complaint: updateComplaint
        }), {status: 200})

    } catch (err: any) {
        return new NextResponse("Error in creating complaints" + err.message, {status: 500});
    }
}
export const DELETE = async (request: Request, context: { params: any }) => {
    const complaintId = context.params!.complaint;
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }

        if (!complaintId || !Types.ObjectId.isValid(complaintId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing complaint id "}), {status: 404})
        }

        await connect();
        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found"}), {status: 404})
        }

        const complaint = await Complaint.findOne({_id: complaintId, user: userId});
        if (!complaint) {
            return new NextResponse(JSON.stringify({message: "complaint not found"}), {status: 404})
        }

        await Complaint.findByIdAndDelete(complaintId);
        return new NextResponse(JSON.stringify({message: "Complaint was deleted successfully"}), {status: 200})

    } catch (err: any) {
        return new NextResponse("Error in DELETE complaints" + err.message, {status: 500});
    }
}