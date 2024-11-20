import React from "react";
import { useNavigate } from "react-router-dom";

export const CardCharacter = ({ character }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    console.log(character.id);
    const route = "/character/" + character.id;
    navigate(route);
  };

  return (
    <div className="flex p-4 bg-orange-500 bg-opacity-80 w-[350px] mb-[140px] rounded-xl relative  cursor-pointer group md:mb-[190px] md:h-[100px] md:w-[390px] 2xl:w-[490px]  ">
      <div
        className="absolute top-0 -translate-y-1/4 -translate-x-[10px] md:-translate-x-[20px] "
        onClick={handleRedirect}
      >
        <img
          className="h-[170px] object-cover transition-all hover:scale-110 md:h-[250px]  "
          src={character.image}
          alt=""
        />
      </div>

      {/* Info */}
      <div className="flex flex-col items-end md:flex-wrap w-[100%] md:w-[2000px]  ">
        <h3 className="text-slate-800 text-[13px] md:text-[14px] 2xl:text-[17px] 2xl:tracking-[4px] uppercase font-extrabold tracking-[2px]">
          {character.name}
        </h3>
        <p className="text-slate-100 text-[10px] uppercase font-bold tracking-[2px]">
          {character.race}
        </p>
      </div>
    </div>
  );
};
