import Image from "next/image";
import subscribe from "../assets/images/subscribe.png";
import subscribeDesktop from "../assets/images/subscribe-desktop.png";
import subscribeLeft from "../assets/images/subscribeLeft.svg";
import subscribeRight from "../assets/images/subscribeRight.svg";

const Subscribe = () => {
  return (
    <div className="w-full pb-9 sm:pb-0 px-[28px] md:px-[200px] pt-[80px] bg-[#2A5EE4] flex sm:flex-row flex-col items-center sm:gap-[140px] relative">
      <Image
        className="w-[80px] absolute left-0 top-[100px]"
        width={130}
        height={190}
        src={subscribeLeft}
      />
      <Image
        className="w-[80px] absolute right-0 top-[100px]"
        width={130}
        height={190}
        src={subscribeRight}
      />
      <Image
        className="w-[300px] object-scale-down hidden sm:block"
        width={300}
        height={620}
        src={subscribe}
      />
        <Image
            className="w-[300px] object-scale-down sm:hidden block"
            width={300}
            height={620}
            src={subscribeDesktop}
        />
      <div className="max-w-[440px] w-full">
        <h3 className="text-[32px] md:text-[40px] text-white font-semibold">Abunə ol</h3>
        <p className="text-[16px] text-[#FBFBFB] mt-[16px] mb-[40px]">
          Tredu haqqında daima yeniliklərdən xəbərdar olmaq, yeni partnyor və
          kursları qaçırmamaq üçün xəbər lentamıza abunə ol
        </p>
        <div className="relative bg-white w-fit rounded-[8px] overflow-hidden">
          <input
            className="sm:w-[440px] w-[319px] py-[14px] px-[24px]"
            placeholder="E-mailini qeyd edin"
            type="email"
          />
          <button className="absolute text-[12px] font-bold right-[5px] top-[3px] bg-[#FFDD2D] py-[14px] px-[35px] rounded-full">
            Abunə ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
