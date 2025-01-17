import React, { useState } from "react";
import logo from "../assets/mucyo1.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on small devices
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bg-[#09173c49] h-[50px] md:h-[80px] z-50 w-full px-10 flex items-center shadow-md">
      {/* Left Side */}
      <div className="flex items-center w-full md:mx-28 md:space-x-14">
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="w-[60px] md:w-[108px] h-[25px] md:h-[45px] block" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16 font-raleway font-bold text-white text-[18px] pr-0 md:pr-[500px]">
          {/* Main Links */}
          <Link
            to="Home"
            onClick={() => handleClick("Home")}
            className={`${
              activeLink === "Home"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Home
          </Link>
          <Link
            to="Recent Mixes"
            onClick={() => handleClick("Recent Mixes")}
            className={`${
              activeLink === "Recent Mixes"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Recent Mixes
          </Link>
          <Link
            to="Contact"
            onClick={() => handleClick("Contact")}
            className={`${
              activeLink === "Contact"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side Links */}
        <div className="hidden md:flex items-start gap-6 text-white font-raleway">
          <Link
            to="Help"
            onClick={() => handleClick("Help")}
            className={`${
              activeLink === "Help"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Help
          </Link>
          <div className="h-6 w-[2px] bg-white rounded-xl"></div>
          <Link
            to="Login"
            onClick={() => handleClick("Login")}
            className={`${
              activeLink === "Login"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Login
          </Link>
          <Link
            to="Create an Account"
            onClick={() => handleClick("Create an Account")}
            className={`${
              activeLink === "Create an Account"
                ? "border-b-2 border-[#ffff] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150 font-semibold text-[#fa0153]`}
          >
            Create an Account
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="flex md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars/>}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute max-w-52 top-[50px] right-0 w-full bg-[#14172dac] text-white flex flex-col items-start px-3 gap-4 py-4 shadow-lg font-raleway text-[16px] transition-all duration-300">
          {/* Main Links */}
          <Link
            to="Home"
            onClick={() => handleClick("Home")}
            className={`${
              activeLink === "Home"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Home
          </Link>
          <Link
            to="Recent Mixes"
            onClick={() => handleClick("Recent Mixes")}
            className={`${
              activeLink === "Recent Mixes"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Recent Mixes
          </Link>
          <Link
            to="Contact"
            onClick={() => handleClick("Contact")}
            className={`${
              activeLink === "Contact"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Contact
          </Link>

          {/* Right Side Links */}
          <Link
            to="Help"
            onClick={() => handleClick("Help")}
            className={`${
              activeLink === "Help"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Help
          </Link>
          <Link
            to="Login"
            onClick={() => handleClick("Login")}
            className={`${
              activeLink === "Login"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Login
          </Link>
          <Link
            to="Create an Account"
            onClick={() => handleClick("Create an Account")}
            className={`${
              activeLink === "Create an Account"
                ? "border-b-2 border-[#ffff] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150 font-semibold text-[#fa0153]`}
          >
            Create an Account
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
