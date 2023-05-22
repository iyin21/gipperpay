import React from "react";
import { arrowupright } from "../../../icons/index";
import { Link } from "react-router-dom";

function Item({ Links, title }) {
  return (
    <ul>
      <h1 className="font-Jost not-italic font-medium text-sm leading-[1.6875rem] ">
        {title}
      </h1>
      {Links.map((link) => (
        <li
          className="  flex flex-row items-center lg:pt-[0.9375rem] font-Jost text not-italic font-regular text-xs leading-[1.4375rem] "
          key={link.name}
        >
          <Link to={link.link}>{link.name}</Link>
          <img
            src={arrowupright}
            alt=""
            className="lg:w-[0.9375rem] lg:h-[0.9375rem] w-[0.46875rem] h-[0.46875rem] "
          />
        </li>
      ))}
    </ul>
  );
}

export default Item;
