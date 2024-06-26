import { useState, useEffect } from "react";
import chevron from "../../assets/icons/chevronDown.svg";
import chevronUp from "../../assets/icons/chevronUp.svg";
import Image from "next/image";

const SelectItem = ({
  selectLabel,
  selectName,
  selectType,
  value,
  setValue,
  selectOptions,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [schoolData, setSchoolData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getSchoolData = async () => {
    try {
      const response = await fetch(
        `https://api.tredu.io/api/schools/?page_size=1000`
      );
      if (response.ok) {
        const jsonData = await response.json();

        const formattedItems = jsonData.results.map((item) => ({
          title: item?.name,
          value: item?.id,
        }));

        const allItems = [
          { title: "Məktəbi qeyd edin", value: 0 },
          ...formattedItems,
        ];

        setSchoolData(allItems);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchResults = async () => {
    try {
      const response = await fetch(
        `https://api.tredu.io/api/schools/?page_size=1000&search=${searchTerm}`
      );
      if (response.ok) {
        const jsonData = await response.json();

        const formattedItems = jsonData.results.map((item) => ({
          title: item?.name,
          value: item?.id,
        }));

        setSearchResults(formattedItems);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const RenderItem = ({ item }) => {
    return (
      <div
        className={`hover:cursor-pointer ${
          value === item.value ? "bg-[#0079E9] rounded-[8px]" : ""
        } px-[16px] py-[8px]`}
        key={item.value}
        onClick={(e) => {
          e.stopPropagation();
          setValue((prevState) => ({
            ...prevState,
            school: item.value,
          }));
          setDropdownOpen(false);
        }}
      >
        <p
          className={`${
            value === item.value ? "text-black" : "text-[#757575]"
          } text-base font-serrat-medium ${item.value === 0 && "hidden"}`}
        >
          {item.title}
        </p>
      </div>
    );
  };

  useEffect(() => {
    getSchoolData();
  }, []);

  useEffect(() => {
    getSearchResults();
  }, [searchTerm]);

  return selectType === "simple" ? (
    <>
      <label htmlFor={selectLabel}>{selectName}</label>
      <div className="relative mt-2 w-full h-full border border-[#D9D9D9] w-full bg-white rounded-[10px] mb-[24px] focus:outline-none overflow-hidden">
        <select
          onChange={(e) => {
            setValue((prevState) => ({
              ...prevState,
              [selectLabel]: e.target.value,
            }));
          }}
          value={value[selectLabel]}
          className="w-full h-full focus:outline-none py-4 px-5 appearance-none hover:cursor-pointer"
        >
          {selectOptions?.map((option) => (
            <option
              unselectable={option.value === 0 ? true : false}
              value={option.value}
            >
              {option.title}
            </option>
          ))}
        </select>
        <Image
          className="absolute right-4 top-[24px] pointer-events-none"
          src={chevron}
          alt="chevron.svg"
        />
      </div>
    </>
  ) : (
    <>
      <label htmlFor={selectLabel}>{selectName}</label>
      <div
        onClick={() => {
          setDropdownOpen((prevState) => !prevState);
          setSearchTerm("");
        }}
        className={`w-full bg-white border border-[#D9D9D9] rounded-[10px] mb-[24px] mt-2`}
      >
        {!dropdownOpen ? (
          <div className="relative">
            <p className="text-black text-base font-serrat-medium p-[16px]">
            {schoolData[value.school]?.title??
                "Məktəbi qeyd edin "}
            </p>
            <Image
              className="absolute right-4 top-[24px] pointer-events-none"
              src={chevron}
              alt="chevron.svg"
            />
          </div>
        ) : (
          <div className="w-full pb-4">
            <div className="relative border-b border-zinc-100">
              <p className="text-black text-base font-serrat-medium p-[16px]">
                {schoolData[value.school]?.title}
              </p>
              <Image
                className="absolute right-4 top-[24px] pointer-events-none"
                src={chevronUp}
                alt="chevron.svg"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2">
              <input
                placeholder="Məktəb axtar..."
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="w-full text-black border border-zinc-300 h-[40px] pl-4 rounded-[8px]"
              />
            </div>

            <div className="w-full h-[150px] p-[8px] overflow-y-scroll">
              {searchResults.length ? (
                searchResults.map((item) => <RenderItem item={item} />)
              ) : schoolData.length ? (
                schoolData.map((item) => <RenderItem item={item} />)
              ) : searchTerm && !searchResults.length ? (
                <p className="text-zinc-600 text-sm text-center">
                  {t("attributes.schoolNotFound")}
                </p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectItem;
