import React from "react";
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
  
]

const Home = ({ movies, setSelectedMovie}) => {
    return (
        <div className="grid grid-cols-4 gap-4">{movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} onClick={() => setSelectedMovie(movie.imdbID)}
            className="relative group cursor-pointer border p-4">
                <img src={movie.Poster} alt={`${movie.Title}poster`} className="w-full transition-transform duration-300 transform group-hover::scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <h2 className="text-white text-center">{movie.Title}</h2>
                </div>
            </Link>
        ))}
       </div>
    );
};

export default Home