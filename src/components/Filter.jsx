import { FaSearch } from "react-icons/fa";

export const Filter = ({ changeURL }) => {
  const handleChange = (e) => {
    changeURL(e.target.value);
  };

  return (
    <section className="pt-12 flex justify-center lg:justify-end lg:mr-52 xl:mr-40  gap-3">
      <form>
        <div className="bg-white p-3 flex rounded-2xl text-lg">
          <input
            className="border-none outline-none flex-1 w-[300px]"
            type="text"
            placeholder="Search your favorite character..."
            autoComplete="off"
            name="pokemonName"
            onChange={handleChange}
          />
          <button
            type="button"
            className="border-none bg-orange-500 p-2 rounded-xl shadow-lg shadow-red-400/50 cursor-pointer hover:bg-red-300 transition-colors"
          >
           <FaSearch />
          </button>
        </div>
      </form>
    </section>
  );
};
