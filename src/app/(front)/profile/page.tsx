'use client';
import React, { useState } from "react";
/*import ProfileCard from "@components/company/ProfileCard";*/
import {VscEye} from "react-icons/vsc";

interface ProfileViewProps {
    params: {
        username: string ,
        id: string;
    }
}


const ProfileView = async ({params}: ProfileViewProps) =>{
    const {username} = params;
    const [currentPage1, setCurrentPage1] = useState(1);

    const reviews= [
        {
            id: 1,
            title: "The best way for me to maximize every one of my hard earned dollars.",
            slug: "the-best-way-for-me-to-maximize-every-one-of-my-hard-earned-dollars",
            user: {name: "Stanley R", account: "Cash Account", profileURL : ''},
            gradient: "from-day-start to-day-end",
            type: "review",
            date: '14.5.2023'
        },
        {
            id: 2,
            title: "The single best resource for investing, managing retirement and seeing my entire financial picture.",
            slug: "the-single-best-resource-for-investing-managing-retirement-and-seeing-my-entire-financial-picture",
            user: {name: "Joshua B", account: "Automated Investing Account", profileURL : ''},
            gradient: "from-soft-start to-soft-end",
            type: "review",
            date: '14.5.2023'
        },
        {
            id: 3,
            title: "I LOVE Wealthfront and have moved almost all of my finances there.",
            slug: "i-love-wealthfront-and-have-moved-almost-all-of-my-finances-there",
            user: {name: "Daniel C", account: "Automated Bond Portfolio"},
            gradient: "from-vibrant-start to-vibrant-end",
            type: "review",
            date: '14.5.2023'
        },
        {
            id: 3,
            title: "I LOVE Wealthfront and have moved almost all of my finances there.",
            slug: "i-love-wealthfront-and-have",
            user: {name: "Daniel C", account: "Automated Bond Portfolio", profileURL : ''},
            gradient: "from-vibrant-start to-vibrant-end",
            type: "review",
            date: '14.5.2023'
        }
    ];

    const itemsPerPage = 3;

    // Calculate paginated data
    const indexOfLast = currentPage1 * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentCompanies = reviews.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(reviews.length / itemsPerPage);
    const profileData = {
        username: username
    }

    return (
        <div
            className="hide-scrollbar m-auto w-full max-w-[1460px] snap-x snap-mandatory overflow-scroll px-8 py-8 sm:pl-40 sm:pr-52 md:px-6 lg:px-20 xl:px-28">

         {/*   <ProfileCard profile={profileData} />*/}
            <div className="flex flex-col py-4 w-[1300px] grid-cols-4 gap-4 sm:w-[1450px] sm:grid-cols-[1.5fr,1fr,1fr,1fr] md:w-auto md:grid-cols-3 ">
                {currentCompanies.map((review) => (
                    (
                        <div
                            key={review.id}
                            className="flex h-full snap-center snap-always flex-col justify-between gap-4 rounded-standard bg-white p-large ">
                            <div className="flex gap-2">
                                <div className={`h-[50px] w-[50px] shrink-0 rounded-[50%] border border-content-divider bg-blue-400 ${review.gradient}`}>

                                    <div
                                        className={` h-[50px] w-[50px] shrink-0 rounded-full flex items-center justify-center border border-gray-300 ${review.user?.profileURL
                                            ? ""
                                            : "bg-gradient-to-br from-green-400 to-blue-500 text-white font-bold"}`}>
                                        {review.user?.profileURL ? (
                                            <img
                                                src={review.user.profileURL}
                                                alt={review.user.name}
                                                className="h-full w-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-lg ">{review.user?.name?.charAt(0).toUpperCase() || "U"} </span>
                                        )}
                                    </div>

                                </div>
                                <div className="pt-1 ">
                                    <p className="copy-body font-bold "><a href={review.user?.profileURL}>{review.user?.name}</a></p>
                                    <p className="copy-body flex  items-center">
                                        <span>{review?.date}</span>
                                        <span className="flex ml-4 text-gray-500 ">545 <VscEye
                                            className={'ml-3'}/></span>
                                    </p>

                                </div>

                            </div>
                            <p className="pb-2 font-bold"><a href={review.slug}>{review.title}</a></p>
                            <p className={'font-light'}>
                                Permission is hereby granted, free of charge, to any person obtaining a copy of this
                                software and associated documentation files (the "Software"), to deal in the Software
                                without restriction, including without limitation the rights to use, copy, modify,
                                merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
                                permit persons to whom the Software is furnished to do so, subject to the following
                                conditions. The above copyright notice and this permission notice shall be included in all copies or
                                substantial portions of the Software.</p>
                        </div>
                    )
                ))}

            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-2 mt-6">
                <button
                    onClick={() => setCurrentPage1((p) => Math.max(p - 1, 1))}
                    disabled={currentPage1 === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                > Prev    </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage1(i + 1)}
                        className={`px-3 py-1 border rounded ${
                            currentPage1 === i + 1 ? "bg-blue-500 text-white" : ""
                        }`}
                    > {i + 1}  </button>
                ))}

                <button
                    onClick={() => setCurrentPage1((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage1 === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >Next </button>
            </div>
        </div>
    )
}

export default ProfileView;
