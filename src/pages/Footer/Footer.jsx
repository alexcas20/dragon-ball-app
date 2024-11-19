import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import logoDragonBall from "../../assets/images/logo-dragon-ball.png";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <footer className="bg-slate-950 p-2 pb-32 md:pb-12 w-full">
      <div className="flex justify-center gap-8  text-slate-100 items-end m-5">
        <hr className=" w-1/2 border-t-1 border-slate-400" />

        {/* Iconos */}

        <div className="flex gap-3 text-3xl lg:text-4xl group transition-all">
          <NavLink
            to={"https://github.com/alexcas20"}
            target="_blank"
            className="hover:-translate-y-2 hover:text-orange-600"
          >
            <FaGithub />
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/in/jorge-calvillo-salas-29032523b/"}
            target="_blank"
            className="hover:-translate-y-2 hover:text-orange-600"
          >
            <FaLinkedin />
          </NavLink>
        </div>

        <hr className=" w-1/2 border-t-1 border-slate-400" />
      </div>
      <div className="cursor-pointer">
        <NavLink to={"https://web.dragonball-api.com/"} target="_blank">
          <img
            className="w-[20%] md:w-[10%] mx-auto"
            src={logoDragonBall}
            alt="Logo dragon ball"
          />
        </NavLink>
      </div>
      {!isMobile && (
        <div className=" flex gap-4 justify-center pt-6 text-slate-100 text-md uppercase font-bold tracking-[4px] lg:text-xl">
          <NavLink className="hover:text-orange-600 " to={"characters"}>
            Characters
          </NavLink>
          <NavLink className="hover:text-orange-600 " to={"planets"}>
            Planets
          </NavLink>
          <NavLink className="hover:text-orange-600 " to={"favs"}>
            Favs
          </NavLink>
        </div>
      )}

      <div className="text-slate-100 uppercase text-sm font-semibold tracking-[5px] text-center text-opacity-50 pt-4">
        <span>Developed by JACS</span>
      </div>
    </footer>
  );
};
