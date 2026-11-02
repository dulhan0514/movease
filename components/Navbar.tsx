import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="top-0 sticky z-50 flex justify-between p-5 pr-6 bg-black w-full">
            <span className="text-yellow-500 font-mono font-bold text-2xl"><Link href="/">MovEase</Link></span>
            <ul className="flex gap-16 *:hover:text-yellow-500 *:transition-colors *:ease-in *:text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/movies">Movies</Link></li>
                <li><Link href="/shows">Shows</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
}       