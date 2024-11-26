import { useEffect, useState } from "react";
import { CharactersContext } from "./CharactersContext";

import "react-toastify/dist/ReactToastify.css";
import useToastActions from "../helpers/useToastActions";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";

export const CharacterProvider = ({ children }) => {
  // fav characters
  const [favCharacters, setFavCharacters] = useState(() => {
    const savedFavorites = localStorage.getItem("favoritos");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

   /* notification */
   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Notification
  const { showConfirmation } = useToastActions();

  const deleteAllFavs = () => {
    showConfirmation({
      title: "Do you want to delete all characters",
      className: `${isMobile ? "custom-toastMobile" : "custom-toast"}`,
      onConfirm: () => {
        localStorage.removeItem("favoritos");
        setFavCharacters([]);
        toast.success("All characters were deleted!", {
          position: "top-right",
          className: `${isMobile ? "custom-toastMobile" : "custom-toast"}`
        });
      },
      onCancel: () => {
        toast.info("Deletion canceled.", { position: "top-right", className: `${isMobile ? "custom-toastMobile" : "custom-toast"}` });
      },
    
    });
  };

  const deleteFav = (characterId) => {
    showConfirmation({
      title: "Do you want to delete this character?",
      className: `${isMobile ? "custom-toastMobile" : "custom-toast"}`,
      onConfirm: () => {
        setFavCharacters((favs) =>
          favs.filter((character) => character.id !== characterId)
        );
        toast.success("Character was deleted!", { position: "top-right", className: `${isMobile ? "custom-toastMobile" : "custom-toast"}`});
      },
      onCancel: () => {
        toast.info("Action canceled.", { position: "top-right", className: `${isMobile ? "custom-toastMobile" : "custom-toast"}` });
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favCharacters));
  }, [favCharacters]);



  return (
    <CharactersContext.Provider
      value={{
       
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
