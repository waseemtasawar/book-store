import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-blue-500 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="w-12" />
              <h1 className="text-2xl font-bold">Books Store</h1>
            </div>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Possimus, voluptate.
            </p>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Comsat, Abbottabad</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+92 123456789</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 gap-8">
            <div className="">
              <h2 className="text-xl font-bold mb-4">Important Links</h2>
              <ul className="space-y-3">
                {FooterLinks.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition duration-300"
                  >
                    <Link
                      to={link.link}
                      className="flex items-center space-x-2"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-3">
                {FooterLinks.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition duration-300"
                  >
                    <Link
                      to={link.link}
                      className="flex items-center space-x-2"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition duration-300">
                  <FaLocationArrow />
                  <span>Comsat, Abbottabad</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition duration-300">
                  <FaMobileAlt />
                  <span>+92 123456789</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-6 border-t border-gray-400 mt-10">
          <p className="text-gray-200">
            &copy; 2024 All rights reserved || Made with ❤️ by Maria Adil
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
