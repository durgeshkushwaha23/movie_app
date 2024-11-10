import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tv from "./Components/Tv";
import People from "./Components/People"; 
import About from "./Components/About";
import Contact from "./Components/Contact";
import Moviedetails from "./Components/moviedetails";
import Tvdetails from "./Components/Tvdetails";
import Persondetails from "./Components/Persondetails";

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#1F1E2] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />

        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
