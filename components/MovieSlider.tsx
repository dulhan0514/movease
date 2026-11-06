"use client";

import { useRef } from "react";
import type { Movie } from "@/types/types";
import MovieCard from "./MovieCard";

interface MovieWithSectionHeader{
    movies : Movie[];
    sectionHeader : string;
}

export default function MovieSlider({movies , sectionHeader}: MovieWithSectionHeader){
    return(
        <section className="">
            <h1 className="">{sectionHeader}</h1>
            <div className="flex gap-5 overflow-hidden">
                {movies.map((movie : Movie)=>(
                    <MovieCard key={movie.id} m={movie} />
                )
                )}
            </div>
        </section>
    );
}