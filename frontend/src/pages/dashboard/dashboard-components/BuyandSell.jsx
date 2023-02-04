import React, { useState } from "react";
import BuyAndSellSection from "../../../widgets/Modal/buy/BuyAndSellSection";
import BuySellModal from "../../../widgets/Modal/buy/BuySellModal";

function BuyandSell() {
  const [activeBuyAndsellSection, setActiveBuyAndsellSection] = useState(0);
  const handleNext = () => {
    setActiveBuyAndsellSection(activeBuyAndsellSection + 1);
  };

  const handlePrev = () => {
    setActiveBuyAndsellSection(activeBuyAndsellSection - 1);
  };

  console.log(activeBuyAndsellSection);
  const [buyWithBank, setBuyWithBank] = useState(false);

  const [amountToBuy, setAmountToBuy] = useState("");

  return (
    <div className="p-5">
      {activeBuyAndsellSection === 0 ? (
        <BuyAndSellSection
          amountToBuy={amountToBuy}
          setAmountToBuy={setAmountToBuy}
          handleNext={handleNext}
        />
      ) : activeBuyAndsellSection === 1 ? (
        <BuySellModal
          setActiveBuyAndsellSection={setActiveBuyAndsellSection}
          amountToBuy={amountToBuy}
          handleNext={handleNext}
          setBuyWithBank={setBuyWithBank}
          buyWithBank={buyWithBank}
          handlePrev={handlePrev}
          activeBuyAndsellSection={activeBuyAndsellSection}
          setAmountToBuy={setAmountToBuy}
        />
      ) : <p>null</p>}
    </div>
  );
}

export default BuyandSell;
