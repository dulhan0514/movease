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

    return(
        <main>
            <h1>Popular Movies</h1>
            <p>Check the console</p>
        </main>
    );
}
