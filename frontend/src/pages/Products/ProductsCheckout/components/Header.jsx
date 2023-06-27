import React, { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphone11Bent, rectangle, BoxOfCoins, GipperPaymentImage, IPhone11Pro } from "../../../../assets/index";
import { Coins, SmallCoin} from "../../../../icons/index";
import { motion } from "framer-motion";
import {
  textVariants,
  rectangleVariants,
} from "../../ProductsPayroll/components/Header";
import CustomButton from '../../../../components/form/CustomButton';


function Header() {
  const scrollRef = useRef(null);
  return (
    <div className=" h-full  md:pl-[3.125rem] px-4  lg:justify-center relative z-10 bg-white-70">
      {/* <motion.div
        variants={textVariants}
        animate="show"
        initial="hide"
        className=""
      > */}
      <div className="flex justify-end mt-4 md:hidden">
      <img src={SmallCoin} className="" alt=""/>
      </div>
      
      <div className="flex justify-between ">
      <h1 className="lg:w-[11.375rem] flex flex-row items-center font-Jost not-italic font-regular text-sm leading-[1.6875rem] text-secondary-main lg:mt-[3rem] lg:justify-around ">
          Product
          <span>
            <BsDot color="text-secondary-main" />
          </span>
          <span>Checkout</span>
          
        </h1>
        <img src={Coins} className="hidden md:block" alt=""/>
      </div>
      <img src={BoxOfCoins} alt="" className="absolute hidden md:block left-0 mt-32"/>
         <h1 className=" md:w-[80%] mx-auto md:text-center  mt-[2rem] font-Jost font-big text-[36px] md:text-3xl md:leading-[4.3125rem] items-center text-secondary-main ">
         Simplify Checkout With End-To-End Seamless Checkout Infrastructure 
        </h1>
        
        <h1 className="md:w-[60%]  mx-auto md:text-center mt-[1.25rem] font-Jost font-regular text-sm md:leading-[1.6875rem] text-white-30 ">
        Create frictionless checkout experience with our one click payments and deliver the best payment experinece for your users. Available on web and mobile
        </h1>
        <CustomButton className="flex justify-center items-center text-center md:mx-auto mt-6 w-40 lg:w-40"><h1 className="mr-[0.625rem] ">Get started</h1>
            <BiRightArrowAlt size="24px" />
        </CustomButton>
          <div className="hidden md:flex justify-center mt-20">
         
          <img src={GipperPaymentImage}  alt=""/>
          </div>
          <img src={BoxOfCoins} alt="" className="absolute md:hidden block left-0 md:mt-32" width="180px" height="180px"/>
          <div className="flex justify-end mt-4 md:hidden">
              <img src={IPhone11Pro}  alt="" />  
          </div>   
          {/* <div className=" mt-[2.25rem]  lg:mt-[0]  relative z-10 lg:h-[30.375rem] lg:w-[54.875rem]">
         
      </div>  */}
        {/*<h1 className="lg:w-[41.3125rem] lg:h-[3.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
          Enjoy distinctive transaction success rate when you pay online using
          gipperpay checkout widget. Available on web and mobile
        </h1>
        <button className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem] mt-[1.25rem] text-white-60 ">
          <h1 className="ml-[0.625rem] ">Get started</h1>
          <BiRightArrowAlt />
        </button>
      </motion.div>
      <div className=" mt-[2.25rem]  lg:mt-[0]  relative z-10 lg:h-[30.375rem] lg:w-[54.875rem]">
        <motion.img
          viewport={{ once: true }}
          ref={scrollRef}
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
          src={iphone11Bent}
          alt=""
          className="w-full h-full object-contain relative z-10  "
        />
        <motion.img
          variants={rectangleVariants}
          animate="show"
          initial="hide"
          src={rectangle}
          alt=""
          className="absolute top-[0] h-full -right-[15rem]  lg:left-[2.5rem] z-0   "
        />
      </div> */}
    </div>
  );
}

export default Header;
