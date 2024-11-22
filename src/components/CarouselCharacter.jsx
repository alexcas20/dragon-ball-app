import { useNavigate } from "react-router-dom";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { FaHeartCircleMinus } from "react-icons/fa6";


export const CarouselCharacter = ({ data, isLinked, actions }) => {
  const navigate = useNavigate();

  // Favs Buttons
  const { deleteFav } = useContext(CharactersContext);

 
  return (
    <section className="flex gap-10 mt-5 mb-4 md:mt-1 justify-center">
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        navigation={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((character) => (
          <SwiperSlide key={character.name}>

            {/* Favs Buttons */}
            {actions && (
              <div
                className=" flex justify-end items-center mt-3 w-[100%] text-orange-500 cursor-pointer p-2 gap-3 transition-all group"
                onClick={() => deleteFav(character.id)}
              >
                <FaHeartCircleMinus className="text-4xl group-hover:-translate-y-2 group-hover:text-slate-100" />
                <span className=" tracking-widest font-bold group-hover:-translate-y-2  group-hover:font-bold group-hover:text-slate-100">
                  Delete
                </span>
              </div>
            )}

            {/* Swiper container */}
            <div className="group">
              <div className=" translate-y-4 transition-all duration-700 group-hover:translate-y-1 hover:cursor-pointer relative mb-10">
                <div className=" flex flex-col items-center">
                  {isLinked ? (
                    <img
                      onClick={() => navigate("/character/" + character.id)}
                      className="h-[200px] md:h-[300px] object-cover "
                      src={character.image}
                    />
                  ) : (
                    <img
                      className="h-[200px] md:h-[300px] object-cover "
                      src={character.image}
                    />
                  )}

                  <p className="text-md md:text-2xl text-slate-100 font-extrabold tracking-[5px] py-2 md:py-4">
                    {character.name}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
