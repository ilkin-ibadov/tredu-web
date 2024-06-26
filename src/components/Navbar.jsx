"use client";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState();
  return (
    <>
    <nav className={` flex items-center justify-between px-[12px] md:px-[40px] py-[14px] md:py-[20px] bg-white rounded-[26px] shadow-lg shadow-black-300`}>
      <Image src={logo} className="w-[80px] md:w-auto" />
      <ul className=" hidden md:flex flex-col sm:flex-row items-center gap-[33px] text-[16px] leading-[24px] text-[#5D5A88]">
        <li>Ana səhifə</li>
        <li>Kurslar</li>
        <li>Partnyorlar</li>
        <li>Əlaqə</li>
      </ul>
      <a
        href=""
        className="bg-[#0079E9] hidden md:block py-[18px] px-[23px] text-white text-[16px] font-bold leading-[18px] rounded-[30px]"
      >
        Tətbiqi yüklə
      </a>
      <button
        aria-label="menu-button"
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-50 block lg:hidden focus:outline-none   p-3  w-[50.95px] h-[50.95px] rounded-md"
      >
        <div
          className={`bg-[#0079E9] h-1  w-[30px] transition-all ${
            menuOpened ? "rotate-45  translate-y-1" : ""
          }`}
        />
        <div
          className={`bg-[#0079E9] h-1  w-[30px] my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-[#0079E9] h-1  w-[30px] transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>

      
    </nav>
    <div
    className={`z-40 w-full absolute top-0 left-0   transition-all    overflow-hidden 
${menuOpened ? "w-full h-fit bg-white " : "w-full h-0  "}`}
  >
    <div className=" mx-auto  pb-[90px] flex flex-col w-full items-start justify-between px-4 ">
      <ul className="w-full py-[80px] flex flex-col sm:flex-row items-center  text-[16px] leading-[24px] text-[#5D5A88]">
        <li className="w-full text-center font-[500] text-[#1f1f1f] py-[16px] hover:bg-[#0079E9] hover:text-white duration-300">Ana səhifə</li>
        <hr className="h-[0.76px] border-0 bg-[#E7E6F2] w-full" />
        <li className="w-full text-center font-[500] text-[#1f1f1f] py-[16px] hover:bg-[#0079E9] hover:text-white duration-300">Kurslar</li>
        <hr className="h-[0.76px] border-0 bg-[#E7E6F2] w-full" />
        <li className="w-full text-center font-[500] text-[#1f1f1f] py-[16px] hover:bg-[#0079E9] hover:text-white duration-300">Partnyorlar</li>
        <hr className="h-[0.76px] border-0 bg-[#E7E6F2] w-full" />
        <li className="w-full text-center font-[500] text-[#1f1f1f] py-[16px] hover:bg-[#0079E9] hover:text-white duration-300">Əlaqə</li>
        <hr className="h-[0.76px] border-0 bg-[#E7E6F2] w-full" />
      </ul>


     <a
        href=""
        className="bg-[#0079E9] w-full text-center py-[18px] px-[23px] text-white text-[16px] font-bold rounded-[30px]"
      >
        Tətbiqi yüklə
      </a>

    </div>
  </div>
    </>
  );
};

export default Navbar;
