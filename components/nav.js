"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="w-full flex items-center justify-between flex-wrap bg-green-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-2xl tracking-tight">
                    jhdgo1225.blog
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3 toggle"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full overflow-hidden transition-all duration-1000 ease-in-out transform ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } lg:opacity-100 lg:max-h-none lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link
                        href="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-base">
                        About
                    </Link>
                    <Link
                        href="/category"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-base">
                        Category
                    </Link>
                    <Link
                        href="/post"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-base">
                        Post
                    </Link>
                    <Link
                        href="/contact"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white text-base">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
