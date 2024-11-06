import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#1F1E2] flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );  
};

export default App;
