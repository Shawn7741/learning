import {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Search from "./components/search";
import MovieDetail from "./components/MovieDetail";
import Rating from "./components/Rating";
import Recommendations from "./components/Recommendations";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import { FavouritesProvider } from "./components/FavouriteContext";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    
    <FavouritesProvider>
    <Router>
      <div className="container mx-auto">
        <nav className="p-4 flex justify-between  text-white">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/favourites" className="mx-2">Favourites</Link>
        </nav>
        <Search setMovies={setMovies} />
      <Routes>
        <Route path="/" element={<Home  /> }
        />
        
        <Route path="/favourites" element={<Favourites />}
        />
        <Route path="/search-results" element={<SearchResults movies={movies} setSelectedMovie={selectedMovie} />}
        />
        <Route path="/movie/:id" element={<MovieDetail selectedMovie={selectedMovie} />}
        />
        <Route path="/rate/:id" element={<Rating movieId={selectedMovie} />}
        />
        <Route path="/recommendations/:id" element={<Recommendations selectedMovie={selectedMovie} />}
        />
        </Routes>
        </div>
        </Router>
        </FavouritesProvider>
  );
};
//           <div className="grid grid-cols-4 gap-4">
//             {movies.map((movie) => (
//               <Link to={`movie/${movie.imdbID}`} key={movie.imdbID} onClick={() => selectedMovie(movie.imdbID)} className="cursor-pointer border p-4">
              
//                 <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-full" />
               
//                 <h2 className="text-center">{movie.Title}</h2>
//                 </Link>
//             ))}
//           </div>
//         }
//         />
//         <Route path="/movie/:id" element={<MovieDetail selectedMovie={selectedMovie} />}
//         />
//         <Route path="/rate/:id" element={<Rating movieId={selectedMovie} />}
//         />
//         <Route path="/recommendations/:id" element={<Recommendations selectedMovie={selectedMovie} />}
//         />
//       </Routes>
//       </div>
//     </Router>
//     </FavouritesProvider>
//   );
// };

export default App;