import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphone14Ecommerce, SilverIMac, ImproveOnboardingImage, Gold, IPhone13Pro} from "../../../../assets";
import { CryptoCurrency  } from "../../../../icons";

const desc = [
  { text: "Sell multiple products" },
  { text: "Manage your store on mobile" },
  { text: "Multiple payment options, with an easy and secure checkout" },
];

function Body() {
  return (
    <div className=" w-full h-full pl-2 md:pl-8 bg-white-90 pt-24">
      <h1 className=" lg:w-[28.875rem] mt-[2.5rem]  mx-auto font-Jost font-big text-l leading-[2.5rem] items-center text-secondary-main text-center ">
      How it works
      </h1>
      <p className="lg:text-sm text-s text-center mb-4">Effortless payments. no coding required</p> 
      <div className="md:flex justify-between">
        <div>
          <div className="bg-gradient-to-b from-[#858094] to-[#00B0FF33] py-2 px-4 flex w-fit rounded-lg ml-6">
            <p className="bg-[#000000] rounded-full py-0.5 px-2.5 text-white-90">1</p>
            <p className="pl-8 text-white-30  text-sm"> Create A Link</p>
          </div>
          <p className="text-white-30 lg:text-l md:text-sm text-s mt-4 ml-6">You can use payment  links to sell a product or service</p>
        </div>
        <img src={Gold} className="md:block hidden" alt=""/>
      </div>
      
      <div className="bg-gradient-to-b from-[#858094] to-[#00B0FF33] py-2 px-4 flex w-fit rounded-lg mt-8 ml-6">
        <p className="bg-[#000000] rounded-full py-0.5 px-2.5 text-white-90">2</p>
        <p className="pl-8 text-white-30 text-sm"> Share Link</p>
        
      </div>
      
      <p className="text-white-30 mt-4 pr-8 ml-6 lg:text-l md:text-sm text-s">Start sharing the link to your customers anywhere, for them to look through your product and choose  to pay.</p>
      <div className="flex justify-end">
        <img src={Gold} className="block md:hidden w-[162px]" alt=""/>
        </div>
      <div className="lg:w-[48.5625rem] lg:h-[27.5rem] mt-20 lg:flex lg:flex-row mx-auto hidden lg:block">
        <img
          src={SilverIMac}
          alt=""
          className=" "
        />
        
      </div>
      <div className="flex lg:hidden justify-center">
        <img src={IPhone13Pro} alt=""/>
      </div>
      <div className="bg-gradient-to-b from-[#858094] to-[#00B0FF33] py-2 px-4 flex w-fit rounded-lg mt-24 ml-6">
        <p className="bg-[#000000] rounded-full py-0.5 px-2.5 text-white-90">3</p>
        <p className="pl-8 text-white-30  text-sm">Get Paid</p>
      </div>
      <p className="text-white-30 mt-4 ml-6 lg:text-l md:text-sm text-s">Recieve payment instantly when you share your payment link</p>
      {/**GET STARTED */}
      <img src={CryptoCurrency} className="md:hidden float-right   -mr-10" alt=""/>
      <div className=" m-[1.875rem] mt-[2.5rem] md:w-[42rem] lg:w-[60.375rem] lg:h-[10.875rem] bg-primary-light lg:mt-[5rem] lg:m-auto rounded-[10px] lg:flex lg:flex-row items-center md lg:pl-[4.5625rem] p-[1.875rem] lg:p-[0]">
        <svg
          width="180"
          height="180"
          viewBox="0 0 269 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 hidden lg:flex "
        >
          <path
            d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
            stroke="#FEE6E1"
            stroke-width="42.3175"
          />
        </svg>
        <svg
          width="180"
          height="180"
          viewBox="0 0 269 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute hidden lg:flex z-0 right-0 lg:right-[15rem]"
        >
          <path
            d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
            stroke="#FEE6E1"
            stroke-width="42.3175"
          />
        </svg>
        <div className=" relative lg:flex lg:flex-row mx-auto  ">
          <div>
            <h1 className="font-Jost font-big text-m leading-[2.0625rem] items-center text-secondary-main ">
            Ready to start transactions?
            </h1>
            <h1 className=" lg:w-[20rem] font-Jost font-regular text-s leading-[1.4375rem] mt-[0.3125rem] items-center text-secondary-main ">
              Create a free account and start accepting payment, selling your
              products online
            </h1>
          </div>
          <button className="flex flex-row bg-primary-main  rounded-[0.3125rem] items-center justify-center lg:ml-[1.25rem] mt-[0.625rem] lg:mt-[1.875rem] px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem]  text-white-60 ">
            <h1 className="ml-[0.625rem] mr-2">Sign up</h1>
            <BiRightArrowAlt size="28px" />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
      <img src={ImproveOnboardingImage} className="w-[102.4px] h-[102.4px]" alt=""/>
        <img src={CryptoCurrency} className="-mt-20 hidden md:block  mr-6" alt=""/>
      </div>
      
      
      {/**GET STARTED */}
    </div>
  );
}

export default Body;
