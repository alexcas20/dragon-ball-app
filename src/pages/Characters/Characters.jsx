import { useEffect, useState } from "react";
import { CardCharacter } from "../../components/CardCharacter/CardCharacter";
import InfiniteScroll from "react-infinite-scroll-component";
import { Filter } from "../../components/Filter";

export const Characters = () => {
  const [query, setQuery] = useState("");
  const URL = `https://dragonball-api.com/api/characters?name=${query}`;

  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const changeURL = (query) => {
    setQuery(query);
  };

  // infinite scroll

  useEffect(() => {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (query !== "") {
          setCharacters(data);
          console.log(data);
          setNext(null);
          setHasMore(false);
        } else {
          console.log(data);
          setCharacters(data.items);
          setNext(data.links?.next);
          setHasMore(true);
        }
      });
  }, [query]);

  const fetchMoreData = async () => {
    console.log(next);

    if (next !== null) {
      try {
        const response = await fetch(next);
        const json = await response.json();

        setTimeout(() => {
          setCharacters((prev) => [...prev, ...json.items]);
          if (json.links.next) {
            setNext(json.links.next);
            setHasMore(true);
          } else setHasMore(false);
        }, 500);

        console.log("HAY MAS", hasMore);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Filter changeURL={changeURL} />
      <InfiniteScroll
        className="flex flex-wrap justify-center relative"
        dataLength={characters?.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className=" absolute bottom-0">
            <div className="flex justify-center items-center h-screen gap-4 text-slate-100 font-extrabold">
              <div className="border-t-8 border-b-8 border-slate-100 rounded-full w-20 h-20 animate-spin" />
              <span>Cargando...</span>
            </div>
          </div>
        }
      >
        <section className="grid items-center place-content-center grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4 pt-20 md:pt-24 md:max-w-screen-lg 2xl:max-w-screen-2xl 2xl:gap-14">
          {characters?.map((character) => (
            <CardCharacter key={character.id} character={character} />
          ))}
        </section>
      </InfiniteScroll>
    </>
  );
};
