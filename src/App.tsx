import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchView from "./pages/SearchView";

import "./styles/index.scss";
const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchView />} />
      </Routes>
    </div>
  );
};

export default App;
