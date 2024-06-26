"use client";

import { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
import CategoryItem from "./CategoryItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    try {
      const url = selectedCategory
        ? `https://api.tredu.io/api/courses/?page_size=${
            seeMore ? 9 : 3
          }&category_slug=${selectedCategory}`
        : `https://api.tredu.io/api/courses/?page_size=${seeMore ? 9 : 3}`;
      const getCourses = async () => {
        const response = await fetch(url);
        const courses = await response.json();
        setCourses(courses.results);
      };
      getCourses();
    } catch (error) {
      console.error(error);
    }
  }, [seeMore, selectedCategory]);

  useEffect(() => {
    try {
      const getCategories = async () => {
        const response = await fetch(`https://api.tredu.io/api/categories/`);
        const categories = await response.json();
        setCategories(categories.results);
      };
      getCategories();
    } catch (error) {
      console.error(error);
    }
  }, []);

    const settings = {
        centerMode: false,
        dots: false,
        infinite: false,
        speed: 2000,
        slidesToShow: 1,
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
      <div className="w-full flex flex-col items-center gap-3 sm:gap-0">
          <h2 className="text-center text-[28px] md:text-[44px] text-[#374B9D] font-semibold">
              Populyar kurslar
          </h2>
          <div className="hidden sm:flex overflow-scroll items-center px-[32px] gap-[16px] mt-[24px]">
              {categories.map((category) => (
                  <CategoryItem
                      key={category.id}
                      name={category.name}
                      slug={category.slug}
                      logo={category.logo}
                      setSelectedCategory={setSelectedCategory}
                  />
              ))}
          </div>
          <div className="sm:hidden block h-[60px] w-full sm:h-[400px] sm:px-0">
              <Slider {...settings} className="slick-slide-centered h-full">
                  {categories.map((category) => {
                      return (
                          <div key={category.title}>
                              <CategoryItem
                                  key={category.id}
                                  name={category.name}
                                  slug={category.slug}
                                  logo={category.logo}
                                  setSelectedCategory={setSelectedCategory}
                              />
                          </div>
                      );
                  })}
              </Slider>
          </div>
          <div className="w-full sm:px-[100px] px-[20px] grid sm:grid-cols-3 gap-[24px] mt-[32px]">
              {courses.length ? (
                  courses.map((course) => <CourseItem key={course.id} course={course}/>)
              ) : (
                  <p className="text-center col-span-3">Kurs tapılmadı</p>
              )}
          </div>
          <button
              onClick={() => {
                  setSeeMore((prevState) => !prevState);
              }}
              className="text-[#374B9D] text-[24px] underline mt-[28px]"
          >
              Daha {!seeMore ? "çox" : "az"}
          </button>
      </div>
  );
};

export default PopularCourses;
