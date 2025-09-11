import {  NextResponse } from "next/server";
import { authMiddleware } from "../middlewares/api/authMiddleware";
import { logMiddleware } from "../middlewares/api/logMiddleware";

export const config = {
    matcher: "/api/:path*",
};



export default function middleware(request: Request) {
    if (request.url.includes("/api/comments")) {
        const logRes = logMiddleware(request);
        console.log(logRes.response);
    }
    const authResponse = authMiddleware(request);
    if (!authResponse?.isValid) {
        return new NextResponse(JSON.stringify({message: "Unauthorized"}), { status: 401 });
    }
    return NextResponse.next();
}
