import { useContext } from "react";
import { CarouselCharacter } from "../../components/CarouselCharacter";
import { CharactersContext } from "../../context/CharactersContext";

import { FaHeartCircleXmark } from "react-icons/fa6";

export const Favs = () => {
  const { favCharacters, deleteAllFavs } = useContext(CharactersContext);

  return (
    <section className="min-h-screen  p-4 flex flex-col  items-center justify-center ">
      <h1 className="text-5xl font-bold text-white uppercase shadow-2xl transform scale-110 animate-pulse text-center mb-4 lg:mt-20">
        my favorites
      </h1>

      {favCharacters.length > 0 ? (
        <>
          {/* Favs characters carousel */}
          <div className=" mt-8 p-10 bg-slate-700 rounded-xl w-[100%] md:w-[70%] lg:w-[50%] ">
            <CarouselCharacter
              data={favCharacters}
              isLinked={true}
              actions={true}
            />
          </div>

       {/*  Delete All Favs button */}
          <div
            className="flex justify-end items-center mt-3 w-[100%] text-orange-500 cursor-pointer p-2 gap-3 transition-all group"
            onClick={deleteAllFavs}
          >
            <FaHeartCircleXmark className="text-2xl group-hover:scale-125" />
            <span className=" text-lg font-bold group-hover:scale-110">
              Delete All
            </span>
          </div>
        </>
      ) : (
        <div className=" mt-8 p-10 bg-slate-700 rounded-xl w-[100%] md:w-[70%] lg:w-[50%] ">
          <h2 className="text-5xl font-bold text-white  text-center mb-4 lg:mt-20">
            There'nt any to show...
          </h2>
        </div>
      )}
    </section>
  );
};
