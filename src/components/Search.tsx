import React from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search" />
        <FiSearch className="search-icon" />
      </div>
    </div>
  );
};

export default Search;
