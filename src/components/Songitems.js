import React, { useContext } from "react";
import { PlayerContext } from "./Playercontext";

const Songitems = ({ image, name, desc, id }) => {
  const { playwithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playwithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-300 text-sm">{desc}</p>
    </div>
  );
};

export default Songitems;
