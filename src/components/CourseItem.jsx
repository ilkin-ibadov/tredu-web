import Image from "next/image";
import location from "../assets/icons/location.svg";

const CourseItem = ({ course }) => {
  return (
    <div className="w-full flex max-w-[457px] shadow-[#e5e7eb_0px_0px_4px_4px] rounded-[18px] overflow-hidden">
      <div className="w-[183px] h-[233px] overflow-hidden relative">
        <Image
          className="rounded-[18px] w-[183px] h-[233px] object-cover"
          width={183}
          height={233}
          src={course.thumbnail}
        />
        <p className="absolute bottom-[10px] left-[10px] bg-white text-[#0B1875] font-medium text-[10px] py-[6px] px-[10px] rounded-full">
          {course.starting_price.split(".")[0]} ₼ başlayaraq
        </p>
        {/* <p className="top-0 right-0 bg-white">{course.rating}</p> */}
      </div>
      <div className="p-[20px]">
        <h3 className="text-[20px] font-semibold ml-[3px]">{course.title}</h3>
        <div className="flex items-center mt-[5px]">
          <Image
            className="w-[22px] h-[22px] mr-[3px]"
            width={22}
            height={22}
            src={location}
          />
          <p>{course.partner_network.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
