import { NavLink } from "react-router-dom";
import logoDragonBall from '../assets/images/dragon-ball-z-seeklogo.svg'


export const NavBar = () => {
  return (
    <header className="flex justify-start items-center bg-slate-950 p-8  drop-shadow-lg ">
      <NavLink className="w-[180px] -mr-[100px] transition-all duration-500 hover:-translate-y-2 " to={"/"}>
        <img
          className="cursor-pointer "
          src={logoDragonBall}
          alt="logo dragon ball"
        />
      </NavLink>
      <nav className="w-full">
        <ul className="flex justify-center gap-6 text-slate-100 text-lg uppercase font-bold tracking-[4px]">
          <li className=" transition-all hover:text-orange-400">
            <NavLink
              to={"characters"}
              className={({ isActive }) => (isActive ? "border-b-2 text-orange-400" : "")}
            >
              Characters
            </NavLink>
          </li>
          <li className="transition-all hover:text-orange-400">
            <NavLink
              to={"planets"}
              className={({ isActive }) => (isActive ? "border-b-2 text-orange-400" : "")}
            >
              Planets
            </NavLink>
          </li>
          <li className="transition-all hover:text-orange-400">
            <NavLink
              to={"favs"}
              className={({ isActive }) => (isActive ? "border-b-2 text-orange-400" : "")}
            >
              Favs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
