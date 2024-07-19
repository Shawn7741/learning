import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useFavourites } from "./FavouriteContext";

const MovieDetail = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const { addFavourite } = useFavourites();

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=c03b81b1`);
            setMovie(response.data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <div>Loading....</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl">{movie.Title}</h2>
            <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-1/2 mx-auto" />
            <p>{movie.Plot}</p>
            <p><b>Year:</b>{movie.Year}</p>
            <p><b>Type:</b>{movie.Type}</p>
            <button onClick={() => addFavourite(movie)}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md">Add to Favourites</button>
        </div>
    );
};

export default MovieDetail;

