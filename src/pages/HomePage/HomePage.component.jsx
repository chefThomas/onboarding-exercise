import React, { useState, useEffect } from "react";

import "./HomePage.style.scss";

import { MovieList } from "../../components";
import { SearchBar } from "../../partials";
import { movies$ } from "../../movies";
import { SearchContext } from "../../contexts";

const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    movies$.then((movies) => setMovieData(movies));
  }, []);

  const filteredMovies = movieData.filter((filteredMovie) =>
    filteredMovie.title.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className="home__page">
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        <SearchBar />
        <MovieList movieData={filteredMovies}></MovieList>
      </SearchContext.Provider>
    </div>
  );
};

export default HomePage;
