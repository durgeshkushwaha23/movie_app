import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info?.videos);
    console.log(category,ytvideo);

    // Check if ytvideo exists and has a key
    if (!ytvideo || !ytvideo.key) {
        return <div className="text-white text-center">Trailer not available</div>;
    }

    return (
        <div className="top-0 left-0 z-50 absolute w-screen h-screen flex bg-black items-center">
            <Link 
                onClick={() => navigate(-1)} 
                className="hover:text-purple-500 text-3xl text-white right-[5%] top-[5%] absolute"
            >
                <i className="ri-close-fill mr-3"></i> Back
            </Link>
            <ReactPlayer
            controls
                height={600}
                width={1400}
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
            />
        </div>
    );
};

export default Trailer;
