"use client";
import { VscChip } from "react-icons/vsc";
import { useState } from "react";
export default function CompaniesPage() {
    const companies = [
        { id: 1, name: "Yıldırım Hukuk (Sms)", slug: "company-1", category: "Diğer Kategoriler", logo: "https://img.daisyui.com/images/profile/demo/1@94.webp", trend: "%1658", previousRank: "3", change: "up" },
        { id: 2, name: "Ephesia Holiday Beach Club", slug: "company-2", category: "Turizm Konaklama Tesisleri", logo: "https://img.daisyui.com/images/profile/demo/1@94.webp", trend: "%1466", previousRank: "-", change: "none" },
        { id: 3, name: "ÖSYM", slug: "company-3", category: "Özerk Kuruluşlar-Partiler", logo: "https://img.daisyui.com/images/profile/demo/1@94.webp", trend: "%620", previousRank: "1", change: "down" },
        { id: 4, name: "ABC Company", slug: "company-4" ,category: "Teknoloji", logo: "https://img.daisyui.com/images/profile/demo/1@94.webp", trend: "%320", previousRank: "5", change: "up" },
        { id: 5, name: "XYZ Company", slug: "company-5",category: "E-Ticaret", logo: "https://img.daisyui.com/images/profile/demo/1@94.webp", trend: "%110", previousRank: "2", change: "down" },
        { id: 6, name: "MNO Company", slug: "company-6", category: "Finans", logo: "https://img.daisyui.com/images/profile/demo/1@94.webp", trend: "%220", previousRank: "-", change: "none" },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Calculate paginated data
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentCompanies = companies.slice(indexOfFirst, indexOfLast);

    // Number of pages
    const totalPages = Math.ceil(companies.length / itemsPerPage);

    return (
        <div className={"bg-light-grey text-eggplant overflow-hidden"}>
            <div className="mx-auto flex max-w-[1460px] flex-col gap-y-20 px-4 sm:px-12 xl:px-16 my-6 md:my-8 ">
                {/* Header */}
                <div className={'grid grid-cols-2'}>
                    <div className="flex flex-col ">
                        <h1 className="text-3xl font-bold">
                            <span className="text-black">Trend</span>
                            <span className="text-green-500">100 Company</span>
                        </h1>
                    </div>
                    <div className="flex justify-self-end gap-4">

                        <a href="#!" role="button">
                            {/* <!-- Facebook --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{color: "#1877f2"}}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                        </a>

                        <a href="#!" role="button">
                            {/* <!-- Instagram --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{color: "#c13584"}}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>

                        <a href="#!" role="button">
                            {/* <!-- Google --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{color: "#ea4335"}}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>

                        <a href="#!" role="button">
                            {/* <!-- Twitter --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{color: "#1da1f2"}}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                    </div>

                </div>


                {/* Subtext */}
                <p className="text-gray-500 mb-6">
                    Artan ziyaret oranları ve popülerlikleriyle bugün trend olan markaları takip edin!
                </p>

                {/* Table Header */}


                {/* Company List */}

                <div className="space-y-4 mt-4">
                    {currentCompanies.map((c, i) => (
                        <div key={c.id}
                             className="grid grid-cols-3 items-center bg-gray-50 rounded-2xl px-4 py-7 shadow-sm ">
                            {/* Company Info */}
                            <a href={`/company/${c.slug}`} className="flex items-center gap-3">
                                <img
                                    src={c.logo}
                                    alt={c.name}
                                    className="w-20 h-20 rounded-lg object-contain border"
                                />
                                <div>
                                    <p className="font-semibold">{c.name}</p>
                                    <p className="text-sm text-gray-500">{c.category}</p>
                                </div>
                            </a>
                            {/* Trend (graph placeholder) */}
                            <div className={'flex'}>
                                <div className="grid  h-10 w-20  rounded-md">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                                               aria-label="1 star"/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                                               aria-label="2 star" defaultChecked/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                                               aria-label="3 star"/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                                               aria-label="4 star"/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                                               aria-label="5 star"/>
                                    </div>
                                </div>
                            </div>

                            {/* Previous Rank */}
                            <div className="flex items-center gap-1 justify-self-end">
                                <span>{c.previousRank}</span>
                                {c.change === "up" && <span className="text-green-500">▲</span>}
                                {c.change === "down" && <span className="text-red-500">▼</span>}
                                <div className="stats shadow">
                                    <div className="stat">
                                        <div className="stat-title  ">Total Page Views</div>
                                        <div className="stat-value">{c.trend}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center space-x-2 mt-6">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
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
