import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/drowpdown";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  document.title = "SCSDB | trending"

  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`);
      setTrending((prevstate) => [...prevstate, ...data.results]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Reset page and trending data when category or duration changes
  useEffect(() => {
    setTrending([]);
    setPage(1);
    GetTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" px-[11%] py-[3%] w-screen h-screen">
      <div className="w-full h-[10vh] py-[4%] flex items-center">
        <h1 className="text-2xl text-zinc-500 font-semibold ">
          <i
            onClick={() => {
              navigate(-1);
            }}
            className="ri-arrow-left-line hover:text-purple-500 mr-3 mt-1"
          ></i>
          Trending
        </h1>
        <Topnav />
        <Dropdown title="category" options={["all", "tv", "movie"]} func={(e) => setCategory(e.target.value)} />
        <div className="w-[2%]"></div>
        <Dropdown title="duration" options={["week", "day"]} func={(e) => setDuration(e.target.value)} />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={true}
        loader={<h1>loading..</h1>}
      >
        <Cards data={trending} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />   
  ); 
};

export default Trending;
