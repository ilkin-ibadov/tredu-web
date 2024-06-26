import Image from "next/image";
import React from "react";

const SectionTwoItem = ({ item }) => {
  const { logo, number, title } = item;

  return (
    <div className="w-[200px] flex flex-col items-center">
      <Image
        className="h-[60px] w-[60px] p-[10px] rounded-full shadow-lg shadow-zinc-300"
        src={logo}
      />
      <h3 className="text-[40px] font-bold text-[#1F1F1F] mt-[30px]">
        {number}
      </h3>
      <p className="text-[24px] font-medium text-[#1F1F1F]">{title}</p>
    </div>
  );
};

export default SectionTwoItem;
