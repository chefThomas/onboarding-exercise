import React, { useState, useEffect } from "react";

import "./HomePage.style.scss";

import { MovieList } from "../../components";
import { Header } from "../../partials";
import { movies$ } from "../../movies";
import { SearchContext, RatingContext } from "../../contexts";

const HomePage = () => {
  let [movieData, setMovieData] = useState([]);
  const [ratingData, setRatingData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    movies$.then((movies) => setMovieData(movies));
  }, []);

  const filteredMovies = movieData.filter((filteredMovie) =>
    filteredMovie.title.toLowerCase().includes(searchData.toLowerCase().trim())
  );

  return (
    <div className="home__page">
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        <RatingContext.Provider value={{ ratingData, setRatingData }}>
          <Header />
          {filteredMovies.length ? (
            <MovieList movieData={filteredMovies}></MovieList>
          ) : (
            <span className="sorry__message">
              Sorry, no movies fit your search criteria. Please clear your
              search and try again!
            </span>
          )}
        </RatingContext.Provider>
      </SearchContext.Provider>
    </div>
  );
};

export default HomePage;
