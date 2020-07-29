import React from "react";

import "./MovieList.style.scss";

import { MovieCard } from "../index";

const MovieList = (props) => {
  return (
    <>
      <div className="movie__list">
        {props.movieData.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
