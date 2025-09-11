import connect from "@/lib/db";
import User from "@/lib/modals/user";
import {NextRequest, NextResponse} from 'next/server';
import {Types} from "mongoose";
import {ObjectId} from "mongodb";

export const GET = async () => {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), {status: 200});
    } catch (err: any) {
        console.log(err);
        return NextResponse.json('users api error ' + err.message, {status: 500});
    }
}
export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        await connect();
        const userUser = new User(body);
        await userUser.save();

        return new NextResponse(JSON.stringify(userUser), {status: 200});

    } catch (err: any) {
        console.log(err);
        return NextResponse.json('creating users api error ' + err.message, {status: 500});
    }
}
export const PATCH = async (request: Request) => {
    try {
        const body = await request.json();
        const {userId, newUsername} = body;

        await connect();

        if (!userId || !newUsername) {
            return new NextResponse(
                JSON.stringify({message: "ID or new username not found"}),
                {status: 400}
            );
        }

        if (!ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({message: "Invalid user ID"}),
                {status: 400}
            );
        }

        const updateUser = await User.findOneAndUpdate(
            {_id: new ObjectId(userId)},
            {username: newUsername},
            {new: true}
        );

        if (!updateUser) {
            return new NextResponse(
                JSON.stringify({message: "User not found in the database"}),
                {status: 404}
            );
        }

        return new NextResponse(
            JSON.stringify({message: "User updated successfully", user: updateUser}),
            {status: 200}
        );
    } catch (err: any) {
        return new NextResponse(
            JSON.stringify({message: "Error in updating user", error: err.message}),
            {status: 500}
        );
    }
}
export const DELETE = async (request: Request) => {

    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return new NextResponse(JSON.stringify({message: "ID or new username not found"}), {status: 404})
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({message: "invalid user id"}), {status: 404})
        }
        await connect();
        const deleteUser = await User.findOneAndDelete(
            new Types.ObjectId(userId)
        )
        if (!deleteUser) {
            return new NextResponse(JSON.stringify({message: "id not found in the database"}), {status: 404})
        }

        return new NextResponse(JSON.stringify({message: "user is deleted "}), {status: 200})

    } catch (err: any) {
        return new NextResponse(
            JSON.stringify({message: "Error in Delete user", error: err.message}),
            {status: 500}
        );
    }
}