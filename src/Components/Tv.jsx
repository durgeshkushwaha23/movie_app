import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/drowpdown";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const Tv = () => { 
    document.title = "SCSDB | Tv"
    const navigate = useNavigate();
    const [category, setCategory] = useState('airing_today');
    const [tv, settv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const GetTv = async () => {
        try {
            const { data } = await axios.get(`tv/${category}?page=${page}`);
            settv((prevData) => [...prevData, ...data.results]);
            setPage((prevPage) => prevPage + 1);
            if (data.page >= data.total_pages) {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error fetching popular data:", error);
        }
    };

    useEffect(() => {
        settv([]);
        setPage(1);
        setHasMore(true);
        GetTv();
    }, [category]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    return tv.length > 0 ? (
        <div className="px-[11%] py-[3%] w-screen h-screen">
            <div className="w-full h-[10vh] py-[4%] flex items-center">
                <h1 className="text-2xl text-zinc-500 font-semibold ">
                    <i
                        onClick={() => navigate(-1)}
                        className="ri-arrow-left-line hover:text-purple-500 mr-3 mt-1"
                    ></i>
                    movie: <p className="text-sm  text-zinc-600" >{category}</p>
                </h1>
                <Topnav />
                <Dropdown
                    title="Category"
                    options={["popular", "top_rated", "on_the_air", "airing_today"]}
                    func={handleCategoryChange}
                />
                <div className="w-[2%]"></div>
            </div>

            <InfiniteScroll
                dataLength={tv.length}
                next={GetTv}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={tv} title="tv"/>
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Tv;