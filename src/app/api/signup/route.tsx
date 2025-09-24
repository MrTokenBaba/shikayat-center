import bcrypt from "bcryptjs";
import {NextResponse} from "next/server";
import connect from "@/lib/db";
import User from "@/lib/modals/user";

export async function POST(request: Request) {
    const {name, email, password, confirmPassword} = await request.json();
     const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    if (!name || !email || !password || !confirmPassword) {
        return NextResponse.json({message: "Please fields are required"}, {status: 400});
    }
    if (!isValidEmail(email)) {
        return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }
    if(confirmPassword !== password){
        return NextResponse.json({message: "Passwords do not match"}, { status: 400});
    }
    if(password.length < 6) {
        return NextResponse.json({message: "Password must be at least 6 chart", status: 400});
    }
    try{
        await connect();
        const existingUser = await User.findOne({email: email});

        if(existingUser){
            return NextResponse.json({message: "User already exist"}, { status: 400});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save();
        return NextResponse.json({message: "user created "},{status: 201});

    }catch(error){
        return NextResponse.json({message: "something went wrong "},{status: 500})
    }

}