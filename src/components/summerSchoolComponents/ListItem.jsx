import React from "react";
import list from "../../assets/icons/list.svg";

const ListItem = ({text}) => {
  return (
    <p className="text-black text-base flex">
      <img className="mr-1" src={list} alt="list.svg" />
      {text}
    </p>
  );
};

export default ListItem;
