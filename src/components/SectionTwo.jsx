import Image from "next/image";
import download from "../assets/icons/download.svg";
import time from "../assets/icons/time.svg";
import user from "../assets/icons/user.svg";
import school from "../assets/icons/school.svg";
import partner from "../assets/icons/partner.svg";
import SectionTwoItem from "@/components/SectionTwoItem";
import sectionTwoLeft from "../assets/images/sectionTwoLeft.svg";
import sectionTwoRight from "../assets/images/sectionTwoRight.svg";

const sectionTwoData = [
  { logo: download, number: "30 k", title: "Tətbiq yükləməsi" },
  { logo: time, number: "1600+", title: "Kurs saatı" },
  { logo: user, number: "125", title: "Aktiv istifadəçi" },
  { logo: school, number: "15+", title: "Məktəb" },
  { logo: partner, number: "20+", title: "Partnyor" },
];

const SectionTwo = () => {
  return (
    <section className="py-[60px] mt-[20px] mb-[80px] relative">
      <Image className="w-[100px] h-[100px] -z-10 md:w-auto md:h-auto  absolute left-0 top-0" src={sectionTwoLeft} />
      <Image
        className="absolute  w-[120px] h-[120px] -z-10 md:w-auto md:h-auto right-0 -bottom-[80px]"
        src={sectionTwoRight}
      />
      <h2 className="text-center z-50 text-[28px] md:text-[44px] text-[#374B9D] font-semibold">
        Tredu rəqəmlərdə
      </h2>
      <div className="grid grid-cols-2 md:flex items-center justify-center gap-[50px] mt-[36px]">
        {sectionTwoData.map((item) => (
          <SectionTwoItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
