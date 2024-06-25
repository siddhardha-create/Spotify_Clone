// MyFavorites.js

// MyFavorites.js

import React, { useContext } from "react";
import Navbar1 from "./Navbar1";
import { PlayerContext } from "./Playercontext";
import { assets } from "../assets/assets";

const MyFavorites = () => {
  const { favorites, removeFromFavorites } = useContext(PlayerContext);

  const handleRemoveFromFavorites = (song) => {
    removeFromFavorites(song);
  };

  return (
    <div>
      <Navbar1 />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">My Favorites</h2>
          <h4>Your favorite music collected here.</h4>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="clock" />
        <p className="text-right">Remove From favorites</p>
      </div>
      <hr />
      {favorites.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 sm:grid-cols-5 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{item.album}</p>
          <p className="text-[15px] hidden sm:block">22-06-24</p>
          <p className="text-[15px] text-center">{item.duration}</p>
          <button
            onClick={() => handleRemoveFromFavorites(item)}
            className="text-[15px] text-right"
          >
            <img
              className="inline w-6"
              src={assets.remove_icon}
              alt="Remove from favorites"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyFavorites;
