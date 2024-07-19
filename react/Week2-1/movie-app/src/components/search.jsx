import {useState} from "react";
import axios from 'axios';

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
        name: "Superman",
        image: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        imdbID: "tt0078346"
    },
    {
        name: "Deadpool",
        image: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        imdbID: "tt1431045"
    },
  
]

const Search = ({setMovies}) => {
    const [query, setQuery] = useState('');
    
    const searchMovies = async (e) => {
        e.preventDefault();

        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=c03b81b1`);

        setMovies(response.data.Search);
        console.log(response.data)
    };

    return (
        <>
        <form onSubmit={searchMovies} className="flex  justify-center m-4">
            <input type="text" value={query} onChange={(e) =>setQuery(e.target.value)} placeholder="Search movie..." className="text-black" />
            <button type="submit" className="ml-2 p-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-800">Search</button>
        </form>
        
        <div className="grid grid-cols-4 gap-4">
            {movies.map((movie, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg shadow-cyan-700/100 bg-white">
                    <img className="w-full" src={movie.image} alt={`${movie.name}`}  />
                    <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{movie.name}</div>
                    </div>
                </div>

            ))}
            
        </div>
        

      
        
        
      </>
    );
};

export default Search




