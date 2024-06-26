"use client";

import { useState, useEffect } from "react";
// import Footer from "../../components/summerSchoolComponents/footer/Footer";
// import NavbarDark from "../../components/summerSchoolComponents/navbar/NavbarDark";
import Banner from "@/images/banner.png";
import backgroundImage from "@/images/becomePartnerBg.png";
import info from "@/images/icons/info.svg";
import check from "@/images/icons/check.svg";
import typeIcon from "@/images/icons/type.svg";
import value from "@/images/icons/value.svg";
import ListItem from "../../components/summerSchoolComponents/ListItem";
import Title from "../../components/summerSchoolComponents/Title";
import img1 from "@/images/img1.png";
import img2 from "@/images/img2.png";
import img3 from "@/images/img3.png";
import img4 from "@/images/img4.png";
import loadinggif from "@/images/loading.gif";
import GalleryItem from "../../components/summerSchoolComponents/GalleryItem";
import InputItem from "../../components/summerSchoolComponents/InputItem";
import SelectItem from "../../components/summerSchoolComponents/SelectItem";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Slider from "react-slick";

import herocarousel1 from "@/images/herocarousel1.png";
import herocarousel2 from "@/images/herocarousel2.png";
import herocarousel3 from "@/images/herocarousel3.png";
import herocarousel4 from "@/images/herocarousel4.png";

import cardbg from "@/images/cardbg.png";

import infoWhite from "@/images/icons/infoWhite.svg";
import dernek from "@/images/icons/dernek.svg";
import dernekWhite from "@/images/icons/dernekWhite.svg";
import advantage from "@/images/icons/advantage.svg";
import advantageWhite from "@/images/icons/advantageWhite.svg";
import Footer from "@/components/Footer";

const SummerSchool = () => {
  const [activeImg, setActiveImg] = useState(img1);
  const [step, setStep] = useState(1);
  const [stepOneId, setStepOneId] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    child_first_name: "",
    child_last_name: "",
    email: "",
    phone_number: "",
  });
  const [page, setPage] = useState("form");
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] =
    useState(false);

  const typesOfActivities = [
    "Robototexnika",
    "Şahmat",
    "Futbol",
    "Basketbol",
    "İncəsənət",
  ];

  const values = [
    "Qidalanma",
    "Stolüstü oyunlar",
    "Əyləncəli master-klaslar",
    "İngilis dilli mühit",
    "Mühafizə və videomüşahidə sistemləri",
    "Peşəkar təlimçi və tərəfdaşlar şəbəkəsi",
    "Şəhərin mərkəzində yerləşən məkan",
  ];

  const gradeOptions = [
    {
      title: "Sinifi seçin",
      value: 0,
    },
    {
      title: 1,
      value: 1,
    },
    {
      title: 2,
      value: 2,
    },
    {
      title: 3,
      value: 3,
    },
    {
      title: 4,
      value: 4,
    },
    {
      title: 5,
      value: 5,
    },
    {
      title: 6,
      value: 6,
    },
    {
      title: 7,
      value: 7,
    },
    {
      title: 8,
      value: 8,
    },
  ];

  const sectorOptions = [
    {
      title: "Bölməni seçin",
      value: 0,
    },
    {
      title: "AZ",
      value: "aze",
    },

    {
      title: "EN",
      value: "eng",
    },
    {
      title: "RU",
      value: "rus",
    },
  ];

  const gallery = [img2, img3, img4];

  async function sendStepOneData() {
    const url = `https://api.tredu.io/api/summer-courses/`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        setStepOneId(data.id);
        setStep(2);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function sendStepTwoData() {
    const url = `https://api.tredu.io/api/summer-courses/${stepOneId}/`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        const isCouponValid = await validateCoupon();
        isCouponValid ? onSubmit(data.id, coupon) : onSubmit(data.id);
      }

      return response.ok;
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmit(id, coupon) {
    setLoading(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      firstName: form?.first_name,
      lastName: form?.last_name,
      email: form?.email,
      phone: form?.phone_number,
    });

    setForm((prevState) => ({
      ...prevState,
      id: id, // Include the id in the form data
    }));

    const url = `https://api.tredu.io/api/summer-courses/${id}/pay-neqsol/`;

    try {
      const response = coupon
        ? await fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ coupon: coupon }),
          })
        : await fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

      const data = await response.json();

      if (data?.transaction)
        window.location.href = data?.transaction?.payment_url;
    } catch (error) {
      alert(
        "Müraciətinizi qeydə alarkən problem yarandı. Zəhmət olmazsa səhifəni yeniləyib, yenidən yoxlayın."
      );
    } finally {
      setLoading(false);
    }
  }

  const validateFormStepOne = () => {
    const requiredFields = [
      { name: "first_name", label: "First Name" },
      { name: "last_name", label: "Last Name" },
      { name: "email", label: "Email" },
      { name: "phone_number", label: "Phone" },
    ];

    for (const fieldObj of requiredFields) {
      const fieldValue = form[fieldObj.name];
      if (!fieldValue) {
        alert(`Please fill ${fieldObj.label} input.`);
        return false;
      }
      if (fieldObj.name == "phone_number" && fieldValue.length !== 13) {
        alert(`Please enter a valid phone number.`);
        return false;
      }
      if (fieldObj.name === "email" && !validateEmail(fieldValue)) {
        alert(`Please enter a valid email address.`);
        return false;
      }
    }
    return true;
  };

   var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const validateFormStepTwo = () => {
    const requiredFields = [
      { name: "child_first_name", label: "Child First Name" },
      { name: "child_last_name", label: "Child Last Name" },
      { name: "school", label: "School" },
      { name: "grade", label: "Grade" },
      { name: "sector", label: "Sector" },
    ];

    for (const fieldObj of requiredFields) {
      const fieldValue = form[fieldObj.name];
      if (!fieldValue) {
        alert(`Please fill ${fieldObj.label} input.`);
        return false;
      }
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateCoupon = async () => {
    try {
      const response = await fetch(
        `https://api.tredu.io/api/coupons/${coupon}/`,
        {
          headers: {
            Accept: "application/json; version=v2",
            "Content-Type": "application/json",
          },
        }
      );

      return response.ok;
    } catch (error) {
      console.error(error);
    }
  };
  const [activeSection, setActiveSection] = useState("haqqinda");

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="">
      {/* <NavbarDark /> */}
      <Navbar />
      {page === "termsAndConditions" ? (
        <div className="mx-auto w-full md:max-w-[1000px]">
          <h1 className="mt-4 md:mt-[100px] text-center text-[24px] md:text-[32px] text-black">
            Qaydalar və şərtlər
          </h1>
          <div className="bg-[#FAFAFA] px-[14px] py-[14px] mt-[16px] md:px-[50px] md:py-[30px] md:mt-[35px] mb-[16px] rounded-[16px]">
            <p>
              Hörmətli Valideyn,
              <br />
              <br />
              Bu şərtlər (bundan sonra – form) “Tredu CO” MMC (VÖEN:1008241271)
              (bundan sonra – Platforma) tərəfindən keçirilən düşərgələrdə
              övladınız/övladlarınızın (bundan sonra – istifadəçi) düşərgələrdə
              iştirakı ilə əlaqdar sizinlə Platforma arasında olan münasibətləri
              tənzimləyir. Xidmətlərimizi əldə etmədən öncə formla tanış
              olmağınızı və formu təsdiqləməyinizi xahiş edirik. Form
              “Məlumatlar” hissəsində adları qeyd olunan şəxslə Platforma
              arasında bağlanılmış hesab olunacaq. <br />
              <br />
              XİDMƏTLƏRİMİZ <br /> Platforma əməkdaşlıq etdiyi təhsil
              müəssisələrində əməkdaşlıq etdiyi Partnyorların iştirakı ilə
              əlaqəda müxtəlif oyunlar, əyləncələr keçirərək uşaqların bilik və
              bacarıqlarını artırmağı qarşısına məqsəd qoyaraq düşərgələr həyata
              keçirir. Bu düşərgələrdə iştirak etmək tam könüllüdür.
              <br />
              <br />
              PARTNYORLARIMIZ <br /> Xidmətlər Platformanın əməkdaşlıq etdiyi
              üçüncü tərəf təchizatçılar tərəfindən həyata keçirilir. Üçüncü
              tərəf təchizatçılar bu xidmətləri uzunmüddətli təcrübələrinə
              əsaslanaraq, istifadəçilərin fiziki, mənəvi sağlamlığını və
              onların təhlükəsizliyini rəhbər tutaraq həyata keçirir.
              <br />
              <br />
              XİDMƏTLƏRİN ÖDƏNİŞLƏRİ
              <br />
              Düşərgədə iştirak edən hər istifadəçiyə görə tərəfinizdən 499 AZN
              (dörd yüz doxsan doqquz manat) məbləğində xidmət haqqı
              ödənilməlidir. Valideyn tərəfindən bir neçə istifadəçinin
              ödənişləri təmin edilə bilər. Bunun üçün hər istifadəçi üçün
              ayrıca form təsdiq edilməli və ya formun “məlumatlar” hissəsində
              bu istifadəçilərin məlumatları qeyd edilməlidir. Platforma
              tərəfindən təqdim edilən xidmətlərin dəyərinə Platformanın öz
              mülahizəsinə əsasən endirimlər tətbiq oluna bilər.
              <br />
              <br />
              ÖDƏNİŞ QAYDASI
              <br />
              Formu təsdiqlədikdən sonra açılan pəncərədə Valideyn bank kartının
              tələb olunan məlumatlarını qeyd edir. Daha sonra ona göndərilən
              OTP kod əsasında ödəniş həyata keçirilir. Ödənişin uğurlu olması
              qeyd olunduqdan sonra ödəniş uğurla icra olunmuş hesab olunur.
              <br />
              <br />
              ÖDƏNİŞİN GERİ QAYTARILMASI
              <br />
              İcra olunan ödənişlərin geri qaytarılması Azərbaycan Respublikası
              müvafiq qanunvericiliyi rəhbər tutularaq həyata keçirilir.
              <br />
              <br />
              TƏDBİRLİLİK VƏ MƏSULİYYƏTLİLİK
              <br />
              Platforma istifadəçilərin həm fiziki, həm mənəvi təhlükəsizliyini
              təmin etmək məqsədi ilə bütün lazımı tədbirləri görür. Xidmətlər
              həyata keçirilən zaman bütün xidmətlərin icrasına başdan sona
              qədər tərəfimizdən ciddi nəzarət olunur, istifadəçi üçün bu və ya
              digər mənada hər hansı təhlükəli hal aşkarlanarsa, dərhal müdaxilə
              edilir. Bununla belə, keçirilən xidmətlərdə bilik və bacarıqların
              tədris edilməsi, oyunların həyata keçirilməsinin Partnyorlarımız
              tərəfindən təmin edilməsinə görə Platforma bu hallara görə bu və
              ya digər formada məsuliyyət daşımır.
              <br />
              <br />
              FORMUN HÜQUQİ QÜVVƏSİ
              <br />
              Formu təsdiqləməzdən öncə adınızı, soyadınızı, e-mail ünvanınızı,
              övladınızın adını, soyadını daxil etməyiniz tələb olunur.
              Məlumatları daxil etdikdən sonra formu təsdiqləməlisiniz. Form
              təsdiqləndikdən sonra isə siz ödəniş panelinə
              yönləndiriləcəksiniz. Ödəniş panelində lazımı məlumatları daxil
              edib, ödənişi uğurla icra etdikdən sonra formu tam hüquqi və
              etibarlı təsdiqləmiş hesab olunursunuz. Formu təsdiq etdikdən
              sonra onu oxumamağa, tanış olmamağa, xəbərdar olmamağa dair
              istinad etmək və bu istinada əsasən Platformaya qarşı tələblər
              irəli sürmək hüququ istisna olunur. Form Platforma ilə valideynlər
              arasında düşərgələrin həyata keçirilməsi ilə əlaqədar hüquqi
              münasibətləri tənzimləyir və rəsmi, etibarlı, həqiqi müqavilə
              hesab olunur.
              <br />
              <br />
              DİGƏR ŞƏRTLƏR
              <br />
              Bu formun təsdiq edilməsi tərəflər arasında mülki hüquqi
              münasibətlərin yaradılmasına, o cümlədən onlar arasında müqavilə
              münasibətlərinin yaradılmasına bərabər tutulur. Formu təsdiq edən
              hər bir şəxs formun bütün müddəalarını qeyd-şərtsiz qəbul etmiş
              hesab olunur. İstifadəçinin formu təsdiq edərək xidmət haqqını
              ödədiyi tarix bu formun təsdiqləndiyi tarix hesab olunur. Form
              düşərgələr həyata keçirildikdən sonra qüvvədən düşəcəkdir. Bununla
              belə düşərgələrin yekunlaşması, formun qüvvədən düşməsi tərəflərin
              icra olunmamış öhdəliklərinin xitamına səbəb olmur. Tərəflər form
              üzrə öhdəliklərinin icrası ilə bağlı yaranan məsuliyyətlər və
              digər tələblər üçün hüquqi yollara müraciət etmək hüququnu özündə
              saxlayır. Bu form, formdan yaranan münasibətlər Azərbaycan
              Respublikasının qanunvericiliyi ilə tənzimlənir. Valideynin
              xidmətlər barədə iddiası, tələbi olarsa, bunu ilk öncə Platformaya
              bildirməlidir. 10 iş günü ərzində Platforma tərəfindən bu iddiaya,
              tələbə cavab verilməzsə, yalnız bundan sonra Valideyn iddiasını və
              ya tələbini Azərbaycan Respublikasının məhkəmələrində irəli sürə
              bilər.
            </p>
          </div>
          <button
            onClick={() => {
              setTermsAndConditionsAccepted((prevState) => !prevState);
            }}
            className="flex items-center gap-2 ml-2 md:ml-0 mb-[30px] md:mb-[100px]"
          >
            <div
              className={`w-5 h-5 flex items-center justify-center overflow-hidden border border-black rounded-[3px] ${
                termsAndConditionsAccepted ? "bg-[#0079E9]" : "bg-white"
              }`}
            >
              {termsAndConditionsAccepted && (
                <Image src={check} alt="check.svg" />
              )}
            </div>
            <div className="text-sm text-black underline">
              Accept all terms & conditions
            </div>
          </button>
          <div className="w-full flex justify-center">
            <button
              onClick={() => {
                setPage("form");
              }}
              className="bg-[#0079E9] py-[14px] px-[100px] text-white text-lg rounded-[12px] mb-6 md:mb-[60px]"
            >
              Geri
            </button>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <div className="w-full h-screen fixed top-0 left-0 bg-white flex items-center justify-center">
              <Image src={loadinggif} alt="loading.gif" />
            </div>
          ) :  (
            <div
              className="flex flex-col items-center md:p-0 "
              
            >
              <div className="bg-banner w-full flex flex-row md:gap-[52px] items-center py-[18px] md:py-[56px] px-[12px] md:px-[35px]">
                <div className="w-full pl-[12px] md:pl-[35px] h-full flex flex-col justify-between gap-[17px] md:gap-[66px] items-start">
                  <div className="">
                    <h2 className="font-[700] text-[14px] md:text-[30.54px] text-white">
                      Tredu <br /> və LANDAU School - dan
                    </h2>
                    <p className="text-white font-[400] text-[11px] md:text-[25px]">
                      dərnəklərlə dolu yay proqramı{" "}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      document.documentElement.style.scrollBehavior = "smooth";
                      window.scrollTo(
                        0,
                        document.querySelector("#form").getBoundingClientRect()
                          .top
                      );
                    }}
                    className="w-[100px] sm:w-auto text-[12px] md:text-[16px]  bg-[#FACB13] py-[8.5px] md:py-[12px] px-[7.5px] md:px-[22px]  z-50  text-white rounded-[12px]"
                  >
                    Müraciət et
                  </button>
                </div>
                <div className="max-w-[220px] md:max-w-[920px]">
                  {/* <Slider {...settings} className="">
                    <div className="px-[1px] md:px-[5px] focus:outline-none">
                      <Image
                        src={herocarousel1}
                        className="w-[71px] md:w-[220px] "
                        alt="carousel1"
                      />
                    </div>
                    <div className="px-[1px] md:px-[5px] focus:outline-none">
                      <Image
                        src={herocarousel2}
                        className="w-[71px] md:w-[220px] "
                        alt="carousel1"
                      />
                    </div>
                    <div className="px-[1px] md:px-[5px] focus:outline-none">
                      <Image
                        src={herocarousel3}
                        className="w-[71px] md:w-[220px] "
                        alt="carousel1"
                      />
                    </div>
                    <div className="px-[1px] md:px-[5px] focus:outline-none">
                      <Image
                        src={herocarousel4}
                        className="w-[71px] md:w-[220px] "
                        alt="carousel1"
                      />
                    </div>
                  </Slider> */}
                </div>
              </div>

              <div className="w-full px-[14px] flex flex-col md:flex-row my-[61px] gap-[57px] justify-center items-start">
                <div style={{
                backgroundImage: `url(${cardbg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition:"right",
                backgroundSize: "contain",
              }} className="bg-white  min-h-[345px] rounded-[12px] w-full md:w-[557px]  md:px-[14px] md:py-[30px] shadow-lg shadow-zinc-300">
                  <div className="pb-[20px] md:pb-[45px] px-[10px]">
                    <div className=" md:hidden flex justify-around mb-[15px]">
                      <button
                        onClick={() => toggleSection("haqqinda")}
                        className={`py-[6px] px-[10px] rounded-[4px] border border-solid border-[#0079E9] flex items-center justify-center ${
                          activeSection === "haqqinda"
                            ? "  bg-[#0079E9] text-white"
                            : "text-[#0079E9]"
                        }`}
                      >
                        <Title
                          text="Haqqında"
                          icon={activeSection === "haqqinda" ? infoWhite : info}
                        />
                      </button>
                      <button
                        onClick={() => toggleSection("dernekler")}
                        className={`py-[6px] px-[10px] rounded-[4px] border border-solid border-[#0079E9] flex items-center justify-center ${
                          activeSection === "dernekler"
                            ? " bg-[#0079E9] text-white"
                            : "text-[#0079E9]"
                        }`}
                      >
                        <Title
                          text="Dərnəklər"
                          icon={
                            activeSection === "dernekler" ? dernekWhite : dernek
                          }
                        />
                      </button>
                      <button
                        onClick={() => toggleSection("ustunlukler")}
                        className={`py-[6px] px-[10px] rounded-[4px] border border-solid border-[#0079E9] flex items-center justify-center ${
                          activeSection === "ustunlukler"
                            ? " bg-[#0079E9] text-white"
                            : "text-[#0079E9]"
                        }`}
                      >
                        <Title
                          text="Üstünlüklər"
                          icon={
                            activeSection === "ustunlukler"
                              ? advantageWhite
                              : advantage
                          }
                        />
                      </button>
                    </div>

                    <div className="mt-3 md:mt-0">
                      {/* Program hakkında section */}
                      <div
                        className={`${
                          activeSection === "haqqinda" ? "block" : "hidden"
                        } md:block`}
                      >
                        <p className="hidden md:block">
                          <Title
                            text="Haqqında"
                            icon={
                              info
                            }
                          />
                        </p>
                        <ListItem text="6-14 yaşlı şagirdlər üçün" />
                        <ListItem text="2 həftəlik proqramın müxtəlif başlama tarixləri:" />
                        <p className="ml-4 mb-2">
                          01.07.2024 – 14.07.2024 <br /> 15.07.2024 – 28.07.2024{" "}
                          <br /> 05.08.2024 – 18.08.2024
                        </p>
                        <ListItem text="Proqram bütöv gün olaraq təşkil olunur (09:00-18:00)" />
                        <ListItem text="Yay ərzində dərnəklərlə dolu 3 proqram təşkil olunacaq" />
                        <ListItem text="Məkan: Landau school (Gənclik korpusu)" />
                      </div>

                      {/* Dərnəklər and Üstünlüklər sections */}
                      <div className="flex flex-col md:flex-row gap-[45px] w-full mt-[40px]">
                        <div
                          className={`${
                            activeSection === "dernekler" ? "block" : "hidden"
                          } md:block w-full`}
                        >
                          <p className="hidden md:block">
                            <Title text="Dərnəklər" icon={dernek} />
                          </p>
                          {typesOfActivities.map((item, index) => (
                            <ListItem text={item} key={index} />
                          ))}
                        </div>

                        <div
                          className={`${
                            activeSection === "ustunlukler" ? "block" : "hidden"
                          } md:block w-full`}
                        >
                          <p className="hidden md:block">
                            <Title text="Üstünlüklər" icon={advantage} />
                          </p>
                          {values.map((item, index) => (
                            <ListItem text={item} key={index} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="form"
                  className="md:w-[460px]  p-[35px]   bg-white rounded-[12px] shadow-lg shadow-zinc-300  "
                >
                  <h3 className="text-[24px] font-bold text-[#374B9D] text-center">
                    Müraciət formu
                  </h3>
                  <div className="flex items-center justify-center mt-[5px] mb-[20px]">
                    <button
                      onClick={() => {
                        setStep(1);
                      }}
                      className={`text-xs w-5 h-5 rounded-full border ${
                        step === 1 ? "border-black" : "border-white"
                      } text-center`}
                    >
                      1
                    </button>
                    <p className="mx-1">-</p>
                    <button
                      onClick={() => {
                        if (validateFormStepOne()) {
                          setStep(2);
                        }
                      }}
                      className={`text-xs w-5 h-5 rounded-full border ${
                        step === 2 ? "border-black" : "border-white"
                      } text-center`}
                    >
                      2
                    </button>
                  </div>
                  {step === 1 ? (
                    <>
                      <p>Ad və soyadınız*</p>
                      <div className="w-full flex items-center">
                        <div className="w-full mr-2">
                          <InputItem
                            value={form}
                            setValue={setForm}
                            inputLabel="first_name"
                            placeholder="Adınızı qeyd edin"
                            inputType="text"
                          />
                        </div>
                        <InputItem
                          value={form}
                          setValue={setForm}
                          inputLabel="last_name"
                          placeholder="Soyadınızı qeyd edin"
                          inputType="text"
                        />
                      </div>

                      <InputItem
                        value={form}
                        setValue={setForm}
                        inputLabel="email"
                        inputName="Elektron poçt ünvanınız*"
                        placeholder="Elektron poçt ünvanınızı qeyd edin"
                        inputType="email"
                      />

                      <InputItem
                        value={form}
                        setValue={setForm}
                        inputLabel="phone_number"
                        inputName="Mobil nömrəniz*"
                        placeholder="Nömrənizi qeyd edin"
                        inputType="tel"
                        maxLength={7}
                      />

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (validateFormStepOne()) {
                            sendStepOneData();
                          }
                        }}
                        className="bg-[#0079E9] text-white text-lg font-light w-full py-[8px] rounded-[12px] mt-[24px] mb-[30px]"
                      >
                        Davam et
                      </button>
                    </>
                  ) : (
                    <>
                      <p>Övladınızın ad və soyadı*</p>
                      <div className="w-full flex items-center">
                        <div className="w-full mr-2">
                          <InputItem
                            value={form}
                            setValue={setForm}
                            inputLabel="child_first_name"
                            placeholder="Adını qeyd edin"
                            inputType="text"
                          />
                        </div>

                        <InputItem
                          value={form}
                          setValue={setForm}
                          inputLabel="child_last_name"
                          placeholder="Soyadını qeyd edin"
                          inputType="text"
                        />
                      </div>

                      <SelectItem
                        selectType="search"
                        value={form}
                        setValue={setForm}
                        selectLabel="school"
                        selectName="Övladınızın təhsil aldığı məktəb"
                        placeholder=""
                      />

                      <SelectItem
                        selectType="simple"
                        value={form}
                        setValue={setForm}
                        selectOptions={gradeOptions}
                        selectLabel="grade"
                        selectName="Övladınızın təhsil aldığı sinif*"
                      />
                      <SelectItem
                        selectType="simple"
                        value={form}
                        setValue={setForm}
                        selectLabel="sector"
                        selectName="Bölmə*"
                        selectOptions={sectorOptions}
                      />

                      <p>Kupon</p>
                      <input
                        onChange={(e) => {
                          setCoupon(e.target.value);
                        }}
                        value={coupon}
                        className="placeholder:text-black mt-2 py-4 px-5  border border-[#D9D9D9] w-full bg-white rounded-[10px] mb-[24px] focus:outline-none"
                        placeholder="Kupon əlavə edin"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setTermsAndConditionsAccepted(
                              (prevState) => !prevState
                            );
                          }}
                          className={`w-5 h-5 flex items-center justify-center overflow-hidden border border-black rounded-[3px] ${
                            termsAndConditionsAccepted
                              ? "bg-[#0079E9]"
                              : "bg-white"
                          }`}
                        >
                          {termsAndConditionsAccepted && (
                            <Image src={check} alt="check.svg" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            setPage("termsAndConditions");
                            window.scrollTo(0, 0);
                          }}
                          className="text-sm text-black underline"
                        >
                          Accept all terms & conditions
                        </button>
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (validateFormStepTwo()) {
                            if (termsAndConditionsAccepted) {
                              sendStepTwoData();
                            } else {
                              alert("Please accept all terms and conditions");
                            }
                          }
                        }}
                        className="bg-[#0079E9] text-white text-lg font-light w-full py-[8px] rounded-[12px] mt-[24px] mb-[30px]"
                      >
                        Tamamla
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}


        </>
      )}

      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default SummerSchool;
