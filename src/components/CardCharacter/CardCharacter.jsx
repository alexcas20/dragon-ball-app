import React from "react";

export const CardCharacter = ({ character }) => {
  return (
    <div className="flex p-4 bg-orange-500 bg-opacity-80 rounded-xl relative mb-[130px] cursor-pointer group md:mb-[150px]  ">
      <div className="absolute top-0 -translate-y-1/4 ">
        {character.image.includes("bulma") ||
        character.image.includes("goku") ||
        character.image.includes("vegeta") ? (
          <img
            className="w-[80px] transition-all hover:scale-110"
            src={character.image}
            alt=""
          />
        ) : (
          <img
            className="w-[120px] transition-all hover:scale-110 "
            src={character.image}
            alt=""
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col items-end w-[95%]  ">
        <h3 className="text-black text-xl font-bold">{character.name}</h3>
        <p className="text-sm text-slate-100  tracking-wider">
          {character.race}
        </p>
      </div>

      <div className="bg-orange-300 absolute -bottom-12 left-40 rounded-md p-1 opacity-0 transition duration-150 ease-out group-hover:opacity-100 md:hidden">
        <span className=" text-xs text-slate-900 font-semibold">
          ki: {character.ki}
        </span>
      </div>
    </div>
  );
};
