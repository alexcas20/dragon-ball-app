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
    <section className="flex flex-col items-center gap-8 p-6 bg-slate-900 ">
      {data.map((planet) => (
        <CardPlanet key={planet.name} planet={planet} />
      ))}
    </section>
  );
};
