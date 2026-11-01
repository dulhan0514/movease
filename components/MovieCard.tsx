export type Movie = {
    adult : boolean;
    backdrop_path : string;
    genre_ids : number[];
    id : number;
    title:string;
    original_language : string;
    original_title : string;
    overview : string;
    popularity : number;
    poster_path : string | null;
    release_date : Date;
    softcore : boolean;
    video : boolean;
    vote_average : number;
    vote_count : number;
};

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
