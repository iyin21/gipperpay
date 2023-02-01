import React from "react";
import { arrowupright } from "../../../icons/index";

function Item({ Links, title }) {
  return (
    <ul>
      <h1 className="font-Jost not-italic font-medium text-sm leading-[27px] ">
        {title}
      </h1>
      {Links.map((link) => (
        <li
          className="  flex flex-row items-center lg:pt-[15px] font-Jost text not-italic font-regular text-xs leading-[23px] "
          key={link.name}
        >
          <a href={link.link}>{link.name}</a>
          <img
            src={arrowupright}
            alt=""
            className="lg:w-[15px] lg:h-[15px] w-[7.5px] h-[7.5px] "
          />
        </li>
      ))}
    </ul>
  );
}

export default Item;
