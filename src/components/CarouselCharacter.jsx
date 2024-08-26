import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


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
    <section className="flex gap-10 mt-12 md:mt-1 justify-center">
      <div className="flex items-center  md:justify-between group cursor-pointer" key={data[position]?.name}>
        <div className="flex flex-col items-center  translate-y-4 transition-all duration-700 group-hover:translate-y-1 hover:cursor-pointer">
          <img className="h-[220px] md:h-[300px] object-cover relative  " src={data[position]?.image} />
          <p className="text-md md:text-2xl font-extrabold tracking-[5px] py-2 md:py-4">
            {data[position]?.name}
          </p>
        </div>

        {data.length > 1 && (
         <IoIosArrowForward
         className="absolute -right-6 md:right-[650px] text-[200px] md:text-[250px] text-slate-700 transition-colors hover:text-slate-400  " onClick={handleNext} />
        )}
      </div>
    </section>
  );
};
