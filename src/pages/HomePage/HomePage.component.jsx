import React, { useState, useEffect } from "react";

import "./HomePage.style.scss";

import { MovieCard } from "../../components";
import { SearchBar } from "../../partials";
import { movies$ } from "../../movies";
const HomePage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    movies$.then((movies) => setMovieData(movies));
  }, []);

  return (
    <div className="home__page">
      <SearchBar />
      <div className="movie-list">
        {movieData.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
