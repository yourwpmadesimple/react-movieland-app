import React, { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const MOVIE_API_KEY = process.env.REACT_APP_OMDB_KEY;

const movie1 = {
  Title: "Red Heat",
  Year: "1988",
  imdbID: "tt0095963",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDkwMTJlMGMtMGJmMy00Mjg2LWEwOWEtZTAxNzQxMmVjYzVkXkEyXkFqcGdeQXVyNjc2NDI1ODA@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${MOVIE_API_KEY}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Heat");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Seear for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
