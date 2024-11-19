import { useContext, useEffect } from "react";
import { CarouselCharacter } from "../../components/CarouselCharacter";
import { CharactersContext } from "../../context/CharactersContext";
import { FaHeart } from "react-icons/fa";

export const Favs = () => {
  const { favCharacters, deleteAllFavs, deleteFav } = useContext(CharactersContext);

 

  return (
    <section className="min-h-screen  p-4 flex flex-col  items-center justify-center ">
      <h1 className="text-5xl font-bold text-white shadow-2xl transform scale-110 animate-pulse text-center mb-4 lg:mt-20">
        MIS FAVORITOS
      </h1>

      {favCharacters.length > 0 ? (
        <>
          {/* Favs characters carousel */}
          <div className=" mt-8 p-10 bg-slate-700 rounded-xl w-[100%] md:w-[70%] lg:w-[50%] ">
            <CarouselCharacter data={favCharacters} isLinked={true} />
          </div>

          {/* Favs Buttons */}

          <div className=" w-[100%] md:w-[70%] lg:w-[50%] flex gap-8 justify-end pt-4 pb-10">
            <button className="text-xl transition-all hover:text-slate-100"
            onClick={() => deleteFav(favCharacters)}>
              <FaHeart />
            </button>
            <button
              className="border-orange-600 border p-3 rounded-md text-slate-100 transition-all hover:bg-red-500 "
              onClick={deleteAllFavs}
            >
              Delete All
            </button>
          </div>
        </>
      ) : (
        <div className=" mt-8 p-10 bg-slate-700 rounded-xl w-[100%] md:w-[70%] lg:w-[50%] ">
          <h2 className="text-5xl font-bold text-white  text-center mb-4 lg:mt-20">There'nt any to show...</h2>
        </div>
      )}
    </section>
  );
};
