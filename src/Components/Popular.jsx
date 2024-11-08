import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/drowpdown";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
    document.title = "SCSDB | Popular"

  const navigate = useNavigate();
  const [category, setCategory] = useState('movie');
  const [popularData, setPopularData] = useState([]);
  const [page, setPage] = useState(1);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      setPopularData((prevstate) => [...prevstate, ...data.results]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Reset page and Popular data when category changes
  useEffect(() => {
    setPopularData([]);
    setPage(1);
    GetPopular();
  }, [category]);

  return popularData.length > 0 ? (
    <div className="px-[11%] py-[3%] w-screen h-screen">
      <div className="w-full h-[10vh] py-[4%] flex items-center">
        <h1 className="text-2xl text-zinc-500 font-semibold ">
          <i
            onClick={() => {
              navigate(-1);
            }}
            className="ri-arrow-left-line hover:text-purple-500 mr-3 mt-1"
          ></i>
          Popular
        </h1>
        <Topnav />
        <Dropdown title="category" options={["tv", "movie"]} func={(e) => setCategory(e.target.value)} />
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={popularData.length}
        next={GetPopular}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popularData} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;