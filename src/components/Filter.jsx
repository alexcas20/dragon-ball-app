import { useState } from "react"

export const Filter = () => {

    const [query, setQuery] = useState("");
      const URLQUERY =  `https://dragonball-api.com/api/characters?name=${query}`

    const handleChange = (e) => {
      
        setQuery(e.target.value);
        
    }

    const handleSearch = () =>{
        console.log("A buscar => ", query.toLowerCase());
        setQuery("");
    }

  return (
    <section className="pt-12 flex justify-center gap-3">
        <div>
        <input className="rounded-md py-1 px-2 mx-2 w-[280px]" type="text"
        onChange={handleChange}
        value={query} />
        <button 
        onClick={handleSearch}
        className="bg-slate-900 text-slate-50 p-1 rounded-md">Search</button>
        </div>
        
    </section>
  )
}
