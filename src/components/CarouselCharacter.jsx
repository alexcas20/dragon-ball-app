import { useNavigate } from "react-router-dom";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarouselCharacter = ({ data, isLinked }) => {
  const navigate = useNavigate();

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
