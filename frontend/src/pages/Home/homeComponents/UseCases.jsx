import React from "react";

//icons
import { mark } from "../../../icons";

function UseCases() {
  return (
    <div className=" lg:w-[74.9375rem] lg:m-auto p-[0.9375rem] lg:p-[0]  ">
      <h1 className=" font-Jost not-italic font-regular text-sm  leading-[1.6875rem] items-center text-center  lg:mt-[4.8125rem] ">
        Use Cases
      </h1>
      <h1 className=" font-Jost not-italic font-big text-l  leading-[2.5rem] items-center  lg:mt-[1.25rem] text-center ">
        Who can use Gipperpay?
      </h1>

      <div className=" lg:grid lg:grid-cols-3 lg:mt-[2.5rem] lg:mx-[7.5rem] p-[0.9375rem] lg:p-[0]  ">
        <div className="w-[25rem] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
          <img
            src={mark}
            alt=""
            className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
          />
          <div className="items-start ">
            <h1 className="w-[6.4375rem] h-[1.6875rem] font-Jost font-big text-sm leading-[1.6875rem]  text-Rectangle ">
              Startup
            </h1>
            <h1 className="w-[12.875rem] h-[2.375rem] mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
              High-ranked start-ups use gipperpay API to accept crypto payment,
              letting users be able to pay with crypto
            </h1>
          </div>
        </div>
        <div className="w-[25rem] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
          <img
            src={mark}
            alt=""
            className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
          />
          <div className="items-start ">
            <h1 className="w-[6.4375rem] h-[1.6875rem] font-Jost font-big text-sm leading-[1.6875rem]  text-Rectangle ">
              E-commerce
            </h1>
            <h1 className="w-[12.875rem] h-[2.375rem] mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
              Put your business across borders by using our e-commerce
              storefront to sell to people around the world with ease.
            </h1>
          </div>
        </div>
        <div className="w-[25rem] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
          <img
            src={mark}
            alt=""
            className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
          />
          <div className="items-start ">
            <h1 className="w-[6.4375rem] h-[1.6875rem] font-Jost font-big text-sm leading-[1.6875rem]  text-Rectangle ">
              Freelancers
            </h1>
            <h1 className="w-[12.875rem] h-[2.375rem] mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
              Receive payment in crypto for your International gigs and get
              settled in your local currency with no delay
            </h1>
          </div>
        </div>
      </div>
      <div className=" lg:w-[50.5625rem] lg:m-auto lg:grid lg:grid-cols-2 lg:mt-[2.5rem]  p-[0.9375rem] lg:p-[0]  ">
        <div className="w-[25rem] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
          <img
            src={mark}
            alt=""
            className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
          />
          <div className="items-start  ">
            <h1 className="w-[6.4375rem] h-[1.6875rem] font-Jost font-big text-sm leading-[1.6875rem]  text-Rectangle ">
              NGO/campaign
            </h1>
            <h1 className="w-[12.875rem] h-[2.375rem] mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
              Be limitless with your fundraising, when you can raise from
              anywhere in the world in cryptocurrency
            </h1>
          </div>
        </div>
        <div className="w-[25rem] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
          <img
            src={mark}
            alt=""
            className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
          />
          <div className="items-start ">
            <h1 className="w-[12.6875rem]  font-Jost font-big text-sm leading-[1.6875rem]   text-Rectangle ">
              Large organization
            </h1>
            <h1 className="w-[12.875rem]  mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
              Easily process payroll for your employee, focus on building your
              company or organization let's focus on helping you keep employees
              happy, while you stay compliant.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCases;
