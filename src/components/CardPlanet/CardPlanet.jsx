import React from "react";
import { useNavigate } from "react-router-dom";

export const CardPlanet = ({ planet }) => {

    const navigate = useNavigate();

// Redirect to planet details
const showPlanetDetails = () => {
    const route = `/planet/${planet.id}`;
    navigate(route);
}

  return (
    <div
    onClick={showPlanetDetails}
    className="relative w-full h-[300px] cursor-pointer group">
      <img
        className="rounded-md drop-shadow-xl w-full h-full object-cover"
        src={planet.image}
        alt={planet.name}
      />
      <div className="absolute translate-y-10 opacity-0 bottom-0 bg-slate-900 w-full h-56 bg-opacity-90 flex justify-center items-center transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2">
        <h3 className="text-slate-100 text-2xl font-extrabold tracking-widest">{planet.name}</h3>
      </div>
    </div>
  );
};
