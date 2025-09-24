"use client";
import { useState } from "react";
import { VscEye, VscGitMerge } from "react-icons/vsc";

export default function ComplaintsPage() {
    // Example [complaint] list (replace with API data later)
    const complaints = [
        {
            id: 1,
            title: "Late delivery issue",
            slug: "/[complaint]/1",
            date: "2025-09-01",
            views: 545,
            company: {
                title: "Turkcell",
                slug: "company-1",
            },
            user: {
                name: "Ali Khan",
                avatar: "", // leave empty for initial fallback
                profileURL: "/profile/ali-khan",
            },
        },
        {
            id: 2,
            title: "Refund not processed",
            slug: "/[complaint]/2",
            date: "2025-09-01",
            views: 320,
            company: {
                title: "turknet",
                slug: "company-2",
            },
            user: {
                name: "Sara Ahmed",
                avatar: "",
                profileURL: "/profile/sara",
            },
        },
        {
            id: 3,
            title: "Food arrived cold",
            slug: "/[complaint]/3",
            date: "2025-08-30",
            views: 812,
            company: {
                title: "yemeksepte",
                slug: "company-1",
            },
            user: {
                name: "Bilal Hussain",
                avatar: "",
                profileURL: "/profile/bilal",
            },
        },
        {
            id: 4,
            title: "App keeps crashing",
            slug: "/[complaint]/4",
            date: "2025-08-29",
            views: 190,
            company: {
                title: "unversity",
                slug: "company-2",
            },
            user: {
                name: "Fatima Zahra",
                avatar: "",
                profileURL: "/profile/fatima",
            },
        },
        {
            id: 5,
            title: "App keeps crashing",
            slug: "/[complaint]/4",
            date: "2025-08-29",
            views: 190,
            company: {
                title: "unversity",
                slug: "unversity",
            },
            user: {
                name: "Fatima Zahra",
                avatar: "",
                profileURL: "/profile/fatima",
            },
        },
        // add more complaints...
    ];

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(complaints.length / itemsPerPage);

    // Slice complaints for current page
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentComplaints = complaints.slice(indexOfFirst, indexOfLast);

    return (
        <div className="bg-light-grey text-eggplant overflow-hidden">
            <div className="mx-auto flex max-w-[1460px] flex-col gap-y-10 px-4 sm:px-12 xl:px-16 my-6 md:my-8">
                {/* Header */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">
                        <span className="text-black">Complaints</span>
                    </h1>
                </div>

                {/* Subtext */}
                <p className="text-gray-500 mb-6">
                    Kullanıcılar tarafından paylaşılan güncel şikayetleri inceleyin.
                </p>

                {/* Complaints List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentComplaints.map((review) => (
                        <div
                            key={review.id}
                            className="flex h-full flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow"
                        >
                            {/* User Info */}
                            <div className="flex gap-3 items-center">
                                <div className="h-[50px] w-[50px] shrink-0 rounded-full border border-gray-300 flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white font-bold">
                                    {review.user.avatar ? (
                                        <img
                                            src={review.user.avatar}
                                            alt={review.user.name}
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg"> {review.user.name.charAt(0).toUpperCase()}</span>
                                    )}
                                </div>
                                <div>
                                    <p className="font-bold">
                                        <a href={review.user.profileURL}>{review.user.name}</a>
                                        <span className={'text-blue-900 inline-flex ml-4'} ><a href={`company/${review.company?.slug}`}>  <VscGitMerge /> {review.company?.title}</a></span>
                                    </p>
                                    <p className="text-sm flex items-center text-gray-500">
                                        <span>{review.date}</span>
                                        <span className="flex ml-4 items-center">
                      {review.views} <VscEye className="ml-2" />
                    </span>
                                    </p>
                                </div>
                            </div>

                            {/* Complaint Title */}
                            <p className="font-bold text-lg">
                                <a href={review.slug}>{review.title}</a>
                            </p>

                            {/* Complaint Excerpt */}
                            <p className="text-sm text-gray-600">
                                Bu şikayet örnek içeriktir. Gerçek veriler API’den
                                yüklenecektir. Kullanıcı deneyimini artırmak için detay sayfası
                                üzerinden tam şikayet okunabilir.
                            </p>


                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center space-x-2 mt-6">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50" > Prev
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 border rounded ${
                                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
