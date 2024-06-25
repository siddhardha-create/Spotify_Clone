import React from "react";
const Podcastitems = ({ image, name, desc, id, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded w-[150px] h-[150px]" src={image} alt="" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-300 text-sm">{desc}</p>
      </div>
    </a>
  );
};
export default Podcastitems;
