import { useState } from "react";
import LogoWhite from "../../../assets/logos/logo.svg";
import chevronUp from "../../../assets/icons/chevronWhite1.svg";
import chevronRight from "../../../assets/icons/chevronWhite2.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import MailchimpFormFooter from "./MailchimpFormFooter";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = ({ scrollToSection }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="px-4 lg:px-[52px] pt-5 sm:pt-[72px] sm:pb-[48px] bg-[#16144A]">
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between">
          <>
            <p className="text-[#FFFF] sm:hidden text-center w-full text-sm py-[8px] lg:text-base font-montserrat">
              © 2023 Tredu. All rights reserved.
            </p>
            <div className="w-full sm:w-fit sm:max-w-[200px] lg:max-w-[350px] flex items-center mt-[25px] sm:mt-[0px] justify-between sm:block">
              <img
                className="sm:mb-5 w-[95px] sm:w-fit"
                src={LogoWhite}
                alt="logo.svg"
              />
              <p className="hidden sm:block text-sm lg:text-base font-montserrat text-[#FFFF] mb-5">
                Empower Your Journey: Explore, enroll, excel
              </p>
              <div className="flex items-center gap-[25px] sm:mb-[32px]">
                {/* <a href="#">
                  <img src={X} alt="x.svg" />
                </a> */}
                <a
                  target="_blank"
                  href="https://www.facebook.com/treduapp?mibextid=LQQJ4d"
                >
                  <img src={Facebook} alt="facebook.svg" />
                </a>
                <a
                  target="_blank"
                  href="https://instagram.com/treduapp?igshid=MzRlODBiNWFlZA=="
                >
                  <img src={Instagram} alt="instagram.svg" />
                </a>
                {/* <a href="#">
                  <img src={Youtube} alt="youtube.svg" />
                </a> */}
              </div>
              <p className="text-[#FFFF] hidden sm:block text-sm lg:text-base font-montserrat">
                © 2023 Tredu. All rights reserved.
              </p>
            </div>
          </>
          <div className="flex flex-col lg:flex-row w-full sm:w-fit sm:gap-[20px] lg:gap-[80px]">
            <div
              className={`flex flex-col gap-[12px] w-full sm:w-fit ${
                aboutOpen
                  ? "border-b border-zinc-200 sm:border-none pb-2 sm:pb-[0px]"
                  : null
              }`}
            >
              <div
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                }}
                className="flex items-center justify-between"
              >
                <p className="font-montserrat w-full sm:w-fit text-sm py-2 sm:py-[0px] lg:text-base text-white font-semibold sm:mb-2">
                  About
                </p>
                {aboutOpen ? (
                  <img
                    className="sm:hidden"
                    src={chevronUp}
                    alt="chevronUp.svg"
                  />
                ) : (
                  <img
                    className="sm:hidden"
                    src={chevronRight}
                    alt="chevronRight.svg"
                  />
                )}
              </div>
              <div
                className={`${
                  !aboutOpen ? "hidden" : "flex"
                } sm:flex flex-col gap-[12px]`}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    try {
                      scrollToSection("home");
                    } catch (error) {
                      navigate("/#", {
                        state: { id: "home", path: location.pathname },
                      });
                    }
                  }}
                  href="#"
                  className="text-xs text-start lg:text-sm font-montserrat font-medium text-[#FFFF]"
                >
                  Home
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    try {
                      scrollToSection("howItWorks");
                    } catch (error) {
                      navigate("/#", {
                        state: { id: "howItWorks", path: location.pathname },
                      });
                    }
                  }}
                  href="#"
                  className="text-xs  text-start lg:text-sm font-montserrat font-medium text-[#FFFF]"
                >
                  How it works
                </button>
                <button
                  onClick={() => {
                    try {
                      scrollToSection("courses");
                    } catch (error) {
                      navigate("/#", {
                        state: { id: "courses", path: location.pathname },
                      });
                    }
                  }}
                  href="#"
                  className="text-xs  text-start lg:text-sm font-montserrat font-medium text-[#FFFF]"
                >
                  Courses
                </button>
                {/* <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("partners");
                  }}
                  href="#"
                  className="text-xs lg:text-sm font-montserrat font-medium text-[#FFFF]"
                >
                  Partners
                </a> */}
              </div>
            </div>
            <div className="flex flex-col gap-[12px] w-full sm:w-fit">
              <div
                onClick={() => {
                  setContactOpen(!contactOpen);
                }}
                className="flex items-center justify-between"
              >
                <p className="font-montserrat text-sm lg:text-base text-white py-2 sm:py-[0px] font-semibold sm:mb-2">
                  Contact us
                </p>
                {contactOpen ? (
                  <img
                    className="sm:hidden"
                    src={chevronUp}
                    alt="chevronUp.svg"
                  />
                ) : (
                  <img
                    className="sm:hidden"
                    src={chevronRight}
                    alt="chevronRight.svg"
                  />
                )}
              </div>

              <div
                className={`${
                  !contactOpen ? "hidden" : "flex"
                } sm:flex flex-col gap-[12px]`}
              >
                <a
                  href="mailto:support@tredu.io"
                  className="text-xs lg:text-sm font-montserrat font-medium text-[#FFFF]"
                >
                  support@tredu.io
                </a>
                <a
                  href="tel:*7788"
                  className="text-xs lg:text-sm font-montserrat font-medium text-[#FFFF]"
                >
                  *7788
                </a>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/SABAH.HUB+Innovation+Center/@40.3771707,49.8575483,17z/data=!3m1!4b1!4m6!3m5!1s0x40307def69a5210d:0xa677620af3c7e1f9!8m2!3d40.3771666!4d49.8601232!16s%2Fg%2F11pv2g462x?entry=ttu"
                  className="text-xs lg:text-sm font-montserrat font-medium text-[#FFFF]"
                >
                  Uzeyir Hajibeyli 57
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-fit sm:max-w-[480px] bg-[#EAE9FF] mb-2 sm:mb-[0px] px-[32px] py-[20px] lg:py-[28px] lg:px-[46px] rounded-[12px]">
            <h2 className="font-montserrat font-semibold text-lg text-center lg:text-[32px] text-black mb-[8px] sm:mb-5">
              Join our Newsletter
            </h2>
            <MailchimpFormFooter
              newsletterEmailStyle={{
                inputStyle: {
                  bgColor: "bg-[#F8F8F8]",
                  border: "focus:outline-none",
                  borderRadius: "rounded-l-xl",
                  placeholderColor: "",
                  padding: "py-[8px] px-[16px]",
                },
                buttonStyle: {
                  bgColor: "bg-[#077ce9]",
                  border: "",
                  borderRadius: "rounded-r-xl",
                  fontColor: "text-white",
                  fontSize: "text-base",
                  fontWeight: "font-semibold font-montserrat",
                  padding: "py-[8px] px-[16px]",
                },
                margin: "",
                gap: "",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
