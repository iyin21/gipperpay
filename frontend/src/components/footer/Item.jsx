import React from "react";
import { arrowupright } from "../../icons";

function Item({ Links, title }) {
  return (
    <ul>
      <h1 className="font-Jost not-italic font-medium lg:text-sm lg:leading-[27px] ">
        {title}
      </h1>
      {Links.map((link) => (
        <li
          className="  flex flex-row items-center lg:pt-[15px] font-Jost text not-italic font-regular lg:text-xs lg:leading-[23px] "
          key={link.name}
        >
          <a href={link.link}>{link.name}</a>
          <img src={arrowupright} alt="" className="lg:w-[15px] lg:h-[15px] " />
        </li>
      ))}
    </ul>
  );
}

export default Item;
