import React, { useState } from "react";
import ModalBackDrop from "../ModalBackDrop";
import BuyAndSellSelectMethod from "./BuyAndSellSelectMethod";
import BuyAndSellSuccessModal from "./BuyAndSellSuccessModal";
import BuyWithBank from "./BuyWithBank";
import EnterCardDetailsBuy from "./EnterCardDetailsBuy";
function BuySellModal({
  activeBuyAndsellSection,
  handlePrev,
  setActiveBuyAndsellSection,
  setBuyWithBank,
  buyWithBank,
  amountToBuy,
  setAmountToBuy,
}) {
  const [cardDetails, setCardDetails] = useState("");
  const [activeModalChild, setActiveModalchild] = useState(0);
 
  const nextModalChild = () => {
    setActiveModalchild(activeModalChild + 1);
  };

  const prevModalChild = () => {
    setActiveModalchild(activeModalChild - 1);
  };
  
  return (
    <ModalBackDrop
      handlePrev={handlePrev}
      activeBuyAndsellSection={activeBuyAndsellSection}
      type="buyAndSell"
      activeModalChild={activeModalChild}
      prevModalChild={prevModalChild}
    >
      <div className="w-full flex justify-center item-">
        {activeModalChild === 0 ? (
          <BuyAndSellSelectMethod
            setBuyWithBank={setBuyWithBank}
            nextModalChild={nextModalChild}
          />
        ) : activeModalChild === 1 && !buyWithBank ? (
          <EnterCardDetailsBuy
            cardDetails={cardDetails}
            setCardDetails={setCardDetails}
            nextModalChild={nextModalChild}
            amountToBuy={amountToBuy}
          />
        ) : activeModalChild === 2 ? (
          <BuyAndSellSuccessModal
            cardDetails={cardDetails}
            setCardDetails={setCardDetails}
            nextModalChild={nextModalChild}
            setAmountToBuy={setAmountToBuy}
            amountToBuy={amountToBuy}
            setActiveBuyAndsellSection={setActiveBuyAndsellSection}
            desc="Has been received"
            
          />
        ) : buyWithBank ? (
          <BuyWithBank
            amountToBuy={amountToBuy}
            nextModalChild={nextModalChild}
          />
        ) : null}
      </div>
    </ModalBackDrop>
  );
}

export default BuySellModal;
