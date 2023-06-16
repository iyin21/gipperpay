import React from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export const datas = [
  {
    linkTitle: "Personal profile",
  },
  {
    linkTitle: "Business Details",
  },
  {
    linkTitle: "Verifications",
  },
  {
    linkTitle: "Security",
  },
];
function Tab({ activeLink, setActiveLink }) {
  // console.log("Current settings tab active link is: ", activeLink);
  const handleActiveLink = (i) => {
    setActiveLink(i);
  };

  return (
    <div className=" lg:w-[43.75rem] lg:flex lg:flex-row  ">
      {datas.map((link, i) => (
        <div
          className={`w-full flex lg:justify-center justify-between  lg:border-b-2 lg:border-gray-200 items-center  py-4 cursor-pointer font-regular ${
            activeLink === i
              ? "text-red-500 lg:border-red-500 "
              : "text-white-30"
          }`}
          key={i}
          onClick={() => handleActiveLink(i)}
        >
          <span className="text-s font-regular">{link.linkTitle}</span>
          {activeLink === i ? (
            <FiChevronDown className=" lg:hidden " />
          ) : (
            <FiChevronRight className=" lg:hidden " />
          )}
        </div>
      ))}
    </div>
  );
}

export default Tab;
