import { NavLink } from "react-router-dom";
import logoDragonBall from '../assets/images/dragon-ball-z-seeklogo.svg'


export const NavBar = () => {
  return (
    <header className="flex justify-start items-center bg-slate-950 p-8  drop-shadow-lg ">
      <NavLink className="w-[120px] -mr-[100px]" to={"/"}>
        <img
          className="w-32 "
          src={logoDragonBall}
          alt="logo dragon ball"
        />
      </NavLink>
      <nav className="w-full">
        <ul className="flex justify-center gap-6 text-xl text-zinc-100">
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
