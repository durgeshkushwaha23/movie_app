import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import axios from "../utils/axios";
import Header from "../partials/Header";
import HorizontalCard from "../partials/HorizontalCard";
import Dropdown from "../partials/drowpdown";
import Loading from "./Loading";
const Home = () => {
  document.title = "SCSDB | Homepage";
  const [wallpaper, setWallpaper] = useState(null); // Change to `null` for a single item
  const [trending, setTrending] = useState([]); // Keep trending as an array
  const [category, setCategory] = useState("all"); // Corrected initialization

  // Get wallpaper function
  const GetHandleWallpaper = async () => {
    try {
      const { data } = await axios.get("trending/all/day");
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Get trending function
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // useEffect hook to handle wallpaper and trending fetching
  useEffect(() => {
    if (!wallpaper) GetHandleWallpaper(); // Only fetch wallpaper if not already set
    GetTrending(); // Fetch trending for the current category
  }, [category, wallpaper]); // Trigger effect on category or wallpaper change

  // Handle category change from dropdown
 

  return wallpaper && trending.length ? (
    <>
      <Sidenav />
      <div className="h-full w-[80%] bg-zinc-800 overflow-auto overflow-x-auto">
        <Topnav />
        <Header data={wallpaper} />
        <div className="mb-4 flex justify-between py-2">
          <h1 className="font-bold text-3xl text-gray-200">Trending</h1>
          <Dropdown 
            title="Filter" 
            options={["tv", "movie", "all"]}
            func={(e)=>setCategory(e.target.value)} 
          />
        </div>
        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};
 
export default Home;
