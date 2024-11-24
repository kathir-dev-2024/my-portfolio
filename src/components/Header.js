import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [togglemenu, settogglemenu] = useState();
  return (
    <header className="flex justify-between px-5 bg-primary py-2">
      <a href="" className="text-black font-bold">
        KATHIRESAN L
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {togglemenu && (
        <nav className="block md:hidden mobile-nav text-center">
          <ul
            onClick={() => settogglemenu(!togglemenu)}
            className="flex flex-col text-white mobile-nav"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}

      <button
        className="block md:hidden"
        onClick={() => settogglemenu(!togglemenu)}
      >
        <FaBars className="text-white h-5" />
      </button>
    </header>
  );
}
