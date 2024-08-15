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
      <h2 className="text-xl font-extrabold text-center mb-6 ">HABITANTES</h2>
      <div className="p-4">
        {characters.map((character, index) => (
          //  habitants card
          index < 4 &&
          <div
            className=" bg-slate-700 w-[300px] mt-8 bg-opacity-0 translate-y-12  rounded-xl flex flex-row items-center justify-between p-1 cursor-pointer group h-[80px] transition-all duration-500 hover:bg-opacity-100 hover:translate-y-5  relative last-of-type:mb-12"
            key={character.id}
          >

       
          <h2 className="absolute top-[10%] left-[38%] text-[25px] text-slate-100 text-end uppercase font-bold tracking-[8px] opacity-40  group-hover:opacity-100 group-hover:font-extrabold group-hover:z-40 ">{character.name}</h2>
            <img
              className="w-[90px] object-cover transition-all duration-500 group-hover:scale-105 "
              src={character.image}
              alt={character.name}
            />
         
       

        

            <div className=" font-bold text-xs opacity-0 translate-x-10 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100  ">

              {/* STATS / KI
              <div className="flex flex-col gap-1 pt-1 items-end text-center">
                <span className="bg-orange-500  rounded-md py-1 px-2 w-[120px]">
                  KI {character.ki}
                </span>
                <span className="bg-red-500  rounded-md py-1 px-2 w-[120px]">
                  MAX KI {character.maxKi}
                </span>
              </div> */}

            </div>
            
          </div>
        ))}
      </div>

      <br />
            <br />
            <br />
            <br />
    </div>
  );
};
