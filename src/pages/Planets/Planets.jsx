import { useEffect, useState } from "react";

export const Planets = () => {
  const URL = "https://dragonball-api.com/api/planets";

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const {items, links} = data
    console.log(data);
    setData(items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      {
        data.map((planet) => 
          <div key={planet.id}>
            <img src={planet.image} alt="" />
            <h2>{planet.name}</h2>
          </div>
        )
      }
    </section>
  ) 
};
