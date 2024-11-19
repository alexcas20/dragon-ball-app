import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { CharactersContext } from "./CharactersContext"


export const CharacterProvider = ({children}) => {

    const [query, setQuery] = useState("");
    // fav characters
    const [favCharacters,setFavCharacters]= useState(() => {
     
      const savedFavorites = localStorage.getItem('favoritos');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const deleteAllFavs = () => {
      localStorage.removeItem("favoritos");
      setFavCharacters([])
    }

    const deleteFav = (algo) => {
      /* setFavCharacters((prev) => prev.filter(fav => fav.id != id)) */
      console.log(algo)
    }

    useEffect(() => {
      localStorage.setItem('favoritos', JSON.stringify(favCharacters));
    }, [favCharacters]);

    const URL = `https://dragonball-api.com/api/characters?name=${query}`;
    const { data } = useFetch(URL);
    const {items, links} = data;

  return (
   <CharactersContext.Provider value={{items, links, query, setQuery, favCharacters, setFavCharacters, deleteAllFavs, deleteFav}}>
    {children}
   </CharactersContext.Provider>
  )
}
