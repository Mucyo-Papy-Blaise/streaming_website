import React, { useState } from "react";
import logo from "../assets/mucyo1.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoutComponent from "./logout";
import { useUserContext } from "./AuthContext";


interface NavBarProps {
  onContactClick: () => void;
  onAboutClick: () => void;
  onHomeClick: () => void;
  onHelpClick: () => void;
  onLoginClick: () => void;
  onCreateAccClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({onContactClick,onAboutClick,onHomeClick,onLoginClick,onCreateAccClick,onHelpClick}) => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isAuthenticated, user } = useUserContext()

  const handleClick = (link: string, callBack ?: ()=> void) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    if(callBack) callBack();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const user = true;

  return (
    <div className="fixed bg-[#09173c79] h-[50px] md:h-[80px] z-50 w-full px-10 flex items-center shadow-md">
      {/* Left Side */}
      <div className="flex items-center w-full md:mx-4 md:space-x-10 lg:mx-28 lg:space-x-14">
        <div>
            <img src={logo} alt="Logo" className="w-[60px] md:w-[108px] h-[25px] md:h-[45px] block" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex md:flex items-center lg:gap-16 md:gap-6 font-raleway font-bold text-white lg:text-[18px] md:text-[12px] pr-0 lg:pr-[500px] md:pr-0">
          {/* Main Links */}
          <Link
            to="Home"
            onClick={() => handleClick("Home",onHomeClick)
        
            }
            className={`${
              activeLink === "Home"
                ? "border-b-2 border-[#fa0153] "
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Home
          </Link>
          <Link
            to="Recent Mixes"
            onClick={() => handleClick("About" ,onAboutClick)
            }
            className={`${
              activeLink === "About"
                ? "border-b-2 border-[#fa0153] "
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            About
          </Link>
          <Link
            to="Contact"
            onClick={() => handleClick("Contact",onContactClick)}
            className={`${
              activeLink === "Contact"
                ? "border-b-2 border-[#fa0153] "
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side Links */}
        <div className="hidden md:flex lg:flex items-start gap-6 text-white font-raleway">
          <Link
            to="Help"
            onClick={() => handleClick("Help",onHelpClick)}
            className={`${
              activeLink === "Help"
                ? "border-b-2 border-[#fa0153]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Help
          </Link>
          <div className="h-6 w-[2px] bg-white rounded-xl"></div>
          {isAuthenticated ? (
            <div className="flex items-center gap-10">
              <LogoutComponent />
              <p className="capitalize text-2xl font-bold underline underline-offset-8 hover:text-blue-500 cursor-pointer">{user.firstName}</p>
            </div>
          ):(
            <>
              <Link
            to="Login"
            onClick={() => handleClick("Login", onLoginClick)}
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
            onClick={() => handleClick("Create an Account", onCreateAccClick)}
            className={`${
              activeLink === "Create an Account"
                ? "border-b-2 border-[#ffff] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150 font-semibold text-[#fa0153] text-nowrap`}
          >
            Create an Account
          </Link>
            </>
          )}
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
            onClick={() => handleClick("Home",onHomeClick)}
            className={`${
              activeLink === "Home"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            Home
          </Link>
          <Link
            to="About"
            onClick={() => handleClick("About",onAboutClick)}
            className={`${
              activeLink === "About"
                ? "border-b-2 border-[#fa0153] text-[#d4658a]"
                : ""
            } cursor-pointer transition-all duration-150`}
          >
            About
          </Link>
          <Link
            to="Contact"
            onClick={() => handleClick("Contact",onContactClick)}
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
            onClick={() => handleClick("Help",onHelpClick)}
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
            onClick={() => handleClick("Login",onLoginClick)}
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
            onClick={() => handleClick("Create an Account", onCreateAccClick)}
            className={`${
              activeLink === "Create an Account"
                ? "border-b-2 border-[#ffff] text-[#ffff]"
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
