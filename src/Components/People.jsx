import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/drowpdown";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const People= () => {
    document.title = "SCSDB | PersonShow"
    const navigate = useNavigate();
    const [category, setCategory] = useState('popular');
    const [person, setperson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const Getperson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            setperson((prevData) => [...prevData, ...data.results]);
            setPage((prevPage) => prevPage + 1);
            if (data.page >= data.total_pages) {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error fetching popular data:", error);
        }
    };

    useEffect(() => {
        setperson([]);
        setPage(1);
        setHasMore(true);
        Getperson();
    }, [category]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    return person.length > 0 ? (
        <div className="px-[11%] py-[3%] w-screen h-screen">
            <div className="w-full h-[10vh] py-[4%] flex items-center">
                <h1 className="text-2xl text-zinc-500 font-semibold ">
                    <i
                        onClick={() => navigate(-1)}
                        className="ri-arrow-left-line hover:text-purple-500 mr-3 mt-1"
                    ></i>
                </h1>
                <Topnav />
               
            </div>

            <InfiniteScroll
                dataLength={person.length}
                next={Getperson}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={person} title='person' />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default People;