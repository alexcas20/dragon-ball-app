import { useContext } from "react";
import { CarouselCharacter } from "../../components/CarouselCharacter";
import { CharactersContext } from "../../context/CharactersContext";

export const Favs = () => {
  const { favCharacters } = useContext(CharactersContext);
  return (
    <section className="h-screen p-4 flex flex-col justify-center items-center">
     
        <h1 class="text-5xl font-bold text-white shadow-2xl transform scale-110 animate-pulse text-center mb-4">
          MIS FAVORITOS
        </h1>
     

      {/* Favs characters carousel */}
      <div className=" mt-8 p-10 bg-slate-700 rounded-xl w-[100%] md:w-[70%] lg:w-[50%]">
        <CarouselCharacter data={favCharacters} isLinked={true} />
      </div>
    </section>
  );
};
