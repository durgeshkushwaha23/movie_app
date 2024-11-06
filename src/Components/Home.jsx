import React from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";

const Home = () => {
  document.title = "SCSDB | Homepage";
  return (
    <>
    <Sidenav/>
      <div   className="h-full w-[80%] bg-zinc-800">  <Topnav/></div>
    
    </>
  );
};

export default Home;
