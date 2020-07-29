import React, { useContext } from "react";

import "./SearchBar.style.scss";
import { SearchContext } from "../../contexts";

const SearchBar = () => {
  const { searchData, setSearchData } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <div className="searchbar__container">
      <input
        className="searchbar__input"
        type="search"
        placeholder="Search Movies"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
