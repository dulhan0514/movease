import { Movie } from "@/types/types";

export default function MovieCard({m} : {m : Movie}){
    const imageUrl : string = "https://image.tmdb.org/t/p/w500" + m.poster_path;
    
    return(
        <div>
        <h1>{m.title}</h1>
        <p>{m.overview}</p>
        <img src={imageUrl} alt={m.title} width={300}/>
        </div>
    );
}
