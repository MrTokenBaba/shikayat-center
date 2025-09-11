import {NextResponse} from 'next/server';
import connect from "@/lib/db";
import User from "@/lib/modals/user";
import Complaint from "@/lib/modals/complaint";
import Comment from "@/lib/modals/comment";
import {Types} from "mongoose";

export const GET = async (request: Request, context: { params: any }) => {
    const commentId = context.params.comment;
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        const complaintId = searchParams.get("complaintId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }
        if (!complaintId || !Types.ObjectId.isValid(complaintId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing complaintId"}), {status: 404})
        }
        if (!commentId || !Types.ObjectId.isValid(commentId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing commentId"}), {status: 404})
        }
        await connect();
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found"}), {status: 404})
        }
        const complaint = await Complaint.findOne({_id: complaintId});
        if (!complaint) {
            return new NextResponse(JSON.stringify({message: "comment not found"}), {status: 404})
        }

        const singleComments = await Comment.findOne({
            _id: commentId,
            user: new Types.ObjectId(userId),
            complaint: new Types.ObjectId(complaintId)
        });

        if (!singleComments) {
            return new NextResponse(JSON.stringify({message: "comment not there "}), {status: 404})
        }
        return new NextResponse(JSON.stringify({singleComments}), {status: 200});


    } catch (err: any) {
        return new NextResponse("Error in get single comment" + err.message, {status: 500});
    }
};
export const PATCH = async (request: Request, context: { params: any }) => {
    const commentId = context.params.comment;

    try {
        const body = await request.json();
        const {title, text} = body;

        const {searchParams} = new URL(request.url);

        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }


        await connect();
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found"}), {status: 404})
        }

        const comment = await Comment.findOne({_id: commentId, user: new Types.ObjectId(userId)});
        if (!comment) {
            return new NextResponse(JSON.stringify({message: "comment not found"}), {status: 404})
        }

        const updateComment = await Comment.findByIdAndUpdate(
            commentId, {title, text}, {new: true});
        return new NextResponse(JSON.stringify({message: "single comments", comment: updateComment}), {status: 200});

    } catch (err: any) {
        return new NextResponse("Error in get single comment" + err.message, {status: 500});
    }
}
export const DELETE = async (request: Request, context: { params: any }) => {
    const commentId = context.params.comment;

    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }

        if (!commentId || !Types.ObjectId.isValid(commentId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing commentId"}), {status: 400})
        }

        await connect();
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found"}), {status: 404})
        }

        const comment = await Comment.findOne({_id: commentId, user: new Types.ObjectId(userId)});
        if (!comment) {
            return new NextResponse(JSON.stringify({message: "comment not found"}), {status: 404})
        }

        await Comment.findByIdAndDelete(commentId);
        return new NextResponse(JSON.stringify({
            message: "comment deleted successfully",
          /*  comment: comment*/
        }), {status: 200});


    } catch (err: any) {
        return new NextResponse("Error in get single comment" + err.message, {status: 500});
    }
}
