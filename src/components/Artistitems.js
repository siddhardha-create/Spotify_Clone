/*import React from "react";
import { useNavigate } from "react-router";
const Artistitems = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/artist/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img
        className="w-[244px] h-[244.406px] object-cover rounded"
        src={image}
        alt=""
      />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-300 text-sm">{desc}</p>
    </div>
  );
};

export default Artistitems;*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure correct import from react-router-dom

const Artistitems = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="min-w-[300px] p-2 px-3 rounded cursor-pointer flex flex-col items-center relative"
    >
      <div className="w-[300px] h-[300px] flex items-center justify-center bg-[#121212] rounded">
        <img
          className="w-[250px] h-[250px] object-cover rounded-full"
          src={image}
          alt={name}
        />
        {hover && (
          <div
            className="absolute flex items-center justify-center bg-green-500 rounded-full w-16 h-16 cursor-pointer"
            onClick={() => navigate(`/artist/${id}`)}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-6.586-3.791A1 1 0 007 8.18v7.64a1 1 0 001.166.987l6.586-3.791a1 1 0 000-1.774z"
              />
            </svg>
          </div>
        )}
      </div>
      <p className="font-bold mt-2 mb-1 text-center">{name}</p>
      <p className="text-slate-300 text-sm text-center">{desc}</p>
    </div>
  );
};

export default Artistitems;
