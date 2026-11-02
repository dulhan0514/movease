import type { Movie } from "@/types/types";

export default function MovieCard({m} : {m : Movie}){
    const imageUrl : string = "https://image.tmdb.org/t/p/w500" + m.poster_path;
    
    return(
        <div className="hover:-translate-y-3 transition ease-in-out duration-175">
           <div className="relative aspect-[2/3] overflow-hidden rounded-lg ">
                <img src={imageUrl} alt={m.title} className="object-cover w-full h-full"/>

                <div className="absolute top-1 left-1 bg-black/50  pr-2 pl-1 rounded-sm text-sm">
                    ⭐{m.vote_average.toFixed(1)}
                </div>

            </div> 
            <h2 className="text-md font-semibold mt-2 mb-0 border-0 text-white block">{m.title}</h2> 
            <span className="left-0 text-sm mt-0 text-white/50 ">{m.release_date.slice(0,4)}</span>
            
        </div>
    );
}
