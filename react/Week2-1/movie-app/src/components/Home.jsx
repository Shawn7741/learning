import { Link } from "react-router-dom";



const movies = [
    {
        name: "Sistas",
        image: "https://m.media-amazon.com/images/M/MV5BZDhlNTZmYmMtYTM5Zi00ZmIwLWE3ZmItYTc5OGE3N2Q1NTQ4XkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_SX300.jpg",
        imdbID: "tt10752770"
    },
    {
        name: "Deadpool",
        image: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        imdbID: "tt1431045"
    }
    , {
        name: "Superman",
        image: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        imdbID: "tt0078346"
    },
    {
        name: "Snowfall",
        image: "https://m.media-amazon.com/images/M/MV5BYzVjNTRhNWItMzQzZS00MDBkLWIxNDMtOTU4MzRmMmNiZWRiXkEyXkFqcGdeQXVyMTUwMzE3NjY0._V1_SX300.jpg",
        imdbID: "tt6439752"
    },
    {
        name: "Power",
        image: "https://m.media-amazon.com/images/M/MV5BMTg0NDMyMzEzOF5BMl5BanBnXkFtZTgwNTIzODQxMjI@._V1_SX300.jpg",
        imdbID: "tt3281796"
    },
    {
        name: "Money Heist",
        image: "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg",
        imdbID: "tt6468322"
    },
    {
        name: "Breaking Bad",
        image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
        imdbID: "tt0903747"
    },
    {
        name: "Jumanji: Welcome to the Jungle",
        image: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        imdbID: "tt2283362"
    },
]

const Home = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {movies.map((movie, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg shadow-cyan-700/100 bg-white">
                    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} onClick={() => setSelectedMovie(movie.imdbID)}>
                    <img className="w-full" src={movie.image} alt={`${movie.name}`}  />
                    <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{movie.name}</div>
                    </div>
                    </Link>
                </div>

            ))}
            
        </div>
        
    );
};

export default Home