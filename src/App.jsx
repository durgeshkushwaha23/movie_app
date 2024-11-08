import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import TvShow from "./Components/TvShow";
import People from "./Components/People";

const App = () => {
  return (
    <div   className="h-screen w-screen bg-[#1F1E2] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/shows" element={<TvShow/>} />
        <Route path="/person" element={<People/>} />

      </Routes>
    </div>
  );  
};

export default App;
