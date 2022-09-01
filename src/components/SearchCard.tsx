import React from "react";
import { SearchCardProps } from "../types/Search";

const SearchCard = (props: SearchCardProps) => {
  return (
    <div className="search-card">
      <img
        className="search-card-image"
        src={props.image}
        alt="trending product"
      />
      <p className="search-card-name">{props.name}</p>
    </div>
  );
};

export default SearchCard;
