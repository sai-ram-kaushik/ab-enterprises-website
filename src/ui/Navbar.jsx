import React, { useState } from "react";
import { menuList } from "../constants";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-20 px-5 lg:px-10 bg-background z-[999] sticky top-0">
      <div className="flex items-center justify-between h-full">
        <Link to="/">
          <h2>
            AB <span>Enterprises</span>
          </h2>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuList.map((list, index) => {
            return (
              <ul key={index} className="hover:text-secondary duration-500">
                <li>
                  <Link to={list.path}>{list.label}</Link>
                </li>
              </ul>
            );
          })}
        </div>

        <div
          className="block md:hidden p-2 rounded-full bg-secondary text-background"
          onClick={handleChange}
        >
          {nav ? <IoClose size={25} /> : <IoMenu size={25} />}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
        }
      >
        <Link to="/">
          <h2 className="text-background" onClick={handleChange}>
            AB <span>Enterprises</span>
          </h2>
        </Link>

        <div className="flex flex-col items-center justify-center w-full h-full gap-10">
          {menuList.map((link, index) => (
            <ul
              key={index}
              className="text-xl text-background"
              onClick={handleChange}
            >
              <Link to={link.path}>
                <li>{link.label}</li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
