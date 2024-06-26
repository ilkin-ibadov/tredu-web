import React from "react";
import NavbarDark from "../navbar/NavbarDark";
import Footer from "../footer/Footer";
import success from "@/images/success.svg";
import backgroundImage from "@/images/becomePartnerBg.png";
import Image from "next/image";


const PaymentSuccess = () => {
  return (
    <>
      <NavbarDark />
      <div
        className="flex justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sm:max-w-[540px] h-[600px] sm:h-fit bg-white rounded-[12px] px-[40px] py-[20px] sm:shadow-md sm:shadow-zinc-300 sm:my-[70px]">
          <Image src={success} alt="success.svg" />
          <h3 className="text-[24px] text-[#374B9D] text-center font-bold">
            Ödəniş uğurla tamamlandı
          </h3>
          <p className="text-black text-base text-center mt-2 mb-8">
            Komandamız tərəfindən sizinlə əlaqə saxlanılacaq
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
