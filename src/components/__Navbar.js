"use client";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="pointer-events-none relative z-50 flex flex-none flex-col">
            <div className="top-0 z-10 h-16 pt-6">
                <div className="sm:px-8 w-full">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="relative flex gap-4">
                                    {/* Logo */}
                                    <div className="flex flex-1">
                                        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                                            <a className="pointer-events-auto" href="/">
                                                <img
                                                    alt="logo"
                                                    width="512"
                                                    height="512"
                                                    className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=64&q=75"
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Center nav */}
                                    <div className="flex flex-1 justify-end md:justify-center">
                                        {/* Mobile menu button */}
                                        <div className="pointer-events-auto md:hidden">
                                            <button
                                                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                                                type="button"
                                                onClick={() => setMenuOpen(!menuOpen)}
                                            >
                                                {menuOpen ? "Close" : "Menu"}
                                            </button>
                                        </div>

                                        {/* Desktop nav */}
                                        <nav className="pointer-events-auto hidden md:block">
                                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                                <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a></li>
                                                <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a></li>
                                                <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a></li>
                                                <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a></li>
                                                <li><a className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400" href="/uses">Uses</a></li>
                                            </ul>
                                        </nav>
                                    </div>

                                    {/* Right side button (theme toggle placeholder) */}
                                    <div className="flex justify-end md:flex-1">
                                        <div className="pointer-events-auto">
                                            <button
                                                type="button"
                                                aria-label="Switch to dark theme"
                                                className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                                            >
                                                🌙
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile dropdown */}
                                {menuOpen && (
                                    <div className="md:hidden mt-4">
                                        <ul className="flex flex-col rounded-lg bg-white/90 p-4 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                            <li><a href="/about" className="py-2 block">About</a></li>
                                            <li><a href="/articles" className="py-2 block">Articles</a></li>
                                            <li><a href="/projects" className="py-2 block">Projects</a></li>
                                            <li><a href="/speaking" className="py-2 block">Speaking</a></li>
                                            <li><a href="/uses" className="py-2 block">Uses</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
