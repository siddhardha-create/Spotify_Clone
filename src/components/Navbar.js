import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold px-4">
        <div className="flex items-center gap-2 ">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="left-arrrow"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="left-arrrow"
          />
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="https://www.spotify.com/in-en/premium/"
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Premium
          </Link>
          <Link
            to="https://www.spotify.com/us/download/android/"
            className="bg-black  px-4 py-1 rounded-2xl text-[15px] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install App
          </Link>
          <Link to="https://accounts.spotify.com/en/login">
            <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
              S
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <NavLink
          to="/"
          className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer ml-2"
        >
          All
        </NavLink>
        <NavLink
          to="/favorites"
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer ml-2"
        >
          MyFavorites
        </NavLink>
        <NavLink
          to="/podcasts"
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer ml-2"
        >
          Podcasts
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
