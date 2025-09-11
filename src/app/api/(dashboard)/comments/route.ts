import {NextResponse} from 'next/server';
import connect from "@/lib/db";
import User from "@/lib/modals/user";
import Complaint from "@/lib/modals/complaint";
import Comment from "@/lib/modals/comment";
import {Types} from "mongoose";

export const GET = async (request : Request)=>{
    try{
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        const complaintId = searchParams.get("complaintId");

        // searchKeywords code

        const searchKeywords  = searchParams.get("keywords") as string ;
        const startDate = searchParams.get("startDate");
        const endDate = searchParams.get("endDate");

        //pagination code
        const page : any = parseInt(searchParams.get("page") || "1");
        const limit: any  = parseInt(searchParams.get("limit") || "10");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }
        if (!complaintId || !Types.ObjectId.isValid(complaintId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing complaintId"}), {status: 404})
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
        const filter : any = {
            user : new Types.ObjectId(userId),
            complaint : new Types.ObjectId(complaintId),
        }

        // searchkeywors
        if(searchKeywords){
            filter.$or = [
                {
                    title: {$regex : searchKeywords, $options: "i"},
                },
                {
                    text : {$regex : searchKeywords, $options: "i"},
                }
            ]
        }
        if(startDate && endDate){
            filter.createdAt = {
                $gte : new Date(startDate),
                $lte : new Date(endDate)
            };
        }else if(startDate){
            filter.createdAt = {
                $gte : new Date(startDate),
            };
        }else if (endDate){
            filter.createdAt = {
                $lte : new Date(endDate),
            }
        }

        // pagination code

        const skip = (page - 1) * limit;

        const comments = await Comment.find(filter).sort({createdAt:"asc"}).skip(skip).limit(limit).exec();
        return new NextResponse(JSON.stringify({comments}), {status: 200});


    }catch (err: any){
        return new NextResponse("Error in creating comment" + err.message, {status: 500});
    }
};

export const POST = async (request : Request)=>{

    try{
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        const complaintId = searchParams.get("complaintId");

        const body = await request.json();
        const {title, text}  = body ;

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing userId"}), {status: 400})
        }
        if (!complaintId || !Types.ObjectId.isValid(complaintId)) {
            return new NextResponse(JSON.stringify({message: "invalid or missing complaintId"}), {status: 404})
        }

        await connect();
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(JSON.stringify({message: "user not found"}), {status: 404})
        }

        const complaint = await Complaint.findById(complaintId);
        if (!complaint) {
            return new NextResponse(JSON.stringify({message: "comment not found"}), {status: 404})
        }
        const newComment = new Comment({
            title,
            text ,
            user : new Types.ObjectId(userId),
            complaint : new Types.ObjectId(complaintId)
        });

        await newComment.save();
        return new NextResponse( JSON.stringify({message : "comment is creating in complaint box "}), {status: 200});

    }catch(err: any){
        return new NextResponse("Error in creating comment" + err.message, {status: 400});
    }
}

