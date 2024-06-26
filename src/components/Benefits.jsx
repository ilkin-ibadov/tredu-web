import Image from "next/image";
import BenefitCard from "./BenefitCard";
import benefitsTopLeft from "../assets/images/benefitsTopLeft.svg";
import benefitsBottomLeft from "../assets/images/benefitsBottomLeft.svg";
import benefitsTopRight from "../assets/images/benefitsTopRight.svg";
import benefitsBottomRight from "../assets/images/benefitsBottomRight.svg";

const benefitsRow1 = [
  {
    number: "01",
    desc: "Məktəbi tərk etmədən dərnəyə qoşulma imkanı",
  },
  {
    number: "02",
    desc: "Onlarla partnyor dərnəkləri bir platformada",
  },
  {
    number: "03",
    desc: "Övladınızın dərnək gedişatını izləmək şansı",
  },
];

const benefitsRow2 = [
  {
    number: "04",
    desc: "Fiziki və məntiqi-inkişaf tipli dərnək növləri",
  },
  {
    number: "05",
    desc: "Vaxta və yola qənaət imkanı",
  },
];

const Benefits = () => {
  return (
    <div className="w-full bg-[#0079E9] mt-[95px] pt-[72px] relative">
      <Image
        className="absolute z-0 top-0 left-0"
        width={140}
        height={140}
        src={benefitsTopLeft}
      />
      <Image
        className=" absolute z-0 bottom-[60px] left-[36px]"
        width={50}
        height={50}
        src={benefitsBottomLeft}
      />
      <Image
        className=" absolute z-0 top-[70px] right-[36px]"
        width={50}
        height={50}
        src={benefitsTopRight}
      />
       <Image
        className=" absolute z-0 bottom-0 right-0"
        width={140}
        height={140}
        src={benefitsBottomRight}
      />
      <h2 className="text-center relative font-semibold text-[28px] md:text-[48px] text-white mb-[24px]">
        Üstünlüklər
      </h2>
      <div className="!z-20 w-full grid  grid-cols-1 md:grid-cols-3 gap-x-[46px] gap-y-[28px] px-[50px] md:px-[180px] pb-[50px]">
        {benefitsRow1.map((benefit, index) => (
          <BenefitCard
            desc={benefit.desc}
            number={benefit.number}
            index={index}
          />
        ))}
      </div>
      <div className="!z-20 w-full grid grid-cols-1 md:grid-cols-2 gap-x-[46px] gap-y-[28px] px-[50px] md:px-[340px] pb-[50px]">
        {benefitsRow2.map((benefit, index) => (
          <BenefitCard
            desc={benefit.desc}
            number={benefit.number}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
