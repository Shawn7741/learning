import React from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "./FavouriteContext";


const Favourites = () => {
    const {favourites, removeFavourites} = useFavourites();

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Favourites</h2>
            <div className="grid grid-cols-4 gap-4">{favourites.length > 0 ? favourites.map((movie) => (
                <div key={movie.imdbID} className="relative group cursor-pointer border p-4">
                <Link to={`/movie/${movie.imdbID}`}>
                    <img src={movie.Poster} alt={`${movie.Title}poster`} className="w-full transition-transform duration-300 transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <h2 className="text-white text-center">{movie.Title}</h2>
                    </div>
                </Link>
                <button onClick={() => removeFavourites(movie)} className="mt-4 p-2 bg-red-500 text-white rounded">Remove from Favourites</button>
                </div>
            )) : <p> No favourites added</p>}
            </div>
        </div>
    );
};

export default Favourites;