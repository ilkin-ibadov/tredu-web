import Image from "next/image";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="w-full px-[115px]">
      <div className="flex items-center justify-between py-[45px] border-b border-zinc-200">
        <Image src={logo} />
        <ul className="flex items-center gap-[33px] text-[16px] leading-[24px] text-[#5D5A88]">
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
      </div>
      <p className="text-center mt-[32px] mb-[44px] text-[14px]">
        Copyright © 2024 Tredu | Bütün hüquqlar qorunur
      </p>
    </div>
  );
};

export default Footer;
