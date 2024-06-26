import React from "react";

const GalleryItem = ({ src, setActiveImg }) => {
  return (
    <img
      onClick={() => {
        setActiveImg(src);
      }}
      className="w-[140px] h-[105px] rounded-[4px]"
      src={src}
    />
  );
};

export default GalleryItem;
