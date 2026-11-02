import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex justify-between p-5 pr-6 border     border-red-500">
            <span className="text-yellow-500 font-mono font-bold text-2xl"><Link href="/">MovEase</Link></span>
            <ul className="flex gap-16">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/movies">Movies</Link></li>
                <li><Link href="/shows">Shows</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
}   