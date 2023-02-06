import React, { useState } from "react";
import BuyAndSellSection from "../../../widgets/Modal/buy/BuyAndSellSection";
import BuySellModal from "../../../widgets/Modal/buy/BuySellModal";
import SellModal from "../../../widgets/Modal/sell/SellModal";
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
  const [amountToSell, setAmountToSell] = useState("");

  const buySell = ["Buy", "Sell"];

  const [sell, setSell] = useState(false);

  const [active, setActive] = useState(0);

  const closeSellModal = () => {
    setSell(false);
  };

  console.log(sell);

  return (
    <div className="p-5">
      {activeBuyAndsellSection === 0 && !sell ? (
        <BuyAndSellSection
          amountToBuy={amountToBuy}
          setAmountToBuy={setAmountToBuy}
          amountToSell={amountToSell}
          setAmountToSell={setAmountToSell}
          handleNext={handleNext}
          buySell={buySell}
          active={active}
          setActive={setActive}
          setSell={setSell}
        />
      ) : activeBuyAndsellSection === 1 && !sell ? (
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
      ) : sell ? (
        <SellModal
          amountToSell={amountToSell}
          setAmountToSell={setAmountToSell}
          closeSellModal={closeSellModal}
          active={active}
        />
      ) : null}
    </div>
  );
}

export default BuyandSell;
