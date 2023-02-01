import React from "react";

//icons
import { mark } from "../../../icons";

function UseCases() {
  return (
    <div className="mx-[20px] ">
      <h1 className=" font-Jost not-italic font-regular text-sm  leading-[27px] items-center text-center  lg:mt-[77px] ">
        Use Cases
      </h1>
      <h1 className=" font-Jost not-italic font-big text-l  leading-[40px] items-center  lg:mt-[20px] text-center ">
        Who can use Gipperpay?
      </h1>

      <div className=" lg:grid lg:grid-cols-3 lg:mt-[40px] lg:mx-[120px]  ">
        <div className="w-[400px] h-[200px] flex flex-row items-center border-l-[2px] border-primary-main rounded-[10px] my-[20px] ">
          <img
            src={mark}
            alt=""
            className="w-[33px] h-[33px] mr-[23px] ml-[10px] "
          />
          <div className="items-start ">
            <h1 className="w-[103px] h-[27px] font-Jost font-big text-sm leading-[27px]  text-Rectangle ">
              Startup
            </h1>
            <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
              High-ranked start-ups use gipperpay API to accept crypto payment,
              letting users be able to pay with crypto
            </h1>
          </div>
        </div>
        <div className="w-[400px] h-[200px] flex flex-row items-center border-l-[2px] border-primary-main rounded-[10px] my-[20px]  ">
          <img
            src={mark}
            alt=""
            className="w-[33px] h-[33px] mr-[23px] ml-[10px] "
          />
          <div className="items-start ">
            <h1 className="w-[103px] h-[27px] font-Jost font-big text-sm leading-[27px]  text-Rectangle ">
              E-commerce
            </h1>
            <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
              Put your business across borders by using our e-commerce
              storefront to sell to people around the world with ease.
            </h1>
          </div>
        </div>
        <div className="w-[400px] h-[200px] flex flex-row items-center border-l-[2px] border-primary-main rounded-[10px] my-[20px]  ">
          <img
            src={mark}
            alt=""
            className="w-[33px] h-[33px] mr-[23px] ml-[10px] "
          />
          <div className="items-start ">
            <h1 className="w-[103px] h-[27px] font-Jost font-big text-sm leading-[27px]  text-Rectangle ">
              Freelancers
            </h1>
            <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
              Receive payment in crypto for your International gigs and get
              settled in your local currency with no delay
            </h1>
          </div>
        </div>
      </div>
      <div className=" lg:grid lg:grid-cols-2 lg:mt-[40px] lg:mx-[315px]  ">
        <div className="w-[400px] h-[200px] flex flex-row items-center border-l-[2px] border-primary-main rounded-[10px] my-[20px]  ">
          <img
            src={mark}
            alt=""
            className="w-[33px] h-[33px] mr-[23px] ml-[10px] "
          />
          <div className="items-start ">
            <h1 className="w-[103px] h-[27px] font-Jost font-big text-sm leading-[27px]  text-Rectangle ">
              NGO/campaign
            </h1>
            <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
              Be limitless with your fundraising, when you can raise from
              anywhere in the world in cryptocurrency
            </h1>
          </div>
        </div>
        <div className="w-[400px] h-[200px] flex flex-row items-center border-l-[2px] border-primary-main rounded-[10px] my-[20px]  ">
          <img
            src={mark}
            alt=""
            className="w-[33px] h-[33px] mr-[23px] ml-[10px] "
          />
          <div className="items-start ">
            <h1 className="w-[203px] h-[27px] font-Jost font-big text-sm leading-[27px]  text-Rectangle ">
              Large organization
            </h1>
            <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
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
