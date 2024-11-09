import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data,title }) => {
  console.log(data);
  
  return (
    <div className="flex flex-wrap w-full ">
      {data.map((c, i) => (
        <Link to={`/${c.media_type||title}/details/${c.id}`} className=" relative w-[25vh] mr-[4%] mb-[4%]" key={i}>
          
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover "
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 font-semibold">
            {" "}
            {c?.name || c?.title || c?.original_name || c?.original_title}
          </h1>
          {c.vote_average && (
            <div className="text-white text-xl text-center rounded-full bg-yellow-300 w-[6vh] h-[6vh] absolute right-[-15%] bottom-[30%] flex-justify-center items-center">
            {(c.vote_average * 10).toFixed()}
            <sup>%</sup>
          </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
