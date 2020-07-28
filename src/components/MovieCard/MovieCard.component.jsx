import React from "react";

import "./MovieCard.style.scss";

const MovieCard = ({ movie }) => {
  const { url, title, category, likes, dislikes } = movie;
  return (
    <div className="movie__card">
      <img src={url} alt="" className="movie__image" />
      <div className="movie__title">{title}</div>
      <div className="movie__category">{category}</div>
      <div className="movie__ratings">
        <span className="movie__title">Likes: {likes}</span>
        <span className="movie__title">Dislikes: {dislikes}</span>
      </div>
    </div>
  );
};

export default MovieCard;
