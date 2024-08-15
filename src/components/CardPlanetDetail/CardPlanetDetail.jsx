export const CardPlanetDetail = ({ planet }) => {
  // array characters
  const characters = planet.characters || [];

  return (
    <div className="text-slate-200 flex flex-col gap-4">
      <img className="rounded-lg" src={planet.image} alt={planet.nombre} />

      {/* Info */}
      <div className="bg-slate-800 p-4 rounded-lg text-center ">
        <h2 className="font-extrabold tracking-widest text-xl ">INFO</h2>
        <h3 className="font-bold tracking-widest text-md">{planet.name}</h3>
        <p className="text-justify pt-2">{planet.description}</p>
      </div>

      {/* Characters */}
      <div className="bg-slate-800 p-4 rounded-xl ">
        <h2 className="text-xl font-extrabold text-center">HABITANTS</h2>
        {characters.map((character) => (
          //  Chabitants card
          <div
            className=" bg-slate-700 mt-24 mb-[100px] rounded-xl flex flex-row items-center justify-center p-6 gap-6 cursor-pointer group h-[80px]"
            key={character.id}
          >
            <img
              className="w-[80px] object-cover transition-all duration-500 group-hover:scale-110"
              src={character.image}
              alt={character.name}
            />

            <div className=" font-bold text-xs hidden translate-x-10 transition-all duration-500 group-hover:translate-x-2 group-hover:block  ">
              <p className="bg-orange-500 py-1 px-2 rounded-md w-[160px] text-center inline-block">
                {character.name}
              </p>

              {/* STATS / KI */}
              <div className="flex flex-col gap-1 pt-1 items-end text-center">
                <span className="bg-red-500  rounded-md py-1 px-2 w-[140px]">
                  KI {character.ki}
                </span>
                <span className="bg-red-500  rounded-md py-1 px-2 w-[140px]">
                  MAX KI {character.maxKi}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
