import React from "react";
import { useNavigate } from "react-router-dom";




export const CardCharacter = ({ character }) => {



  const navigate = useNavigate();

  const handleRedirect = () => {
    console.log(character.id)
    const route = '/character/' + character.id;
     navigate(route);
 
    }
    
 
  

  return (
    <div className="flex p-4 bg-orange-500 bg-opacity-80 mb-[140px] rounded-xl relative  cursor-pointer group md:mb-[190px] md:h-[100px] md:w-[355px]   ">
      <div className="absolute top-0 -translate-y-1/4 " 
      onClick={handleRedirect}>
        {character.image.includes("bulma") ||
        character.image.includes("goku") ||
        character.image.includes("vegeta") ? (
          <img
          
            className="w-[80px] transition-all hover:scale-110 md:w-[110px]"
            src={character.image}
            alt=""
          />
        ) : (
          <img
            className="w-[120px] transition-all hover:scale-110 md:w-[140px] "
            src={character.image}
            alt=""
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col items-end w-[95%] md:w-[100%]  ">
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
