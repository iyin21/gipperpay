// assets
import { gustCoin } from "../../../assets";
import { downIcon, swap1 } from "../../../icons";
import { Divider } from "antd";

// components
import BuyButton from "../../../widgets/buttons/BuyButton";

// icon
import { AiOutlineDown } from "react-icons/ai";

function BuyAndSellSection({
  handleNext,
  setAmountToBuy,
  amountToBuy,
  buySell,
  active,
  setActive,
  setSell,
  amountToSell,
  setAmountToSell,
}) {
  const handleActive = (index) => {
    setActive(index);
  };

  const handleSell = () => {
    setSell(true);
  };

  const handleBuyClick = () => {
    !amountToBuy ? alert("Please enter the GU$T you want to buy"):
    handleNext()
  }
  return (
    <div className="w-full lg:w-[36rem] lg:h-[45rem]  rounded-[10px] lg:ml-[162px] lg:mr-[432px] mt-[20px] pt-[40px] pb-[71px]  lg:border-[1px] border-white-20 lg:pl-[128px] lg:pr-[128px]">
      <div className="w-full lg:w-[320px] h-[45px] flex flex-row gap-2 items-center ">
        {buySell.map((buySell, index) => (
          <div
            className={`lg:w-[150px] w-[45%]  h-[45px] items-center justify-center  rounded-[5px] ${
              active === index ? "bg-primary-light" : ""
            } cursor-pointer  pt-[11px] pb-[11px] pl-[62px] pr-[62px]`}
            onClick={() => handleActive(index)}
          >
            <h1 className="w-[26px] h-[23px] font-Jost not-italic font-medium text-s text-center leading-[23px] text-Rectangle">
              {buySell}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-[300px] h-[441px] mt-[39px] lg:ml-[10px] lg:mr-[10px] flex flex-col items-start ">
        <h1 className="w-[105px] h-[19px] font-Jost not-italic font-medium text-xs leading-[19px] text-secondary-main">
          Select Coin to {active === 0 ? "buy" : "sell"}
        </h1>
        {active === 0 ? (
          <div className="w-full lg:w-[300px] h-[50px]  pt-[10px] pb-[10px] lg:pl-[89.92px] lg:pr-[99.91px] border-[1px] rounded-[5px] border-primary-90 mt-[5px]">
            <div className="w-full lg:w-[110.17px] h-[30px] flex flex-row justify-center items-center rounded-[5px] ">
              <img src={gustCoin} alt="gustCoin" className="mr-[10px]" />
              <h1 className="w-[32px] h-[19px] not-italic font-regular text-xs leading-[19px] text-white-30 mr-[10px] ">
                GU$T
              </h1>
              <img
                src={downIcon}
                alt="downIcon"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-[300px] h-[3rem] border mt-[5px] p-2 border-primary-90 rounded-[5px] flex flex-row items-center justify-between pr-[14px]">
            <div className="w-[83px] h-[33px] gap-2 bg-[#F7F7F7] rounded-[5px] pt-[5px] pb-[5px] px-3 flex flex-row items-center ">
              <img src={gustCoin} alt="" />
              <AiOutlineDown />
            </div>
            <input
              className="w-[90%] pl-2 placeholder:text-right"
              value={amountToSell}
              onChange={(e) => setAmountToSell(e.target.value)}
              type="text"
              placeholder="0.00"
            />
          </div>
        )}
        <div className="mt-[5px] ml-[75.5px]">
          <h1 className=" w-[149px] h-[19px] text-white-30 font-Jost not-italic font-regular  text-xs leading-[19px] ">
            Available Balance: 0 GUST
          </h1>
        </div>
        {active === 0 && (
          <>
            <h1 className="w-[127px] h-[19px] font-Jost not-italic font-medium text-xs leading-[19px] text-secondary-main mt-[64px]">
              Enter Amount to Send
            </h1>
            <div className="w-full lg:w-[300px] h-[3rem] border mt-[5px] p-2 border-primary-90 rounded-[5px] flex flex-row items-center justify-between pr-[14px]">
              <div className="w-[83px] h-[33px] gap-2 bg-[#F7F7F7] rounded-[5px] pt-[5px] pb-[5px] px-3 flex flex-row items-center ">
                <h1 className="mr-[5px] w-[33px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-secondary-main">
                  NGN
                </h1>
                <AiOutlineDown />
              </div>
              <input
                className="w-[90%] pl-2 placeholder:text-right"
                value={amountToBuy}
                onChange={(e) => setAmountToBuy(e.target.value)}
                type="text"
                placeholder="0.00"
              />
            </div>
          </>
        )}
        <h1 className="mt-[40px] w-[45px] h-[19px] font-Jost not-italic text-xs leading-[19px] text-white-30">
          Recieve
        </h1>
        {active === 0 ? (
          <h1 className="mt-[5px] w-full h-[27px] font-Jost not-italic font-medium text-sm leading-[27px] text-white-30 ">
            GU$T{" "}
            {parseInt(amountToBuy / 725)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        ) : (
          <h1 className="mt-[5px] w-full h-[27px] font-Jost not-italic font-medium text-sm leading-[27px] text-white-30 ">
            ₦{" "}
            {parseInt(amountToSell * 725)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        )}

        <Divider className="border-white-30 mt-[40px] " dashed />
        <div className="w-full lg:w-[300px] h-[20px] flex flex-row justify-between items-center mt-[10px] ">
          <h1 className="w-50% lg:w-[80px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 ">
            Exchange Rate
          </h1>
          <div className=" flex flex-row items-center ">
            <h1 className="w-[50%] lg:w-[44px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 mr-[5px] ">
              1 GU$T
            </h1>
            <img src={swap1} alt="" className="mr-[5px]" />
            <h1 className="w-[44px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 ">
              N725
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-[300px] h-[19px] mt-[10px] flex flex-row items-center justify-between ">
          <h1 className=" w-[20px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
            Fee
          </h1>
          <h1 className=" w-[46px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
            0 GU$T
          </h1>
        </div>
        <div className="w-full lg:w-[300px] h-[19px] mt-[10px] flex flex-row items-center justify-between ">
          <h1 className=" w-[126px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
            Amount you'll receive
          </h1>
          {active === 0 ? (
            <h1 className=" w-[166px] h-[19px] flex justify-end items-center font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
              {parseInt(amountToBuy / 725)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              GU$T
            </h1>
          ) : (
            <h1 className=" w-[166px] flex justify-end items-center h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
               ₦ {parseInt(amountToSell * 725)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
             
            </h1>
          )}
        </div>
      </div>
      {active === 0 ? (
        <div className="mt-28 lg:mt-[60px] lg:ml-[60px] ">
          <BuyButton content="Buy" handleBuyClick={handleBuyClick} />
        </div>
      ) : (
        <div className="mt-28 lg:mt-[60px] lg:ml-[60px] ">
          <BuyButton content="Sell" type="sell" handleSell={handleSell} />
        </div>
      )}
    </div>
  );
}

export default BuyAndSellSection;
