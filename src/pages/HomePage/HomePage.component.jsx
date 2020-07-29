import React, { useState, useEffect } from "react";

import "./HomePage.style.scss";

import { MovieCard, MovieList } from "../../components";
import { SearchBar } from "../../partials";
import { movies$ } from "../../movies";

const HomePage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    movies$.then((movies) => setMovieData(movies));
  }, []);

  // future filtering concept; will require context API to allow
  // the movieData and searchData to interact, current solution may not completely work.

  // const filteredMovies = movieData.filter((filteredMovie) =>
  //   filteredMovie.title.toLowerCase().includes(searchData.toLowerCase())
  // );

  return (
    <div className="home__page">
      <SearchBar />
      <MovieList>
        {movieData.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </MovieList>
    </div>
  );
};

export default HomePage;
