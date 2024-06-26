import SectionOne from "@/components/SectionOne";
import PopularCourses from "@/components/PopularCourses";
import SectionTwo from "@/components/SectionTwo";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import { Commissioner } from "next/font/google";

const commissioner = Commissioner({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`w-full max-w-[1440px] mx-auto ${commissioner.className}`}>
      <SectionOne />

      <SectionTwo />

      <PopularCourses />

      <Benefits />

      <Partners />

      <Subscribe />

      <Footer />
    </main>
  );
}
