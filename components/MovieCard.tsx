export type Movie = {
    title:string;
    overview : string;
    path : string | null;
};

export default function MovieCard({m} : {m : Movie}){
    const imageUrl : string = "https://image.tmdb.org/t/p/w500" + m.path;
    
    return(
        <div>
        <h1>{m.title}</h1>
        <p>{m.overview}</p>
        <img src={imageUrl} alt="Interstellar Image"/>
        </div>
    );
}


// const movie: Movie = {
//   title: "Interstellar",
//   overview: "A team of explorers travels through a wormhole.",
//   rating: "Excellent"
// };
