import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({movies, setSelectedMovie}) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Search Results</h2>
            <div className="grid grid-cols-4 gap-4">
                {movies.length > 0 ? movies.map((movie) => (
                    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} onClick={() => setSelectedMovie(movie.imdbID)} className="relative group cursor-pointer border p-4">
                        <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-full transition-transform duration-300 transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300" >
                            <h2 className="text-white text-center">{movie.Title}</h2>
                        </div>
                    </Link>
                )) : <p>No movies found,</p>}
            </div>
        </div>
    );
};

export default SearchResults;