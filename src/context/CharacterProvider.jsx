import { useEffect, useState } from "react";
import { CharactersContext } from "./CharactersContext";

import "react-toastify/dist/ReactToastify.css";
import useToastActions from "../helpers/useToastActions";
import { toast } from "react-toastify";

export const CharacterProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  // fav characters
  const [favCharacters, setFavCharacters] = useState(() => {
    const savedFavorites = localStorage.getItem("favoritos");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Notification
  const { showConfirmation } = useToastActions();

  const deleteAllFavs = () => {
    showConfirmation({
      title: "Do you want to delete all characters",
      onConfirm: () => {
        localStorage.removeItem("favoritos");
        setFavCharacters([]);
        toast.success("All characters were deleted!", {
          position: "top-right",
          className: "custom-toast"
        });
      },
      onCancel: () => {
        toast.info("Deletion canceled.", { position: "top-right", className: "custom-toast" });
      },
    });
  };

  const deleteFav = (characterId) => {
    showConfirmation({
      title: "Do you want to delete this character?",
      onConfirm: () => {
        setFavCharacters((favs) =>
          favs.filter((character) => character.id !== characterId)
        );
        toast.success("Character was deleted!", { position: "top-right", className: "custom-toast" });
      },
      onCancel: () => {
        toast.info("Action canceled.", { position: "top-right", className: "custom-toast" });
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favCharacters));
  }, [favCharacters]);

  /* const URL = `https://dragonball-api.com/api/characters?name=${query}`;
  const { data } = useFetch(URL);
  const { items, links } = data; */

  return (
    <CharactersContext.Provider
      value={{
        /* items,
        links,
        query,
        setQuery, */
        favCharacters,
        setFavCharacters,
        deleteAllFavs,
        deleteFav,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
