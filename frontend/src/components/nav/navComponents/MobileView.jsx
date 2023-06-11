import React, { useState } from "react";
import { Link } from "react-router-dom";
import { questionmark, arrowDown, arrowRight } from "../../../icons";
import { PRODUCTS, BUSINESSES, COMPANY, INFRASTRUCTURE, DEVELOPERS, USERS } from "../data";

const MobileView = () => {
  const initialState = {
    showProducts: false,
    showBusinesses: false,
    showCompany: false,
    showInfrastructure: false,
    showDevelopers: false,
    showUsers: false,
  };

  const [state, setState] = useState(initialState);

  const toggleSection = (section) => {
    setState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderSection = (section, items) => {
    return (
      <div>
  {items.map((item, index) => (
    <Link key={index} to={item.link}>
      <div className="flex flex-row w-fit h-[2.5rem] px-[2.625rem] items-center mt-[1.25rem]">
        <img
          src={item.image}
          alt=""
          className="w-[1.6437rem] h-[1.6437rem] mr-[0.9375rem]"
        />
        <h1
          className={`font-Jost font-medium text-s text-secondary-main leading-[1.4375rem] ${
            item.name.includes('Coming Soon') ? 'text-white-20' : ''
          }`}
        >
          {item.name}
        </h1>
      </div>
    </Link>
  ))}
</div>
    );
  };

  return (
    <>
      {/* Products */}
      <div className="flex items-center justify-between">
        <h1 className="font-Jost font-medium text-s text-secondary-main leading-[1.4375rem]">
          Products
        </h1>
        <img
          src={state.showProducts ? arrowDown : arrowRight}
          alt=""
          className="w-[1.25rem] h-[1.25rem] cursor-pointer"
          onClick={() => toggleSection("showProducts")}
        />
      </div>
      {state.showProducts && renderSection("showProducts", PRODUCTS)}

      {/* Businesses */}
      <div className="flex items-center justify-between mt-[1.25rem]">
        <h1 className="font-Jost font-medium text-s text-secondary-main leading-[1.4375rem]">
          Businesses
        </h1>
        <img
          src={state.showBusinesses ? arrowDown : arrowRight}
          alt=""
          className="w-[1.25rem] h-[1.25rem] cursor-pointer"
          onClick={() => toggleSection("showBusinesses")}
        />
      </div>
      {state.showBusinesses && renderSection("showBusinesses", BUSINESSES)}

      {/* Company */}
      <div className="flex items-center justify-between mt-[1.25rem]">
        <h1 className="font-Jost font-medium text-s text-secondary-main leading-[1.4375rem]">
          Company
        </h1>
        <img
          src={state.showCompany ? arrowDown : arrowRight}
          alt=""
          className="w-[1.25rem] h-[1.25rem] cursor-pointer"
          onClick={() => toggleSection("showCompany")}
        />
      </div>
      {state.showCompany && renderSection("showCompany", COMPANY)}

      {/* Infrastructure */}
      <div className="flex items-center justify-between mt-[1.25rem]">
        <h1 className="font-Jost font-medium text-s text-secondary-main leading-[1.4375rem]">
          Infrastructure
        </h1>
        <img
          src={state.showInfrastructure ? arrowDown : arrowRight}
          alt=""
          className="w-[1.25rem] h-[1.25rem] cursor-pointer"
          onClick={() => toggleSection("showInfrastructure")}
        />
      </div>
      {state.showInfrastructure && renderSection("showInfrastructure", INFRASTRUCTURE)}

      {/* Developers */}
      <div className="flex items-center justify-between mt-[1.25rem]">
        <h1 className="font-Jost font-medium text-s text-secondary-main leading-[1.4375rem]">
          Developers
        </h1>
        <img
          src={state.showDevelopers ? arrowDown : arrowRight}
          alt=""
          className="w-[1.25rem] h-[1.25rem] cursor-pointer"
          onClick={() => toggleSection("showDevelopers")}
        />
      </div>
      {state.showDevelopers && renderSection("showDevelopers", DEVELOPERS)}

      {/* Users */}
      <div className="flex items-center justify-between mt-[1.25rem]">
        <h1 className="font-Jost font-medium text-s text-secondary-main leading-[1.4375rem]">
          Users
        </h1>
        <img
          src={state.showUsers ? arrowDown : arrowRight}
          alt=""
          className="w-[1.25rem] h-[1.25rem] cursor-pointer"
          onClick={() => toggleSection("showUsers")}
        />
      </div>
      {state.showUsers && renderSection("showUsers", USERS)}

      {/* Create a free account */}
      <div className="flex flex-row items-center mt-[1.25rem]">
        <h1 className="rounded-[0.3125rem] bg-Rectangle justify-center items-center py-[0.625rem] px-[1.25rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-white-60">
          Create a free account
        </h1>
        <div className="ml-[1.25rem] rounded-[0.3125rem] flex flex-row items-center justify-center">
          <img src={questionmark} alt="" className="w-[1.25rem] h-[1.25rem]" />
          <h1 className="font-Jost not-italic text-s leading-[1.4375rem] text-center text-Rectangle ml-[0.75rem]">
            Speak to sales
          </h1>
        </div>
      </div>
    </>
  );
};

export default MobileView;
