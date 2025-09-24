/*
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import React from "react";
import Image from "next/image";

import Link from "next/link";

const UserButton = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="size-6 mr-4 mt-4 float-right animate-spin">Loading </div>;
    }

    const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();
    const handleSignOut = async () => {
        await signOut({
            redirect: false,
        });
        router.push("/")
    }

    return (
        <nav>
           {/!* {session ? (  ) : (   )}*!/}
                <div className={"py-5"}>
                    <div className="outline-none relative float-right p-4 md:p-8">
                        <div className="flex gap-4 items-center">
                            <span className={'text-black '}>Welcome  Muhammad Ali </span>
                            <button className="btn" onClick={() => handleSignOut()}>
                                Log out </button>
                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default UserButton;
*/
