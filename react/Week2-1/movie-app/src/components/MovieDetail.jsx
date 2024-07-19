import {useState, useEffect} from "react";
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
            console.log(response.data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <div className="text-white">Loading....</div>;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-indigo-700/100 bg-white">
            <img className="w-full" src={movie.Poster} alt={`${movie.Title} poster`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.Title}</div>
                <p className="text-gray-700 text-base">{movie.Plot}</p>
                <p className="text-gray-700 text-base">{movie.Actors}</p><br />
                <p><b>Year: </b><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.Year}</span></p>
                <p><b>Category: </b><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.Type}</span></p>
                <p><b>Cast: </b><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.Actors}</span></p>            
                <p><b>Rating: </b> <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.imdbRating}</span></p>
                <button onClick={() => addFavourite(movie)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add to Favourites</button>

            </div>

        </div>

        // <div className="p-4">
            
        //     <h2 className="text-2xl text-white">{movie.Title}</h2>
        //     <br></br>
        //     <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-1/4 "/>
        //     <div className="text-lg text-white">
        //     <p> {movie.Plot}</p>
        //     <p><b>Year: </b>{movie.Year}</p>
        //     <p><b>Type: </b>{movie.Type}</p>
            // <p><b>Actors: </b> {movie.Actors}</p>
            
            //     <ul>
            //     <p><b>Ratings:</b>
                  
            //         {movie.Ratings.map((rating, index) => (
            //         <li key={index}>
            //             <b>Source:</b> 
            //             {rating.Source} - <b>Value:</b> {rating.Value}
            //         </li>
            //         ))}
            //         </p>

            //     </ul>
            // <p><b>IMDB Rating: </b> {movie.imdbRating}</p>
        //     </div>
        //     <button onClick={() => addFavourite(movie)}
        //     className="mt-2 p-2 bg-blue-500 text-white hover:bg-blue-700">Add to Favourites</button>
        // </div>
    );
};

export default MovieDetail;


