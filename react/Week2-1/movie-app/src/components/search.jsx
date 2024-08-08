import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Search = ({setMovies}) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);

        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=c03b81b1`);

        const data = await response.json();

        if (data.Response === "True") {
            setMovies(data.Search || []);
            navigate('/search-results');
        } else {
            setMovies([]);
            setError(data.Error);
        }
    };

    return (
        <div className="p-4 flex justify-center">
        <form onSubmit={handleSearch} className="flex">
            <input type="text" value={query} onChange={(e) =>setQuery(e.target.value)} placeholder="Search movie..." className="p-2 border rounded" />
            <button type="submit" className="ml-2 p-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-800">Search</button>
        </form>
        {error && <div className="text-red-800 mb-2">{error}</div>}
        </div>
    );
};
        

export default Search




