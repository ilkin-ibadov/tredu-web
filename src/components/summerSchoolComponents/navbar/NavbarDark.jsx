import React from "react";
import logo from "../assets/logos/navbarDarkLogo.svg";
import { Link } from "react-router-dom";

const NavbarDark = () => {
  return (
    <div className="w-full flex justify-center sm:block sm:px-[156px] py-[20px] bg-[#16144A]">
      <Link to='/'><img className="max-w-[100px] sm:max-w-fit" src={logo} alt="logo.svg" /></Link>
    </div>
  );
};

export default NavbarDark;
