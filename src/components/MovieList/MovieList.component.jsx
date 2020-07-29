import React, { useContext, useEffect } from "react";

import "./MovieList.style.scss";

import { RatingContext } from "../../contexts";
import { MovieCard } from "../index";

const MovieList = (props) => {
  const { ratingData, setRatingData } = useContext(RatingContext);

  // useEffect(() => {
  //   setRatingData(props.movie);
  // }, []);

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
