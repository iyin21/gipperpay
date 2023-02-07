import React from "react";
import { PRODUCTS, USECASES, COMPANY, BUSINESSES } from "./Menus";
import Item from "./Item";

function ItemsContainer() {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[2.25rem] mt-[4.0625rem]  lg:gap-[12.5rem] ">
      <Item Links={PRODUCTS} title="Products" />
      <Item Links={USECASES} title="Use Cases" />
      <Item Links={COMPANY} title="Company" />
      <Item Links={BUSINESSES} title="Businesses" />
    </div>
  );
}

export default ItemsContainer;
