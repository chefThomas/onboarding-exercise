import React, { useState } from "react";

import "./MovieCard.style.scss";

import { ThumbUp, ThumbDown } from "../../assets";

const MovieCard = ({ movie, movieLikes, movieDislikes }) => {
  let { url, title, category, likes, dislikes, imdb } = movie;
  const [likeData, setLikeData] = useState({
    likes: movieLikes,
    isLiked: false,
  });
  const [dislikeData, setDislikeData] = useState({
    dislikes: movieDislikes,
    isDisliked: false,
  });

  const handleLikes = () => {
    if (dislikeData.isDisliked) {
      setDislikeData({ dislikes: dislikes, isDisliked: false });
    }
    setLikeData({ likes: likes + 1, isLiked: true });
  };

  const handleDislikes = () => {
    if (likeData.isLiked) {
      setLikeData({ likes: likes, isLiked: false });
    }
    setDislikeData({ dislikes: dislikes + 1, isDisliked: true });
  };

  return (
    <div className="movie__card">
      <a href={imdb} target="_blank" rel="noopener noreferrer">
        <img
          src={url}
          alt={`Movie poster for ${title}`}
          className="movie__image"
        />
      </a>
      <div className="movie__title">{title}</div>
      <div className="movie__category">{category}</div>
      <div className="movie__ratings">
        <div className="movie__likes">
          <ThumbUp
            className={`${likeData.isLiked ? "btn--liked" : ""} btn`}
            onClick={handleLikes}
          />
          <span>{likeData.likes > 0 ? likeData.likes : likes}</span>
        </div>
        <div className="movie__dislikes">
          {" "}
          <ThumbDown
            className={`${dislikeData.isDisliked ? "btn--disliked" : ""} btn`}
            onClick={handleDislikes}
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
