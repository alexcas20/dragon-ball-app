import { useEffect, useState } from "react";
import { CardPlanet } from "../../components/CardPlanet/CardPlanet";

export const Planets = () => {
  const URL = "https://dragonball-api.com/api/planets";

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const { items, links } = data;
    console.log(data);
    setData(items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="grid items-center place-content-center grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 pt-20  px-8 md:pt-10 ">
      {data.map((planet) => (
        <CardPlanet key={planet.name} planet={planet} />
      ))}
    </section>
  );
};
