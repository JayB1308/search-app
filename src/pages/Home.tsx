import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SearchModal from "../components/SearchModal";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Search />
      <SearchModal />
    </div>
  );
};

export default Home;
