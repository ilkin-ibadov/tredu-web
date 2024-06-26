import Image from "next/image";

const CategoryItem = ({ name, slug, logo, setSelectedCategory }) => {
  return (
    <button
      onClick={() => {
        setSelectedCategory(slug);
      }}
      className="flex items-center border border-[#D0E8FF] p-[16px] shadow shadow-zinc-200 rounded-[12px] gap-[4px]"
    >
      <Image width={20} height={20} src={logo} />
      <p>{name}</p>
    </button>
  );
};

export default CategoryItem;
