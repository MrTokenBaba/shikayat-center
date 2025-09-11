"use client";
import { useState } from "react";
import { VscRepoClone    } from "react-icons/vsc";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-plum">
            <div className={'solid-bar-with-shadow'} >
                <div className="hidden lg:block">
                    <div className="mx-auto max-w-[2024px] px-0 md:px-12 lg:px-11 xl:px-16">
                        <div className="grid h-24 grid-cols-header items-center gap-3">
                            <div className={"flex"}>
                                <a className="z-10 relative font-medium underline text-eggplant" href="/">
                                        <VscRepoClone size={30} color="white" height={30} />

                                </a>

                                <nav className="ml-20 flex space-x-2 lg:space-x-5 xl:space-x-1 2xl:space-x-5 ">
                                    <a href="/company" className="group relative font-medium text-white">Trend 100 Company </a>
                                    <a href="/complaints" className="group relative font-medium text-white">Complaints</a>
                                </nav>
                            </div>
                            <div className={'flex'}></div>
                            <div className="flex items-center justify-end space-x-3">
                                <a className="z-10 relative items-center justify-center rounded-md
                                font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body  border border-white text-white
                                inline-flex whitespace-nowrap group"
                                href="/login"> Login / Sign up </a>
                                <a  className="z-10 relative items-center justify-center rounded-md
                                transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__FEBF9
                                 bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap"
                                href="" > + File a complaint</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 hidden px-0 md:block md:px-12 lg:hidden lg:px-16">
                    <div className="static left-0 right-0 flex items-center justify-between px-6 py-6 md:static md:px-0">
                        <a className="z-10 relative font-medium underline text-eggplant" href="/">
                            <img
                                className="text-3xl font-bold text-white md:text-eggplant"
                                width="200" height="26" alt=" Logo" src="./"/></a>
                                <button type="button">
                                    <div className="w-[30px] h-[23px]">
                                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 23"
                                             aria-label="Open navigation menu">
                                            <path
                                                d="M0 1.5A1.5 1.5 0 0 1 1.5 0h27a1.5 1.5 0 0 1 0 3h-27A1.5 1.5 0 0 1 0 1.5zm0 10A1.5 1.5 0 0 1 1.5 10h27a1.5 1.5 0 0 1 0 3h-27A1.5 1.5 0 0 1 0 11.5zM1.5 20a1.5 1.5 0 0 0 0 3h27a1.5 1.5 0 0 0 0-3h-27z"
                                                fill="#4840bb"></path>
                                        </svg>
                                    </div>
                                </button>
                    </div>
                </div>
                <div className="relative z-10 block md:hidden">
                    <div className="static left-0 right-0 flex items-center justify-between px-4 py-6 md:static">
                        <a className="z-10 relative font-medium underline text-eggplant" href="/">
                            <img className="text-3xl font-bold text-white md:text-eggplant"
                            width="200" height="26" alt="Wealthfront Logo"
                            src="./"/>
                        </a>
                        <button type="button">
                            <div className="w-[30px] h-[23px]">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 23"
                                     aria-label="Open navigation menu">
                                    <path
                                        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h27a1.5 1.5 0 0 1 0 3h-27A1.5 1.5 0 0 1 0 1.5zm0 10A1.5 1.5 0 0 1 1.5 10h27a1.5 1.5 0 0 1 0 3h-27A1.5 1.5 0 0 1 0 11.5zM1.5 20a1.5 1.5 0 0 0 0 3h27a1.5 1.5 0 0 0 0-3h-27z"
                                        fill="#4840bb"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
