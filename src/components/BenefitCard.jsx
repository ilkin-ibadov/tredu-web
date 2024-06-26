import React from "react";

const BenefitCard = ({ desc, number, index }) => {
  return (
    <div className={`z-50 bg-white p-[32px] flex flex-col gap-[16px] rounded-[8px]`}>
      <h3 className="bg-[rgb(255,221,45)] text-[37px] text-[#374B9D] w-[80px] h-[80px] rounded-full flex items-center justify-center font-semibold">
        {number}
      </h3>
      <p className="text-[16px] text-[#737373]">{desc}</p>
    </div>
  );
};

export default BenefitCard;
