import React, { useState } from "react";

import "./SearchBar.style.scss";

const SearchBar = () => {
  const [searchData, setSearchData] = useState("");

  const handleChange = (event) => {
    setSearchData(event.target.value);
  };
  console.log(searchData);
  return (
    <div className="searchbar__container">
      <input
        type="search"
        placeholder="Search Movies"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
