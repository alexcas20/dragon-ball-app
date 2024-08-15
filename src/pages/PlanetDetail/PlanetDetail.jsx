import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { CardPlanetDetail } from "../../components/CardPlanetDetail/CardPlanetDetail";

export const PlanetDetail = () => {
  const param = useParams();
  const URL = `https://dragonball-api.com/api/planets/${param.id}`;

  // get data planet
  const { data } = useFetch(URL);

  return (
    <section >
      <CardPlanetDetail planet={data} />
    </section>
  );
};
