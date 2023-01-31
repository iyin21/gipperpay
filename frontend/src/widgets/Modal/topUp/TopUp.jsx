import React from "react";
import { useState } from "react";
import { gustCoin } from "../../../assets";
import { apple, banktransfer, Facebook, google, instagram, linkedIn, mastercard, Snapchat, twitter } from "../../../icons";
import ModalBackDrop from "../ModalBackDrop";
import EnterCardDetails from "./topUpFlow/EnterCardDetails";
import SelectPaymentMethod from "./topUpFlow/SelectPaymentMethod";
import TopUPGust from "./topUpFlow/TopUPGust";

function TopUp({ setShowTopUpModal }) {
  const [TopUpStep, setTopUpStep] = useState(0);
  const nextTopUpStep = () => {
    setTopUpStep(TopUpStep + 1);
  };

  const paymentMethods = [
    {
      logo: mastercard,
      label: "Credit card/Debit card",
    },
    {
      logo: banktransfer,
      label: "Bank Transfer",
    },
    {
      logo: apple,
      label: "Apple pay",
    },
    {
      logo: google,
      label: "Google pay",
    }
  ];

  
    
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  return (
    <ModalBackDrop type="topUp" setShowTopUpModal={setShowTopUpModal} TopUpStep={TopUpStep}>
      {
        TopUpStep === 0 ? (<TopUPGust nextTopUpStep={nextTopUpStep}/>) : 
        TopUpStep === 1 ? (<SelectPaymentMethod paymentMethods={paymentMethods} setPaymentMethod={setPaymentMethod} nextTopUpStep={nextTopUpStep}/>) :
        TopUpStep === 2 ? (<EnterCardDetails  nextTopUpStep={nextTopUpStep}/>) : null
      }
    </ModalBackDrop>
  );
}

export default TopUp;
