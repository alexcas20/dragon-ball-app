export const Filter = ({ changeURL }) => {
  const handleChange = (e) => {
    changeURL(e.target.value);
  };

  return (
    <section className="pt-12 flex justify-center gap-3">
      <div>
        <input
          className="rounded-md py-1 px-2 mx-2 w-[280px]"
          type="text"
          placeholder="Search your favorite character..."
          onChange={handleChange}
        />
      </div>
    </section>
  );
};
