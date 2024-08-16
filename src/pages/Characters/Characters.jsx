import { useEffect, useState } from "react";
import { CardCharacter } from "../../components/CardCharacter/CardCharacter";
import InfiniteScroll from "react-infinite-scroll-component";

export const Characters = () => {
  const URL = "https://dragonball-api.com/api/characters";

  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // infinite scroll

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.items);
        setNext(data.links.next);
      });
  }, []);

  const fetchMoreData = async () => {
    console.log(next);

    try {

      const response = await fetch(next);
      const json = await response.json();
     
      setTimeout(() => {
        setCharacters((prev) => [...prev, ...json.items]);
        if(json.links.next){
          setNext(json.links.next);
          setHasMore(true)
        } else setHasMore(false)
        
      }, 500);
      
      console.log("HAY MAS", hasMore)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InfiniteScroll
      className="flex flex-wrap justify-center relative"
      dataLength={characters.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <h2 className="text-2xl text-slate-100 absolute bottom-0">
          Cargando mas personajes...
        </h2>
      }
    
    >
      <section className="grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-2 pt-20 md:pt-24 md:max-w-screen-lg 2xl:max-w-screen-2xl">
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </section>
    </InfiniteScroll>
  );
};
