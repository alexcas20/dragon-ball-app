import { useEffect, useState } from "react";
import { CardPlanet } from "../../components/CardPlanet/CardPlanet";
import InfiniteScroll from "react-infinite-scroll-component";

export const Planets = () => {
  const URL = "https://dragonball-api.com/api/planets";

  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // animacion pagina
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true); // Activar la animación al montar el componente
  }, []);

  const getMoreData = async () => {
    const response = await fetch(next);
    const data = await response.json();
    const { items, links } = data;
    setTimeout(() => {
      setData((prev) => [...prev, ...items]);
      if (links.next) {
        setNext(links.next);
        setHasMore(true);
      } else setHasMore(false);
    }, 500);

    console.log("HAY MAS", hasMore);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.items);
        setNext(data.links.next);
      });
  }, []);

  return (
    <InfiniteScroll
      className={`page ${
        animate ? "animate flex flex-wrap justify-center relative" : ""
      }`}
      dataLength={data?.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={
        <div className="w-full flex justify-center items-center pt-4 pb-20">
          <div className="flex items-center gap-4 text-slate-100 font-extrabold">
            {/*  From Uiverse.io by yohohopizza  */}
            <div class="flex flex-row gap-2">
              <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
              <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        </div>
      }
    >
      <section className="grid items-center place-content-center grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] gap-6 pt-16 pb-10 px-8 md:pt-12  md:max-w-screen-lg 2xl:max-w-screen-2xl overflow-y-hidden   ">
        {data.map((planet) => (
          <CardPlanet key={planet.name} planet={planet} />
        ))}
      </section>
    </InfiniteScroll>
  );
};
