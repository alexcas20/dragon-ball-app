import { useEffect, useState } from "react";
import { CardCharacter } from "../../components/CardCharacter/CardCharacter";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const [next, setNext] = useState(null);

  const URL = "https://dragonball-api.com/api/characters";

  const getaData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    json.meta.currentPage < json.meta.totalPages ? setNext(json.links.next) : setNext(json.links.first)
    setCharacters(json.items);
  };

  useEffect(() => {
    getaData(URL);
  }, []);

  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-2 p-6 pt-20 md:pt-24">
      {characters.map((character) => (
        <CardCharacter key={character.id} character={character} />
      ))}
      <button onClick={() => getaData(next)}>Next</button>
    </section>
  );
};
