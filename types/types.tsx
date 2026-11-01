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