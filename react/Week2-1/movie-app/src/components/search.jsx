import React, {useState} from "react";
import axios from 'axios';

const Search = ({setMovies}) => {
    const [query, setQuery] = useState('');
    
    const searchMovies = async (e) => {
        e.preventDefault();

        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=c03b81b1`);

        setMovies(response.data.Search);
    };

    return (
        <form onSubmit={searchMovies} className="flex justify-center mt-4">
            <input type="text" value={query} onChange={(e) =>setQuery(e.target.value)} placeholder="Search movie..." className="p-2 border-gray-300 rounded-md" />
            <button type="submit" className="ml-2 p-2 bg-cyan-500 text-white rounded-md">Search</button>
        </form>
    );
};

export default Search