import React, { useEffect, useRef } from "react";
import Displayhome from "./Displayhome";
import Displayalbum from "./Displayalbum";
import Displayartistalbum from "./Displayartistalbum";
import { Routes, Route, useLocation } from "react-router";
import { albumsData } from "../assets/assets";
import MyFavorites from "./MyFavorites";
import Podcasts from "./Podcasts";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 py-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<Displayhome />} />
        <Route path="/album/:id" element={<Displayalbum />} />
        <Route path="/artist/:id" element={<Displayartistalbum />} />
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </div>
  );
};

export default Display;
