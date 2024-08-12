import { NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <header className="flex justify-start items-center gap-2 bg-slate-900 p-8 rounded-b-xl drop-shadow-lg ">
      <NavLink to={"/"}>
        <img
          className="w-36 "
          src={"images/logo-dragon-ball.png"}
          alt="logo dragon ball"
        />
      </NavLink>
      <nav className="w-full">
        <ul className="flex justify-center gap-4 text-xl text-zinc-100">
          <li className=" transition-all hover:text-orange-400">
            <NavLink
              to={"characters"}
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              Characters
            </NavLink>
          </li>
          <li className="transition-all hover:text-orange-400">
            <NavLink
              to={"planets"}
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              Planets
            </NavLink>
          </li>
          <li className="transition-all hover:text-orange-400">
            <NavLink
              to={"favs"}
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              Favs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
