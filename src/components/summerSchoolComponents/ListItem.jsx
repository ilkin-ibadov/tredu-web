import React from "react";
import list from "@/images/icons/list.svg";
import Image from "next/image";

const ListItem = ({text}) => {
  return (
    <p className="text-black text-base flex">
      <Image className="mr-1" src={list} alt="list.svg" />
      {text}
    </p>
  );
};

export default ListItem;
