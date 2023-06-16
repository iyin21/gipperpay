import React, { useState} from "react";
import ModalBackDrop from "../ModalBackDrop";
import SellStepOne from "./SellStepOne";
import SellStepThree from "./SellStepThree";
import SellStepTwo from "./SellStepTwo";
import BuyAndSellSuccessModal from "../buy/BuyAndSellSuccessModal";

function SellModal({ active, closeSellModal, amountToSell, setAmountToSell }) {
  const [sellStep, setSellStep] = useState(0);
  const nextSellStep = () => {
    setSellStep(sellStep + 1);
  };
  const prevSellStep = () => {
    setSellStep(sellStep - 1);
  };
  return (
    <ModalBackDrop
      active={active}
      closeSellModal={closeSellModal}
      type="buyAndSell"
    >
      <div className="w-full flex justify-center items-cente">
        {sellStep === 0 ? (
          <SellStepOne nextSellStep={nextSellStep} />
        ) : sellStep === 1 ? (
          <SellStepTwo
            prevSellStep={prevSellStep}
            nextSellStep={nextSellStep}
          />
        ) : sellStep === 2 ? (
          <SellStepThree
            nextSellStep={nextSellStep}
            amountToSell={amountToSell}
            setAmountToSell={setAmountToSell}
            prevSellStep={prevSellStep}
          />
        ) : sellStep === 3 ? <BuyAndSellSuccessModal  desc='GUST has been sold' amountToBuy={amountToSell}/> :''}
      </div>
    </ModalBackDrop>
  );
}

export default SellModal;
