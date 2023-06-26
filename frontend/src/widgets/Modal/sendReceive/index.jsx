import { ethereum} from "../../../assets";
import {
    BTC,
    BackRounded,
   
    Dai,
    IC_SharpCancel,

    USDC,
    USDT,
 
} from "../../../icons";

import {  useState } from "react";
import { ConfirmPinMOdal } from "./confirmPinModal";
import { Tab } from "@headlessui/react";
import { SendCoin } from "./sendCoin";
import { ReceiveCoin } from "./receiveCoin";
import { ChooseNetwork } from "./chooseNetwork";

export const coins = [
    {
        name: "Bitcoin",
        logo: BTC,
        abbr: "BTC",
    },
    {
        name: "USDT",
        logo: USDT,
        abbr: "USDT",
    },
    {
        name: "USDC",
        logo: USDC,
        abbr: "USDC",
    },
    {
        name: "Ethereum network (ERC20)",
        logo: ethereum,
        abbr: "ETH",
    },
    {
        name: "Dai",
        logo: Dai,
        abbr: "Dai",
    },
];

const SendAndRecieveCoin = ({ setSendAndReceiveModal }) => {
    const [isConfirmPinModalOpen, setIsConfirmPinModalOpen] = useState(false);
    const [pin, setPin] = useState();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [currentStep, setCurrentStep] = useState(1);

    const [selectedCoinState, setSelectedCoinState] = useState("Ethereum network (ERC20)");

    const selectedCoin = coins.find((elem) => selectedCoinState === elem.name);

    return (
        <>
            <div className="fixed overflow-y-auto left-0 top-0 w-full h-[100vh] bg-[#fcfcfc]  md:bg-[#f7f7f7]  z-50">
                <header className="bg-[#FCFCFC] h-[80px] w-full flex flex-col justify-center pl-[40px]">
                    {currentStep === 1 && (
                        <div className="flex gap-[20px] items-center">
                            <img
                                src={IC_SharpCancel}
                                alt="cancel"
                                className="cursor-pointer"
                                onClick={() => setSendAndReceiveModal(false)}
                            />
                            <span className="text-[19px] md:text-[16px] font-medium font-Jost text-secondary-main">
                                Send and receive coins
                            </span>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="flex gap-[20px] items-center">
                            <img
                                src={BackRounded}
                                alt="back"
                                className="cursor-pointer"
                                onClick={() => setCurrentStep(1)}
                            />
                            <span className="text-[19px] md:text-[16px] font-medium font-Jost text-secondary-main">
                                Choose a network for this transaction
                            </span>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="flex gap-[20px] items-center">
                            <img
                                src={BackRounded}
                                alt="back"
                                className="cursor-pointer"
                                onClick={() => setCurrentStep(2)}
                            />
                            <span className="text-[19px] md:text-[16px] font-medium font-Jost text-secondary-main">
                                Enter Pin
                            </span>
                        </div>
                    )}
                </header>

                {/* right sidebar */}
                <aside className="h-screen w-[25%] fixed right-0 top-0 bg-[#fcfcfc] hidden md:block">
                    <div className="mt-[160px] pl-[24px]">
                        <div>
                            <h4 className="text-secondary-main text-[19px] font-medium">Steps</h4>
                            <div className="flex flex-col items-start mt-[20px] gap-[35px]">
                                <div className="flex items-center gap-[10px]">
                                    <div
                                        className={`w-[35px] h-[35px] flex justify-center items-center rounded-[10px]  text-whiteText  bg-secondary-main 
                                        `}
                                    >
                                        1
                                    </div>
                                    <p className="hidden lg:block font-Jost">Select Coin and Amount</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div
                                        className={`w-[35px] h-[35px] flex justify-center items-center rounded-[10px] ${
                                            currentStep > 1
                                                ? "text-whiteText bg-secondary-main"
                                                : " text-secondary-main  bg-secondary-light"
                                        }
                                        }`}
                                    >
                                        2
                                    </div>
                                    <p className="hidden lg:block font-Jost">Choose Network and wallet Address</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div
                                        className={`w-[35px] h-[35px] flex justify-center items-center rounded-[10px]  ${
                                            currentStep > 2
                                                ? "text-whiteText  bg-secondary-main"
                                                : " text-secondary-main  bg-secondary-light"
                                        }
                                        }`}
                                    >
                                        3
                                    </div>
                                    <p className="hidden lg:block font-Jost">Confirm with PIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="md:w-[75%] flex justify-center items-center w-full">
                    <div className="w-[94%] max-w-[350px] mx-auto md:mx-0 md:max-w-[576px] md:w-[576px] mt-0 md:mt-[95px] bg-[#fcfcfc] py-[24px] md:py-[95px] md:px-[128px]">
                        {currentStep === 1 && (
                            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                                <Tab.List>
                                    <div className="flex items-center gap-[20px] w-full justify-between">
                                        <Tab
                                            className={` md:w-[150px] w-[175px] h-[45px]  rounded-[5px] focus-visible:border-transparent  ${
                                                selectedIndex === 0
                                                    ? "bg-primary-light text-primary-main"
                                                    : "bg-[#F7F7F7] text-white-30"
                                            }`}
                                        >
                                            Send
                                        </Tab>
                                        <Tab
                                            className={`bg md:w-[150px] w-[175px] h-[45px] rounded-[5px]  focus-visible:border-transparent  ${
                                                selectedIndex === 1
                                                    ? "bg-primary-light text-primary-main"
                                                    : "bg-[#F7F7F7] text-white-30"
                                            }`}
                                        >
                                            Recieve
                                        </Tab>
                                    </div>
                                </Tab.List>

                                <Tab.Panels>
                                    <Tab.Panel>
                                        <SendCoin
                                            setCurrentStep={setCurrentStep}
                                            selectedCoin={selectedCoin}
                                            setSelectedCoinState={setSelectedCoinState}
                                        />
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <ReceiveCoin />
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        )}

                        {currentStep === 2 && (
                            <ChooseNetwork
                                setIsConfirmPinModalOpen={setIsConfirmPinModalOpen}
                                selectedCoin={selectedCoin}
                                setCurrentStep={setCurrentStep}
                            />
                        )}
                        {isConfirmPinModalOpen && currentStep === 3 && (
                            <ConfirmPinMOdal
                                setIsConfirmPinModalOpen={setIsConfirmPinModalOpen}
                                setPin={setPin}
                                setCurrentStep={setCurrentStep}
                            />
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default SendAndRecieveCoin;
