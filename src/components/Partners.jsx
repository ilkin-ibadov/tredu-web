import Image from "next/image";

const Partners = async () => {
  const response = await fetch("https://api.tredu.io/api/partner-networks/?page_size=7");
  const partners = await response.json();

  return (
    <div className="pt-[72px] pb-[140px] md:px-[220px]">
      <h2 className="text-[28px]  md:text-[48px] text-[#1F1F1F] text-center font-semibold">
        Partnyorlar
      </h2>
      <div className=" overflow-scroll flex items-center gap-[40px]  md:gap-[80px] mt-[100px]">
        {partners.results.map((partner) => (
          <Image
            className="w-[120px] h-[60px] object-scale-down"
            width={100}
            height={40}
            src={partner.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
