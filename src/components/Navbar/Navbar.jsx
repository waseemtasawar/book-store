import React from "react";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white transition duration-300 ease-in-out">
        <div className="container py-4 sm:py-0 mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
              >
                <img src={Logo} alt="Logo" className="w-10" />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                  Books
                </span>
              </a>
            </div>
            <div className="flex items-center gap-8">
              <DarkMode />
              <ul className="hidden sm:flex items-center gap-6">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-200 ease-in-out"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:scale-105 transition-transform duration-200 text-white py-2 px-6 rounded-full flex items-center gap-3 shadow-lg"
              >
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
