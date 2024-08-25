import { useEffect, useState } from "react";


// const data =[
//     {
//       "balance": "$3,946.45",
//       "picture": "http://placehold.it/32x32",
//       "age": 23,
//       "name": "Bird Ramsey",
//       "gender": "male",
//       "company": "NIMON",
//       "email": "birdramsey@nimon.com"
//     },
//     {
//       "balance": "$2,499.49",
//       "picture": "http://placehold.it/32x32",
//       "age": 31,
//       "name": "Lillian Burgess",
//       "gender": "female",
//       "company": "LUXURIA",
//       "email": "lillianburgess@luxuria.com"
//     },
//     {
//       "balance": "$2,820.18",
//       "picture": "http://placehold.it/32x32",
//       "age": 34,
//       "name": "Kristie Cole",
//       "gender": "female",
//       "company": "QUADEEBO",
//       "email": "kristiecole@quadeebo.com"
//     },
//     {
//       "balance": "$3,277.32",
//       "picture": "http://placehold.it/32x32",
//       "age": 30,
//       "name": "Leonor Cross",
//       "gender": "female",
//       "company": "GRONK",
//       "email": "leonorcross@gronk.com"
//     },
//     {
//       "balance": "$1,972.47",
//       "picture": "http://placehold.it/32x32",
//       "age": 28,
//       "name": "Marsh Mccall",
//       "gender": "male",
//       "company": "ULTRIMAX",
//       "email": "marshmccall@ultrimax.com"
//     }
//   ]

export const CarouselCharacter = ({ data }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    console.log("valor position ", position);
    console.log("longitud data", data);
  }, [position]);

  const handleNext = () => {
    console.log(data.length);

    if (position < data.length - 1) {
      setPosition(position + 1);
    } else if (position == data.length - 1) {
      setPosition(0);
    }
  };

  return (
    <section className="flex mt-12 md:mt-4 justify-center">
      <div className="flex items-center md:w-[350px] md:justify-between group" key={data[position]?.name}>
        <div className="flex flex-col items-center  translate-y-4 transition-all duration-700 group-hover:translate-y-1 hover:cursor-pointer">
          <img className="h-[220px] md:h-[300px] object-cover  " src={data[position]?.image} />
          <p className="text-md md:text-2xl font-extrabold tracking-[5px] py-2 md:py-4">
            {data[position]?.name}
          </p>
        </div>

        {data.length > 1 && (
          <button
            className="bg-slate-800 rounded-md py-2 px-4 h-[40px]   hover:bg-slate-700"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};
