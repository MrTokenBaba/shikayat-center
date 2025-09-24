import LoginView from "@components/ui/LoginView";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SignInPage() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");

    return <LoginView />;
}