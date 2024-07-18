import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Search from "./components/search";
import MovieDetail from "./components/MovieDetail";
import Rating from "./components/Rating";
import Recommendations from "./components/Recommendations";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <Router>
      <div className="container mx-auto"><Search setMovies={setMovies} />
      <Routes>
        <Route path="/" element={
          <div className="grid grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div key={movie.imdbID} onClick={() => selectedMovie(movie.imdbID)} className="cursor-pointer border p-4">
                <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-full" />
               
                <h2 className="text-center">{movie.Title}</h2>
                </div>
            ))}
          </div>
        }
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
  );
};

export default App;