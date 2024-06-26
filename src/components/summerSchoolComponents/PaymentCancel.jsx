import React from "react";
import NavbarDark from "../navbar/NavbarDark";
import Footer from "../footer/Footer";
import cancel from "@/images/cancel.svg";
import backgroundImage from "@/images/becomePartnerBg.png";
import Image from "next/image";


const PaymentCancel = () => {
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
          <Image src={cancel} alt="cancel.svg" />
          <h3 className="text-[24px] text-[#374B9D] text-center font-bold">
          Ödəniş geri qaytarılacaq
          </h3>
          <p className="text-black text-base text-center mt-2 mb-8">
          İstənilən halda bizimlə (*7788) və ya bankınızla əlaqə saxlayın
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentCancel;
