import Image from "next/image";
import React from "react";

const Title = ({text, icon}) => {
  return (
    <span className="flex text-medium text-[#0079E9] text-xl mb-[10px]">
      <Image className="mr-1" src={icon} alt="icon.svg" />
      {text}
    </span>
  );
};

export default Title;
