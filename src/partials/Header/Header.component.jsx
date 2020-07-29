import React, { useContext } from "react";

import "./Header.style.scss";

import { SearchBar } from "../index";
import { Moon, Sun } from "../../assets";
import { ThemeContext } from "../../contexts";

const Header = () => {
  const { themeData, setThemeData } = useContext(ThemeContext);

  if (!themeData.isDarkMode) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  console.log(themeData.isDarkMode);
  return (
    <div className="header">
      <SearchBar />
      <div
        className="theme__toggle"
        onClick={() => {
          setThemeData({ isDarkMode: !themeData.isDarkMode });
        }}
      >
        {themeData.isDarkMode ? (
          <Sun className="theme__toggle--sun" />
        ) : (
          <Moon className="theme__toggle--moon" />
        )}
      </div>
    </div>
  );
};

export default Header;
