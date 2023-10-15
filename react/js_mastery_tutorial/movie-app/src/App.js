import { useEffect } from "react";

import "./App.css";
import searchIcon from "./search.svg";

const apiKey = "2bf1c65e";
const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&`;

const App = () => {
  // create a variable that will take in a movie title value
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
