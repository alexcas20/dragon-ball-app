import React from "react";

export const CardCharacter = ({ character }) => {
  return (
    <div className="flex flex-col p-4 bg-sky-200 bg-opacity-60 rounded-xl relative mb-[130px] cursor-pointer group md:h-[240px] md:mb-[80px] md:flex-row ">
      <div className="absolute top-0 -translate-y-1/4  md:-translate-y-1/3 md:translate-x-[14px]">


        {character.image.includes("bulma") ||
        character.image.includes("goku") ||
        character.image.includes("vegeta") ? (
          <img
            className="w-[80px] transition-all hover:scale-110 md:inset-0 m-auto md:w-[100px]"
            src={character.image}
            alt=""
          />
        ) : (
          <img
            className="w-[120px] transition-all hover:scale-110"
            src={character.image}
            alt=""
          />
        )}
      </div>

          {/* Info */}
      <div className="flex flex-col items-end w-[95%] md:justify-end md:items-center ">
        <h3 className="text-black text-xl font-bold">{character.name}</h3>
        <p className="text-sm text-slate-600  tracking-wider">{character.race}</p>
      </div>

      <div className="bg-orange-300 absolute -bottom-12 left-40 rounded-md p-1 opacity-0 transition duration-150 ease-out group-hover:opacity-100 md:hidden">
        <span className=" text-xs text-slate-900 font-semibold">
          ki: {character.ki}
        </span>
      </div>
    </div>
  );
};
