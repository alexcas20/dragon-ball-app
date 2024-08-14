export const CardCharacterDetail = ({ character }) => {
  return (
    <div className="p-10 text-slate-100 w-[400px] md:w-[300px]">
      <img
        className="w-[200px] mx-auto drop-shadow-xl"
        src={character.image}
        alt={character.name}
      />
      {/* INFO */}
      <div className="text-center mb-4">
        <h2 className="text-2xl tracking-wider font-extrabold">
          {character?.name}
        </h2>
        <h4 className="tracking-widest text-md">{character.race}</h4>
        <span className="text-sm font-semibold tracking-widest">
          {character.gender}
        </span>
        <p className="text-md text-justify truncate overflow-hidden mt-4">
          {character.description}
        </p>
      </div>

      {/* STATS */}

      <div className="mt-4 text-slate-200  bg-slate-800 opacity-95 p-4 rounded-xl">
        <h3 className="font-extrabold text-xl tracking-widest text-center mb-2">
          STATS
        </h3>
        <div className=" flex text-slate-100 bg-orange-600  py-2 px-3 rounded-lg justify-between mb-2 ">
          <p className="font-bold ">BASE KI</p>
          <span className="font-semibold">{character.ki}</span>
        </div>
        <div className=" flex bg-orange-800  py-2 px-3 rounded-lg justify-between ">
          <p className="font-bold ">MAX KI</p>
          <span className="font-semibold">{character.maxKi}</span>
        </div>
      </div>

      {/* MORE */}
      <div className="bg-slate-800 opacity-95 mt-6 p-4 rounded-xl text-center  group">
        <h2 className="text-xl font-extrabold tracking-widest">MORE</h2>
        <h3 className="font-bold text-lg p-4">Planet</h3>
        <div className="relative overflow-hidden">
          <img
            className="overflow-hidden "
            src={character.originPlanet?.image}
            alt=""
          />
          <div className="bg-slate-700 translate-y-16 bg-opacity-60 font-bold tracking-wider rounded-b-3xl text-2xl cursor-pointer opacity-0 absolute inset-0  transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-14">
            <span className="absolute  top-1/4 -translate-x-1/2">
            {character.originPlanet?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
