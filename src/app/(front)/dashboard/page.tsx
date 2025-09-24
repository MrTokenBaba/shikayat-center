"use client";
import React from "react";
import {signOut} from "next-auth/react";
import {useSession} from "next-auth/react";

const DashboardPage = () => {
    const {data: session} = useSession();
    return (
        <div className='p-6'>
            <div className={'card bg-base-100 w-96 shadow-sm'}>
                <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <div className={'gird align-middle '}>
                    <div> Name : {session?.user?.name}</div>
                    <div> email : {session?.user?.email}</div>
                    <button onClick={ () => signOut() } className={'bg-red-400 text-white font-bold px-6 py-3 mt-2'}>Sign Out</button>
                </div>
                </div>
            </div>

        </div>
    )
}
export default DashboardPage;