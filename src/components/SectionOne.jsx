import Image from "next/image";
import Navbar from "@/components/Navbar";
import firstSection from "../assets/images/firstSection.png";
import sectionOneBg from "../assets/images/sectionOneBg.png";

const SectionOne = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${sectionOneBg.src})`,
        width: "100%",
        height: "100%",
      }}
      className="w-full pt-[40px] px-[100px] pb-[87px] "
    >
      <Navbar />
      <div className={`flex items-center justify-between pt-[50px] pr-[33px]`}>
        <div className="max-w-[497px]">
          <h1 className="text-[48px] font-semibold leading-[52px] mb-[40px]">
            Övladınız məktəbi tərk etmədən{" "}
            <span className="text-[#0079E9]">dərnəyə</span> qoşula biləcək
          </h1>
          <a className="bg-[#0079E9] py-[18px] px-[23px] text-white text-[16px] font-bold leading-[18px] rounded-[30px]">
            Tətbiqi yüklə
          </a>
        </div>
        <Image className="w-[524px] h-[494px]" src={firstSection} />
      </div>
    </section>
  );
};

export default SectionOne;
