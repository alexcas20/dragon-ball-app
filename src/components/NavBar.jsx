export const NavBar = () => {
  return (
    <header className="flex justify-start items-center gap-2 bg-sky-300 p-8 rounded-b-xl drop-shadow-lg ">
      <a href="">
        <img className="w-36 " src={"images/logo-dragon-ball.png"} alt="logo dragon ball" />
      </a>
      <nav className="w-full">
        <ul className="flex justify-center gap-4 text-xl text-zinc-800">
          <li className=" transition-all hover:text-slate-100">
            <a href="">Characters</a>
          </li>
          <li className="transition-all hover:text-slate-100">
            <a href="">Planets</a>
          </li>
          <li className="transition-all hover:text-slate-100">
            <a href="">Favs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
