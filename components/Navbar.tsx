"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="flex top-0 sticky z-50 justify-between p-5 pr-6 bg-black w-full h-16">
            <span className="text-yellow-500 font-mono font-bold text-2xl"><Link href="/">MovEase</Link></span>
            <ul className="hidden md:flex md:gap-16 *:hover:text-yellow-500 *:transition-colors *:ease-in *:text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/movies">Movies</Link></li>
                <li><Link href="/shows">Shows</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>

            <button className="md:hidden text-2xl" 
                onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            {isOpen && (    
                <div className="absolute flex flex-col justify-start items-center md:hidden right-0 top-10 bg-black *:text-white w-1/2 h-screen gap-10 pt-20">
                    <div><Link href="/">Home</Link></div>
                    <div><Link href="/movies">Movies</Link></div>
                    <div><Link href="/shows">Shows</Link></div>
                    <div><Link href="/about">About</Link></div>
                </div>
            )}

        </nav>
    );
}       