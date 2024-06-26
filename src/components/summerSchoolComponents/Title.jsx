import React from "react";

const Title = ({text, icon}) => {
  return (
    <p className="flex text-medium text-[#0079E9] text-xl mb-[10px]">
      <img className="mr-1" src={icon} alt="icon.svg" />
      {text}
    </p>
  );
};

export default Title;
