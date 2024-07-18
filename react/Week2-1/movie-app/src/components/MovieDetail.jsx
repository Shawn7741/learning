import React, {useState, useEffect} from "react";
import axios from 'axios';

const MovieDetail = ({ selectedMovie }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=c03b81b1`);
            setMovie(response.data);
        };
        fetchMovie();
    }, [selectedMovie]);

    if (!movie) return <div>Loading....</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl">{movie.Title}</h2>
            <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-1/2 mx-auto" />
            <p>{movie.Plot}</p>
            <p><b>Cast:</b>{movie.Actors}</p>
            <p><b>Rating:</b>{movie.imdbRating}</p>
        </div>
    );
};

export default MovieDetail;

