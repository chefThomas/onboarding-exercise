import React from "react";

import "./MovieList.style.scss";

const MovieList = (props) => (
  <div className="movie__list">{props.children}</div>
);

export default MovieList;
