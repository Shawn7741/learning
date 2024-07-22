import {useState} from "react";
import { useNavigate } from "react-router-dom";




const Search = ({setMovies}) => {
    const [query, setQuery] = useState('');

    const navigate = useNavigate();
    
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return;

        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=c03b81b1`);

        const data = await response.json();

        if (data.Search) {
            setMovies(data.Search);
            navigate('/search-results');
        }
    };

    return (
        <>
        <form onSubmit={handleSearch} className="p-4 align-middle">
            <input type="text" value={query} onChange={(e) =>setQuery(e.target.value)} placeholder="Search movie..." className="p-2 border rounded" />
            <button type="submit" className="ml-2 p-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-800">Search</button>
        </form>
        </>
    );
};
        
        {/* <div className="grid grid-cols-4 gap-4">
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
}; */}

export default Search




