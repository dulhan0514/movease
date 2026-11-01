import MovieCard from "@/components/MovieCard";

import {type Movie} from "@/types/types"

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

    // const a : Movie = {
    //     title : data.results[0].title, 
    //     overview : data.results[0].overview,
    //     poster_path : data.results[0].poster_path,
    //     id : data.results[0].id
    // }

    // const b : Movie = {
    //     title : data.results[1].title, 
    //     overview : data.results[1].overview,
    //     poster_path : data.results[1].poster_path,
    //     id : data.results[1].id

    // }

    // const c : Movie = {
    //     title : data.results[2].title, 
    //     overview : data.results[2].overview,
    //     poster_path : data.results[2].poster_path,
    //     id : data.results[2].id
    // }

    return(
        <main>
            <h1>Popular Movies</h1>
            {data.results.map((movie : any) =>(
                <MovieCard key={movie.id} m={movie} />
            )
        )}
        </main>
    );


    // return(
    //     <main>
    //         <h1>Popular Movies</h1>
    //         <MovieCard m={a} />
    //         <MovieCard m={b}/>
    //         <MovieCard m={c}/>
    //     </main>
    // );
}

