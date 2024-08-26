import { CarouselCharacter } from "../CarouselCharacter";
import { FaInfoCircle } from "react-icons/fa";

export const CardPlanetDetail = ({ planet }) => {
  // array characters
  const characters = planet.characters || [];

  return (
    <div className="text-slate-200 p-4  md:p-0 flex flex-col gap-4 md:items-center">
      <img
        className="rounded-lg md:rounded-none md:h-[300px] md:w-full md:object-cover md:drop-shadow-xl "
        src={planet.image}
        alt={planet.nombre}
      />

      {/* Info */}

      <h3 className="text-slate-100 text-xl text-center uppercase font-bold tracking-[8px] opacity-95 m-4 md:text-4xl md:opacity-80 ">
        {planet.name}
      </h3>
      <div className="bg-slate-800 p-6 rounded-lg text-center  md:mx-6  ">
        <p className="text-slate-100 text-[18px] text-center uppercase font-bold tracking-[5px] opacity-95">
          {planet.description}
        </p>
      </div>

      {/* Characters */}

      <h2 className=" text-slate-100 text-xl text-center uppercase font-bold tracking-[8px] opacity-95 mt-4 -mb-8 md:mb-2 md:mt-8 md:text-3xl md:opacity-80">
        HABITANTES
      </h2>

      {characters.length >= 1 ? (
        <div className="mb-24 ">
          {/*   Carousel characters  */}
          <CarouselCharacter data={characters} />
         
        </div>
      ) : (
        <div className="bg-slate-800 p-10 rounded-lg text-center mb-48 mt-4 ">
          <div className="flex justify-center mb-9">
          <FaInfoCircle className="text-6xl"/>
          </div>
         
        <p className="text-slate-100 text-[18px] text-center uppercase font-bold tracking-[5px] opacity-95">
          No existen habitantes por mostrar...
        </p>
      </div>
        
      )}
    </div>
  );
};
