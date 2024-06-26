import React from "react";
import NavbarDark from "../navbar/NavbarDark";
import Footer from "../footer/Footer";
import decline from "../assets/decline.svg";
import backgroundImage from "../assets/becomePartnerBg.png";


const PaymentDecline = () => {
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
          <img src={decline} alt="decline.svg" />
          <h3 className="text-[24px] text-[#374B9D] text-center font-bold">
          Uğursuz əməliyyat
          </h3>
          <p className="text-black text-base text-center mt-2 mb-8">
          Ödənişdə xəta. Yenidən yoxlayın
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentDecline;
