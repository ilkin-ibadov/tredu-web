import chevron from "../../assets/icons/chevronDown.svg";
import { useEffect, useState } from "react";

const InputItem = ({
  inputLabel,
  inputName,
  placeholder,
  inputType,
  value,
  setValue,
  maxLength
}) => {
  const [selectedPrefix, setSelectedPrefix] = useState(0)
  const [inputValue, setInputValue] = useState("");
  const prefixData = [
    {
      title: "010",
      value: "10",
    },
    {
      title: "050",
      value: "50",
    },
    {
      title: "051",
      value: "51",
    },
    {
      title: "055",
      value: "55",
    },
    {
      title: "060",
      value: "60",
    },
    {
      title: "070",
      value: "70",
    },
    {
      title: "077",
      value: "77",
    },
    {
      title: "099",
      value: "99",
    },
  ];

  useEffect(() => {
    if (inputType === "tel") {
      setValue((prevState) => ({
        ...prevState,
        phone_number: `+994${selectedPrefix}${inputValue}`,
      }));
    }
  }, [selectedPrefix, inputValue]);

  return inputType === "tel" ? (
    <>
      <label htmlFor={inputLabel}>{inputName}</label>

      <div className="flex items-center mt-2 w-full h-full border border-[#D9D9D9] bg-white rounded-[10px] mb-[24px] overflow-hidden">
        <div className="h-full relative bg-yellow-400">
          <select
            className="h-full pl-4 pr-8 py-[13px] focus:outline-none appearance-none hover:cursor-pointer"
            value={selectedPrefix}
            onChange={(e) => {
              setSelectedPrefix(e.target.value);
            }}
          >
            <option value={0} disabled selected>Prefix</option>
            {prefixData.map((item) => (
              <option value={item.value}>{item.title}</option>
            ))}
          </select>
          <img
            className="pointer-events-none absolute right-0 top-[20px] pr-2"
            src={chevron}
            alt="chevron.svg"
          />
        </div>
        <input
          className="border-l-[1px] py-4 px-5 w-full h-full placeholder:text-black focus:outline-none"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          required
          type={inputType}
          placeholder={placeholder}
          maxLength={maxLength}

          
        />
      </div>
    </>
  ) : (
    <>
      <label htmlFor={inputLabel}>{inputName}</label>

      <input
        onChange={(e) => {
          setValue((prevState) => ({
            ...prevState,
            [inputLabel]: e.target.value,
          }));
        }}
        value={value[inputLabel]}
        required
        className="placeholder:text-black mt-2 py-4 px-5 w-full h-full border border-[#D9D9D9] w-full bg-white rounded-[10px] mb-[24px] focus:outline-none"
        type={inputType}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputItem;
