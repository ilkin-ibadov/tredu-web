import Image from "next/image";
import React from "react";

const GalleryItem = ({ src, setActiveImg }) => {
  return (
    <Image
      onClick={() => {
        setActiveImg(src);
      }}
      className="w-[140px] h-[105px] rounded-[4px]"
      src={src}
    />
  );
};

export default GalleryItem;
