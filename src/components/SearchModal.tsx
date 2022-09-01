import React from "react";
import { Link } from "react-router-dom";
import { topSearchTerms } from "../data/search";
import { topSearches } from "../data/top";
import SearchCard from "./SearchCard";
const SearchModal = () => {
  return (
    <div className="search-modal-container">
      <div className="top-container">
        <h2>Latest Trend</h2>
        <Link className="search-link" to="/search">
          View All
        </Link>
      </div>
      <div className="products-container">
        {topSearches.map((item) => {
          return (
            <SearchCard key={item.id} image={item.image} name={item.name} />
          );
        })}
      </div>
      <div className="search-term-container">
        <h2>Popular Suggestions</h2>
        <div className="popular-search">
          {topSearchTerms.map((term) => {
            return (
              <p className="search-term" key={term.id}>
                {term.query}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
