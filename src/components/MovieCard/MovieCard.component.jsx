import React, { useState } from "react";

import "./MovieCard.style.scss";

import { ThumbUp, ThumbDown } from "../../assets";

const MovieCard = ({ movie, movieLikes, movieDislikes }) => {
  let { url, title, category, likes, dislikes } = movie;
  const [likeData, setLikeData] = useState({
    likes: movieLikes,
  });
  const [dislikeData, setDislikeData] = useState({
    dislikes: movieDislikes,
  });

  console.log(dislikeData);

  return (
    <div className="movie__card">
      <img
        src={url}
        alt={`Movie poster for ${title}`}
        className="movie__image"
      />
      <div className="movie__title">{title}</div>
      <div className="movie__category">{category}</div>
      <div className="movie__ratings">
        <div className="movie__likes">
          <ThumbUp
            className="btn"
            onClick={() => {
              setLikeData({ likes: likes + 1 });
            }}
          />{" "}
          <span>{likeData.likes > 0 ? likeData.likes : likes}</span>
        </div>
        <div className="movie__dislikes">
          {" "}
          <ThumbDown
            className="btn"
            onClick={() => {
              setDislikeData({ dislikes: dislikes + 1 });
            }}
          />{" "}
          <span>
            {dislikeData.dislikes > 0 ? dislikeData.dislikes : dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
