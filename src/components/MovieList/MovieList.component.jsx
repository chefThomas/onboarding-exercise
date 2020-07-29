import React from "react";

import "./MovieList.style.scss";

import { MovieCard } from "../index";

const MovieList = (props) => {
  return (
    <div className="movie__list__container">
      <div className="movie__list__cards">
        {props.movieData.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <MovieCard
              movie={movie}
              movieLikes={movie.likes}
              movieDislikes={movie.dislikes}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
