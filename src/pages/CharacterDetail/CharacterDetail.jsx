import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { CardCharacterDetail } from "../../components/CardCharacterDetail/CardCharacterDetail";

export const CharacterDetail = () => {
  const param = useParams();

  const { data } = useFetch(
    "https://dragonball-api.com/api/characters/" + param.id
  );

  return (
    <section className="flex flex-col items-center bg-slate-900  transition-all duration-700 ">
      <CardCharacterDetail character={data} />
    </section>
  );
};
