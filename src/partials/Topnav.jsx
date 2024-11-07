import axios from "../utils/axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import noimage from "/NoImage.png"

const Topnav = () => {
  const [query, setquery] = useState("");
  const [Searches, setSearches] = useState([]);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div   className="w-full h-[10vh] relative flex justify-start items-center pl-[15%] ">
      <i   className="ri-search-2-fill text-zinc-400 text-3xl"></i>
      <input
        onChange={(e) => {
          setquery(e.target.value);
        }}
        value={query}
          className="w-[50%] text-zinc-300 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search"
      />
      {query.length > 0 && (
        <i
          onClick={() => {
            setquery("");
          }}
           className="ri-close-circle-fill text-zinc-400 text-3xl"
        ></i>
      )}
      <div   className="new absolute w-[50%] max-h-[50vh] bg-green-100 left-[20%] top-[100%] overflow-auto ">
        {Searches.map((s, i) => (
          <Link
            key={i}
              className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 duration-200"
          >
            <img
                className="w-[8vh] h-[8vh] object-cover mr-3 rounded-md shadow-lg"
              src={
                s.backdrop_path || s.profile_path ? 
                `https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path
              }`:noimage
            }
              alt=""
            />
            <span   className="text-black">
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
