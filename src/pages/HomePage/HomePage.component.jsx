import React, { useState, useEffect } from "react";

import "./HomePage.style.scss";

import { MovieList } from "../../components";
import { Header } from "../../partials";
import { movies$ } from "../../movies";
import { SearchContext, ThemeContext } from "../../contexts";

const HomePage = () => {
  let [movieData, setMovieData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [themeData, setThemeData] = useState({
    isDarkMode: true,
  });

  useEffect(() => {
    movies$.then((movies) => setMovieData(movies));
  }, []);

  const filteredMovies = movieData.filter((filteredMovie) =>
    filteredMovie.title.toLowerCase().includes(searchData.toLowerCase().trim())
  );

  return (
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className="home__page">
        <SearchContext.Provider value={{ searchData, setSearchData }}>
          <Header theme={themeData.isDarkMode} />

          {filteredMovies.length ? (
            <MovieList movieData={filteredMovies}></MovieList>
          ) : (
            <span className="sorry__message">
              Sorry, no movies fit your search criteria. Please clear your
              search and try again!
            </span>
          )}
        </SearchContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
