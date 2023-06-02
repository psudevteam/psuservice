import { Button } from "@/components/atoms";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navList = [
    { navItem: "home", link: "/" },
    { navItem: "about", link: "/about" },
    { navItem: "contact", link: "/contact" },
    { navItem: "services", link: "/services" },
  ];
  const navActive = ({ isActive }) => {
    return isActive
      ? "text-gray-800 capitalize underline underline-offset-8 decoration-2 decoration-blue-300"
      : "hover:text-gray-700 capitalize font-medium";
  };
  return (
    <header className="bg-translate flex justify-between items-center text-slate-500 py-4 px-12 w-full">
      <figure>
        <figcaption className="text-2xl">PSU</figcaption>
      </figure>
      <nav className="">
        <ul className="flex gap-x-4 ml-14">
          {navList.map((nav, idx) => (
            <li key={idx}>
              <NavLink to={nav.link} className={navActive}>
                {nav.navItem}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-4">
        <Button variant="primary" size="sm">
          Login
        </Button>
        <Button variant="primary-outline" size="sm">
          Register
        </Button>
      </div>
    </header>
  );
};
