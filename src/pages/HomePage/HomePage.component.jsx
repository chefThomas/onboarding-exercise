import React, { useState, useEffect } from "react";

import "./HomePage.styles.scss";

import { MovieCard } from "../../components";
import { movies$ } from "../../movies";
const HomePage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    movies$.then((movies) => setMovieData(movies));
  }, []);

  return (
    <div className="home__page">
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
