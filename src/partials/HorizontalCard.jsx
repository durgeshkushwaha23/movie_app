import React from "react";
import Dropdown from "./drowpdown";
import { Link } from "react-router-dom";

const HorizontalCard = ({ data }) => {
  return (
     
      <div className="w-full flex overflow-x-auto space-x-5">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[220px] rounded-lg shadow-lg p-3 transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-[120px] object-cover rounded-md mb-4"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path || ""
              }`}
              alt=""
            />
            <h1 className="text-lg font-semibold text-gray-100 truncate">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              {d.overview.slice(0, 100)}...
              <span className="text-blue-500 cursor-pointer hover:underline">
                more
              </span>
            </p>
          </Link>
        ))}
    </div>
  );
};

export default HorizontalCard;
