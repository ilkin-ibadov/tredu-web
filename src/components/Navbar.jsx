import Image from "next/image";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[40px] py-[20px] bg-white rounded-[26px] shadow-lg shadow-black-300">
      <Image src={logo} />
      <ul className="flex flex-col sm:flex-row items-center gap-[33px] text-[16px] leading-[24px] text-[#5D5A88]">
        <li>Ana səhifə</li>
        <li>Kurslar</li>
        <li>Partnyorlar</li>
        <li>Əlaqə</li>
      </ul>
      <a
        href=""
        className="bg-[#0079E9] py-[18px] px-[23px] text-white text-[16px] font-bold leading-[18px] rounded-[30px]"
      >
        Tətbiqi yüklə
      </a>
    </nav>
  );
};

export default Navbar;
