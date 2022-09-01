import React from "react";
import Navbar from "../components/Navbar";
import { FiSearch } from "react-icons/fi";
import ProductCatalog from "../components/ProductCatalog";
import ProductFiler from "../components/ProductFiler";
const SearchView = () => {
  return (
    <div className="search-view-container">
      <Navbar />
      <div className="nav-search-container">
        <div className="search-field">
          <input type="text" placeholder="Search" />
          <FiSearch className="search-view-icon" />
        </div>
      </div>
      <div className="product-section">
        <ProductFiler />
        <ProductCatalog />
      </div>
    </div>
  );
};

export default SearchView;
