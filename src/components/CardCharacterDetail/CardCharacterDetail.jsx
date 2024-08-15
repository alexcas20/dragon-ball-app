import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CardCharacterDetail = ({ character }) => {
  const [animate, setAnimation] = useState(false);
  const transforms = character.transformations || [];

  const navigate = useNavigate();

  console.log(transforms);

  // Redireccion a planeta
  const showPlanet = () => {
    const route = "/planet/" + character.id;
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
      <img
        className="w-[150px] mx-auto drop-shadow-[0_15px_55px_orange] md:w-[250px]"
        src={character.image}
        alt={character.name}
      />
      {/* INFO */}
      <div className="text-center mb-4">
        <h2 className="text-2xl tracking-wider font-extrabold md:text-6xl">
          {character?.name}
        </h2>
        <h4 className="tracking-widest text-md md:text-3xl">{character.race}</h4>
        <span className="text-sm font-semibold tracking-widest md:text-2xl">
          {character.gender}
        </span>
        <p className="text-md text-justify truncate  overflow-hidden mt-4 md:text-pretty md:w-[700px] md:text-lg md:font-semibold">
          {character.description}
        </p>
      </div>

      {/* STATS */}

      <div className="mt-4 text-slate-200  bg-slate-800 opacity-95 p-4 rounded-xl md:w-[500px]">
        <h3 className="font-extrabold text-xl tracking-widest text-center mb-2">
          STATS
        </h3>
        <div className=" flex text-slate-100 bg-orange-500  py-2 px-3 rounded-lg justify-between mb-2 ">
          <p className="font-bold ">BASE KI</p>
          <span className="font-semibold">{character.ki}</span>
        </div>
        <div className=" flex bg-red-600  py-2 px-3 rounded-lg justify-between ">
          <p className="font-bold ">MAX KI</p>
          <span className="font-semibold">{character.maxKi}</span>
        </div>
      </div>

      {/* MORE */}
      <div className="bg-slate-800 opacity-95 mt-6 p-4 rounded-xl text-center group md:w-[500px]">
        <h2 className="text-xl font-extrabold tracking-widest">MORE</h2>
        <h3 className="font-bold text-lg p-4">Planet</h3>
        <div className="relative overflow-hidden">
          <img
            className="overflow-hidden"
            src={character.originPlanet?.image}
            alt=""
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

      {/* TRANSFORMATIONS */}

      {transforms.length > 0 ? (
        <div className="mt-4 mb-10 text-slate-200  bg-slate-800 opacity-95 p-4 rounded-xl md:w-[500px]">
          <h3 className="font-extrabold text-xl tracking-widest text-center mb-2">
            TRANSFORMATIONS
          </h3>
          {transforms.map((el) => (
            <div
              className="flex items-center justify-between gap-4 flex-wrap p-2 text-slate-100"
              key={el.name}
            >
              <img className="w-[75px]" src={el.image} />
              <div className="flex flex-col items-end">
                <p className="font-bold text-sm bg-orange-500 py-2 px-4 rounded-xl mb-4 w-[170px] text-center ">
                  {el.name}
                </p>
                <span className="bg-red-600 opacity-95 py-1 px-3 rounded-lg text-sm">
                  KI: {el.ki}
                </span>
              </div>
            </div>
          ))}
        </div>
      )
    : (
      <>
      <br />
      <br />
      </>
    ) } 
    
    </div>
  );
};
