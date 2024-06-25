import React from "react";
import Navbar from "./Navbar2";
import { podcastsData, podcastsData1, podcastsData2 } from "../assets/assets";
import Podcastitems from "./Podcastitems";

const Podcasts = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10 bg-gradient-to-r from-green-900 to-green-800 p-4">
        <h1 className="text-9xl font-bold text-white">Podcasts</h1>
      </div>
      <div className="mb-4 my-4">
        <h1 className="my-7 font-bold text-3xl">Categories</h1>
        <div className="flex overflow-auto">
          {podcastsData.map((item, index) => (
            <Podcastitems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 my-4">
        <h1 className="my-7 font-bold text-3xl">Work/Life</h1>
        <div className="flex overflow-auto">
          {podcastsData1.map((item, index) => (
            <Podcastitems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 my-4">
        <h1 className="my-7 font-bold text-3xl">Meditation & Motivation</h1>
        <div className="flex overflow-auto">
          {podcastsData2.map((item, index) => (
            <Podcastitems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
