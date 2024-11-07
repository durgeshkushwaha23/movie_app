import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/drowpdown";
import axios from "../utils/axios";
import { useState } from "react";
import Cards from "../partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';


const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState('all');
  const [duration, setduration] = useState("day")
  const [trending, settrending] = useState([])
  const [page, setpage] = useState(1)



  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}`);
    //   settrending(data.results);
    settrending((prevstate)=>[...prevstate,...data.results]);
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log(trending);
  useEffect(()=>{
    GetTrending();
  },[category,duration])

  return trending.length> 0 ? (
    <div className=" p-[3%] w-screen h-screen">

      <div className="w-full h-[10vh]  flex items-center">
       
        <h1 className="text-2xl text-zinc-500 font-semibold ">
          <i  onClick={() => {
            navigate(-1);
          }} className="ri-arrow-left-line hover:text-purple-500 mr-3 mt-1  "></i>Trending
        </h1>
        <Topnav/>
        <Dropdown title="category" options={["all","tv","movie"]} func={(e)=>setcategory(e.target.value)} />
        <div className="w-[2%]" ></div>
        <Dropdown title="duration" options={["week","day"]} func={(e)=>setduration(e.target.value)} />

      </div>

<InfiniteScroll
dataLength={trending.length}
next={GetTrending}
hasMore={true}
loader={<h1>loading..</h1>}
>
<Cards data={trending} title={category} />

</InfiniteScroll>

    </div>
  ):(<Loading/>)
};

export default Trending;
