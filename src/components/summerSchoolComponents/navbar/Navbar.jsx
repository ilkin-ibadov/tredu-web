import { useState } from "react";
import NavbarLogo from "../assets/logos/navbarLogo.svg";
import Login from "../assets/icons/login.svg";
import Menu from "../assets/icons/menu.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex relative items-center justify-between w-full p-4 sm:px-[44px] lg:px-[100px] xl:px-40 bg-white">
      <img
        className="max-w-[75px] sm:max-w-[100px] lg:max-w-[144px]"
        src={NavbarLogo}
        alt="navbarlogo.svg"
      />
      <div
        className={`${
          menuOpen ? "absolute flex flex-col items-center" : "hidden"
        } bg-white w-full left-0 top-14 sm:flex sm:flex-row items-center sm:gap-3 md:max-w-[540px] text-sm lg:text-base xl:text-lg font-montserrat font-bold text-[#252641]`}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-center py-3 w-full"
          href="#"
        >
          Home
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("howItWorks");
          }}
          className="text-center py-3 w-full"
          href="#"
        >
          How it works
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("courses");
          }}
          className="text-center py-3 w-full"
          href="#"
        >
          Courses
        </a>
        {/* <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("partners");
          }}
          className="text-center py-3 w-full"
          href="#"
        >
          Partners
        </a> */}
      </div>

      <button
        onClick={() => {
          navigate("/become-partner");
        }}
        className="hidden sm:block bg-[#0079E9] text-white text-sm lg:text-base xl:text-lg font-montserrat px-4 py-2 rounded-xl"
      >
        Become a partner
      </button>
      <div className="flex sm:hidden items-center gap-[20px]">
        <button
          onClick={() => {
            navigate("/become-partner");
          }}
        >
          <img src={Login} alt="login.svg" />
        </button>
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img src={Menu} alt="menu.svg" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
