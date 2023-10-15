import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import searchIcon from "./search.svg";

const apiKey = "2bf1c65e";
const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&`;

const App = () => {
  // useState for movies
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // create a variable that will take in a movie title value
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          //   calling our searchTerm state for our input value
          value={searchTerm}
          //   callback function for when users input the title they are looking for
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* using an onClick to call our search function */}
        <img
          src={searchIcon}
          alt="search"
          //   for each time clicked, run the searchMovies function (passing the searchTerm as an argument)
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* calling our imported movieCard component and passing in our data as our object */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
