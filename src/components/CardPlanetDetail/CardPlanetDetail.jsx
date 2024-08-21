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
      <h2 className=" text-slate-100 text-xl text-center uppercase font-bold tracking-[8px] opacity-95 mt-4 -mb-8 md:mb-10 md:mt-8 md:text-3xl md:opacity-80">
        HABITANTES
      </h2>

      <div className=" rounded-lg px-6 md:flex md:flex-wrap md:justify-around ">
        {characters.map((character, index) => (
          //  habitants card

          <div
            className="bg-orange-600 w-[300px] md:w-[340px] mt-8 md:mx-4 bg-opacity-0 translate-y-12  rounded-xl flex flex-row items-center justify-between p-1 cursor-pointer group h-[80px] transition-all duration-500 hover:bg-opacity-100 hover:translate-y-5  relative last-of-type:mb-12 md:mb-32"
            key={character.id}
          >
            <h2 className="absolute top-[30%] left-[35%] md:left-[45%] text-[13px] md:text-[16px] text-slate-100 text-end uppercase font-bold tracking-[8px] opacity-40  group-hover:opacity-100 group-hover:font-extrabold group-hover:z-40 ">
              {character.name}
            </h2>
            <img
              className="w-[60px] md:w-[110px]  object-cover transition-all duration-500 group-hover:scale-105"
              src={character.image}
              alt={character.name}
            />

            <div className=" font-bold text-xs opacity-0 translate-x-10 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
