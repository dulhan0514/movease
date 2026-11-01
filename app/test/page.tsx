import MovieCard from "@/components/MovieCard";

import {type Movie} from "@/components/MovieCard"

export const instant = false;

export default async function TestPage() {
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        {
            headers:{
                Authorization : `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
                accept : "application/json",
            },
        }
    );

    const data = await response.json();

    console.log(data);

    const a : Movie = {
        title : data.results[0].title, 
        overview : data.results[0].overview,
        path : data.results[0].poster_path
    }

    const b : Movie = {
        title : data.results[1].title, 
        overview : data.results[1].overview,
        path : data.results[1].poster_path
    }

    return(
        <main>
            <h1>Popular Movies</h1>
            <MovieCard m={a} />
            <MovieCard m={b}/>
        </main>
    );
}

