import React from "react";
import Navbar from "./Navbar";
import Albumitems from "./Albumitems";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import { artistData } from "../assets/assets";
import Artistitems from "./Artistitems";
import Songitems from "./Songitems";

const Displayhome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Artists</h1>
        <div className="flex overflow-auto">
          {artistData.map((item, index) => (
            <Artistitems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Songs</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Songitems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Displayhome;
