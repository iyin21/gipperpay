import React from "react";
import { BsChevronDown } from "react-icons/bs";
const CustomSelect = (props) => {
  const { value, handleChange, arrayItems } = props;
  return (
    <div className="relative lg:inline-block">
      <select
        className="appearance-none w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5 flex gap-3 items-center"
        value={value}
        onChange={handleChange}
        name="country"
      >
        {arrayItems.map((item, index) => (
          <option value={item.id} key={index} className="w-[20rem]">
            {item}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <BsChevronDown size={10} />
      </div>
    </div>
  );
};

export default CustomSelect;
