import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { CardCharacterDetail } from "../../components/CardCharacterDetail/CardCharacterDetail";
import { useEffect, useState } from "react";

export const CharacterDetail = () => {
  const param = useParams();

  const { data } = useFetch(
    "https://dragonball-api.com/api/characters/" + param.id
  );

  // animacion pagina
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true); // Activar la animación al montar el componente
  }, []);

  return (
    <section
      className={`pageDetailCharacter ${
        animate
          ? "animate flex flex-col items-center bg-slate-900  transition-all duration-700"
          : ""
      }`}
    >
      <CardCharacterDetail character={data} />
    </section>
  );
};
