'use client';

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = async () => {
  const response = await fetch("https://api.tredu.io/api/partner-networks/?page_size=7");
  const partners = await response.json();

    const settings = {
        centerMode: false,
        dots: false,
        infinite: false,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    infinite: true,
                    centerMode: false,
                    centerPadding: '0px'
                },
            },
        ],
    };

  return (
      <div className="sm:pt-[72px] pt-8 sm:pb-[140px] pb-4 md:px-[220px]">
          <h2 className="text-[28px]  md:text-[48px] text-[#1F1F1F] text-center font-semibold">
              Partnyorlar
          </h2>
          {/*<div className=" overflow-scroll flex items-center gap-[40px]  md:gap-[80px] mt-[100px]">*/}
          {/*    {partners.results.map((partner) => (*/}
          {/*        <Image*/}
          {/*            className="w-[120px] h-[60px] object-scale-down"*/}
          {/*            width={100}*/}
          {/*            height={40}*/}
          {/*            src={partner.logo}*/}
          {/*        />*/}
          {/*    ))}*/}
          {/*</div>*/}
          <div className="block w-full sm:px-0 sm:mt-10">
              <Slider {...settings} className="slick-slide-centered h-full">
                  {partners.results.map((partner) => {
                      return (
                          <div key={partner.logo}>
                              <Image
                                  className="w-[120px] h-[60px] object-scale-down"
                                  width={100}
                                  height={40}
                                  src={partner.logo}
                              />
                          </div>
                      );
                  })}
              </Slider>
          </div>
      </div>
  );
};

export default Partners;
