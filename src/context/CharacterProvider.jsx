import { useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { CharactersContext } from "./CharactersContext"

export const CharacterProvider = ({children}) => {

    const [query, setQuery] = useState("");
    const URL = `https://dragonball-api.com/api/characters?name=${query}`;
    const { data } = useFetch(URL);
    const {items, links} = data;

  return (
   <CharactersContext.Provider value={{items, links, query, setQuery}}>
    {children}
   </CharactersContext.Provider>
  )
}
