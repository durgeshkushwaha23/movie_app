import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";

const App = () => {
  return (
    <div   className="h-screen w-screen bg-[#1F1E2] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />

      </Routes>
    </div>
  );  
};

export default App;
