import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { albumsData } from "../assets/assets";

const Sidebar = () => {
  const getRandomAlbumId = () => {
    const randomIndex = Math.floor(Math.random() * albumsData.length);
    return albumsData[randomIndex].id; // Assuming each album object has an 'id' field
  };

  const redirectToRandomAlbum = () => {
    const randomAlbumId = getRandomAlbumId();
    // Redirect to the dynamic album route, assuming it follows /album/:id format
    window.location.href = `/album/${randomAlbumId}`;
  };
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <Link to="/" className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="home" />
          <p className="font-bold">Home</p>
        </Link>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="mt-4 bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.arrow_icon} alt="arrow" />
            <img className="w-6" src={assets.plus_icon} alt="plus" />
          </div>
        </div>
        <div
          onClick={redirectToRandomAlbum}
          className="p-4 bg-[#242424] m-4 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4"
        >
          <h1>Add Your Favorite songs</h1>
          <p className="font-light">We will be providing assistance</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Favourite list
          </button>
        </div>
        <Link
          to="https://open.spotify.com/genre/podcasts-web"
          className="p-4 mr-4 ml-4 mt-8 mb-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4"
        >
          <h1>Let’s find some podcasts to follow</h1>
          <p className="font-light">We’ll keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
