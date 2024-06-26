"use client";

import { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
import CategoryItem from "./CategoryItem";

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

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-center text-[44px] text-[#374B9D] font-semibold">
        Populyar kurslar
      </h2>
      <div className="flex items-center gap-[16px] mt-[24px]">
        {categories.map((category) => (
          <CategoryItem
            name={category.name}
            slug={category.slug}
            logo={category.logo}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <div className="w-full px-[100px] grid grid-cols-3 gap-[24px] mt-[32px]">
        {courses.length ? (
          courses.map((course) => <CourseItem course={course} />)
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
