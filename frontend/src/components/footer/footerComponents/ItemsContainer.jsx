import React from "react";
import { PRODUCTS, USECASES, COMPANY, BUSINESSES } from "./Menus";
import Item from "./Item";

function ItemsContainer() {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[36px] mt-[65px]  lg:gap-[200px] lg:mt-[65px] ">
      <Item Links={PRODUCTS} title="Products" />
      <Item Links={USECASES} title="Use Cases" />
      <Item Links={COMPANY} title="Company" />
      <Item Links={BUSINESSES} title="Businesses" />
    </div>
  );
}

export default ItemsContainer;
