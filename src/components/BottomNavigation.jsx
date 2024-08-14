import { NavLink } from "react-router-dom";

export const BottomNavigation = () => {
  return (

        <header className="fixed bottom-0 gap-4 z-10 w-[100%] h-[10px] bg-slate-900 p-8 rounded-t-xl  transition-all duration-500  group hover:h-[100px] md:relative md:flex md:justify-start md:items-center md:rounded-t-none md:rounded-b-xl">
          <NavLink to={"/"} className={"absolute left-1/2 -translate-x-1/2 -translate-y-12"}>
            <img
              className="w-36 "
              src={"images/dragon-ball-z-seeklogo.png"}
              alt="logo dragon ball"
            />
          </NavLink>
          <nav className="w-full opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-1">
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
  
}
