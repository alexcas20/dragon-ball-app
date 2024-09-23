import { useEffect, useState } from "react";
import { CardPlanet } from "../../components/CardPlanet/CardPlanet";
import InfiniteScroll from "react-infinite-scroll-component";

export const Planets = () => {
  const URL = "https://dragonball-api.com/api/planets";

  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // const getData = async () => {
  //   const response = await fetch(URL);
  //   const data = await response.json();
  //   const { items, links } = data;
  //   console.log(data);
  //   setNext(links.next);
  //   setData(items);
  // };

  const getMoreData = async () => {
    const response = await fetch(next);
    const data = await response.json();
    const { items, links } = data;
    setTimeout(() => {
      setData((prev) => [...prev, ...items]);
      if(links.next){
        setNext(links.next);
        setHasMore(true)
      } else setHasMore(false)
      
    }, 200);
    
    console.log("HAY MAS", hasMore)
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
    className="flex justify-center relative"
    dataLength={data.length}
    next={getMoreData}
    hasMore={hasMore}
    loader={
      
      <div className=" absolute bottom-0">
      <div className=" h-screen gap-4 text-slate-100 font-extrabold">
        <div className="border-t-8 border-b-8 border-slate-100 rounded-full w-20 h-20 animate-spin" />
        <span>Cargando...</span>
      </div>
    </div>
    }>
       <section className="grid items-center place-content-center grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-6 pt-16 px-8 md:pt-24  md:max-w-screen-lg 2xl:max-w-screen-2xl overflow-y-hidden   ">
      {data.map((planet) => (
        <CardPlanet key={planet.name} planet={planet} />
      ))}
    </section>
    </InfiniteScroll>
   
  );
};
