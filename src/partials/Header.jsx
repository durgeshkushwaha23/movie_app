import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div 
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data?.backdrop_path || data?.profile_path || ""
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start px-[7%] py-[4%]"
    >
      <h1 className="w-[80%] text-5xl font-black mt-14 text-white">
        {data?.name ||
          data?.title ||
          data?.original_name ||
          data?.original_title}
      </h1>
      <p className="w-[80%] text-white">
        {data?.overview
          ? `${data.overview.slice(0, 100)}...`
          : "No overview available"}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>
      <p className="text-white">
        <i className="ri-megaphone-fill text-yellow-700"></i>
        {data?.release_date || "No information"}
        <i className="ri-dvd-fill text-yellow-500"></i>
        {data?.media_type?.toUpperCase() || "UNKNOWN"}
      </p>

      <Link className="bg-[#6556CD] px-3 py-2 center mt-2 rounded-md text-white font-semibold">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
