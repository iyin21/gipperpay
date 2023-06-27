import React from "react";
import Header from "./components/Header";
import { walletpic, profileComponent, Successpic } from "../../../assets/index";
import { BiRightArrowAlt } from "react-icons/bi";
import {Etherum} from "../../../assets/index"
import ScaleUser from "./components/scaleUser"
import OwnYourIntegrations from "./components/ownYourIntegrations"
import FastSetup from "./components/fastSetup"
import ImproveOnboarding from "./components/improveOnboarding";


function ProductsCheckout() {
  return (
    <div className=" w-full h-full  lg:p-[0]  ">
      <Header />
      

      <div className="text-center pt-20 pb-10 lg:w-full w-[80%] mx-auto">
        <p className="bg-gradient-to-b from-[#0B002A] to-[#00B0FF] inline-block text-transparent bg-clip-text text-xl font-bold">Supported On Ethereum
      </p>
      <div className="flex justify-center mt-6">
        <img src={Etherum} alt=""/>
      </div>
        
      </div>
      <ScaleUser/>
      <OwnYourIntegrations/>
      <ImproveOnboarding/>
      <FastSetup/>
            </div>
    
  );
}

export default ProductsCheckout;
