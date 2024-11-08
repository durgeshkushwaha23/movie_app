import axios from "../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
 
  return (
    <div   className="w-[20%] min-h-full p-3 border-r-2 border-zinc-700 bg-zinc-700">
      <h1   className="text-2xl text-white font-bold">
        <i   className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>SCSDB</span>
      </h1>

      <nav   className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1   className="text-white font-semibold text-xl mt-5 mb-4">
          new feeds
        </h1>
        <Link to="/trending"   className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3">
          <i   className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular"   className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3">
          <i   className="ri-bar-chart-fill"></i> Popular
        </Link>
        <Link to="/movie"   className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3">
          <i   className="ri-movie-fill"></i> Movies
        </Link>
        <Link to="/shows"   className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3">
          <i   className="ri-slideshow-3-line"></i> Shows
        </Link>
        <Link to="/person"   className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3">
          <i   className="ri-group-line"></i> People
        </Link>
      </nav>

      <hr />
      <nav   className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1   className="text-white font-semibold text-xl mt-3">
          website information
        </h1>
        <Link to="/about"   className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3">
          <i   className="ri-information-line"></i> About SCSDB
        </Link>
        <Link to="/contact"   className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-3">
          <i   className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
