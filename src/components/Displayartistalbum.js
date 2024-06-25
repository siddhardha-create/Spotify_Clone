import React, { useContext } from "react";
import Navbar1 from "./Navbar";
import { useParams } from "react-router";
import { albumsData, artistData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "./Playercontext";
import { Link } from "react-router-dom";

const Displayartistalbum = () => {
  const { playwithId, addToFavorites } = useContext(PlayerContext);
  const { id } = useParams();
  const albumData = albumsData[id];
  const artistsData = artistData[id];

  return (
    <div>
      <Navbar1 />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded ml-2"
          src={artistsData.image}
          alt="album"
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {artistsData.name}
          </h2>
          <h4>Hottest music served here.</h4>
          <p className="mt-1 flex flex-row">
            <img
              className="inline-block w-5 mr-2"
              src={assets.spotify_logo}
              alt="logo"
            />
            <b>Spotify</b>
          </p>
          <p className="mt-1 flex flex-row ">
            <p className="mr-2">2,170,025 saves.</p>
            <p>3h 1min</p>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="clock"></img>
        <p className="text-right">Favorites</p>
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playwithId(item.id)}
          key={index}
          className="grid grid-cols-4 sm:grid-cols-5 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">22-06-24</p>
          <p className="text-[15px] text-center">{item.duration}</p>
          <Link
            to="/favorites"
            onClick={(e) => {
              e.stopPropagation();
              addToFavorites(item);
            }}
            className="text-[15px] text-right"
          >
            <img
              className="inline w-6"
              src={assets.like_icon}
              alt="Add to favorites"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Displayartistalbum;
