import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarouselCharacter } from "../CarouselCharacter";

export const CardCharacterDetail = ({ character }) => {
  const [animate, setAnimation] = useState(false);
  const transforms = character.transformations || [];
  const originPlanet = character.originPlanet || null;

  const navigate = useNavigate();

  console.log(transforms);

  // Redireccion a planeta
  const showPlanet = () => {
    const route = "/planet/" + originPlanet.id;
    navigate(route);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 500);
  }, []);

  return (
    <div
      className={`p-10 text-slate-100 w-[400px] opacity-0 md:flex md:flex-col md:justify-center md:items-center  ${
        animate ? "transition-all duration-500 opacity-100" : ""
      } `}
    >
      {/*  character details */}
      <div className="md:flex md:flex-col md:items-center ">
        <div className="md:flex md:w-[600px] md:gap-5">
          <img
            className="h-[360px] mx-auto md:h-[550px] object-cover drop-shadow-[0_15px_55px_orange]"
            src={character.image}
            alt={character.name}
          />
          <div className="md:flex md:flex-col md:w-[300px] md:justify-center">
            <h2 className="text-center p-4 text-5xl font-extrabold tracking-widest">
              {character.name}
            </h2>
            <p className="md:text-wrap overflow-y-auto md:p-3 max-h-40 scrollbar-thin scrollbar-thumb scrollbar-track lg:w-[380px] ">
              {character.description}
            </p>
          </div>
        </div>

        {/*  STATS */}
        <div className="mt-12 text-slate-200  bg-slate-800 opacity-95 p-4 rounded-xl md:w-[100%] lg:w-[500px]">
          <h3 className="font-extrabold text-xl tracking-widest text-center mb-2">
            STATS
          </h3>

          {/*   STATS KI */}
          <div className="flex justify-between bg-orange-500 p-2 rounded-md">
            <p className="font-bold ">BASE KI</p>
            <span className="font-semibold">{character.ki}</span>
          </div>

          <div className="flex justify-between bg-red-500 p-2 rounded-md mt-3">
            <p className="font-bold ">MAX KI</p>
            <span className="font-semibold">{character.maxKi}</span>
          </div>
        </div>
      </div>

      {/* MORE INFO */}

      <div className="lg:flex lg:gap-5 mt-8 lg:h-[520px]">
        <div className="bg-slate-800 opacity-95 mt-6 p-4 rounded-xl text-center group md:w-[600px] lg:w-[500px] lg:h-[100%] lg:overflow-hidden">
          <h2 className="text-xl font-extrabold tracking-widest mb-3">
            PLANET
          </h2>
          <div className="relative overflow-hidden">
            <img
              className="overflow-hidden lg:object-contain"
              src={character.originPlanet?.image}
              alt={character.originPlanet}
            />
            <div
              onClick={showPlanet}
              className="bg-slate-700 translate-y-16 bg-opacity-60 font-bold tracking-wider rounded-b-3xl text-2xl cursor-pointer opacity-0 absolute inset-0  transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-14"
            >
              <span className="absolute  top-1/4 -translate-x-1/2">
                {character.originPlanet?.name}
              </span>
            </div>
          </div>
        </div>

        {/*  TRANSFORMATIONS  */}
        {transforms.length > 0 ? (
          <div className="mt-6 mb-16 text-slate-200  bg-slate-800 opacity-95 p-4 rounded-xl md:w-[600px] lg:w-[500px] lg:h-[100%]" >
            <h3 className="font-extrabold text-xl tracking-widest text-center mb">
              TRANSFORMATIONS
            </h3>
            <div className="lg:pt-10">
            <CarouselCharacter data={transforms} />
            </div>
            
          </div>
        ) : (
          <>
            <br />
            <br />
          </>
        )}
      </div>
    </div>
  );
};
