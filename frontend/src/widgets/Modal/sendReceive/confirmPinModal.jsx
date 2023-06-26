import React, { useEffect } from "react";
import { IC_SharpCancel } from "../../../icons";
import { motion } from "framer-motion";

export const ConfirmPinMOdal = ({ setIsConfirmPinModalOpen, setPin, setCurrentStep }) => {
    const inputs = ["input1", "input2", "input3", "input4"];

    useEffect(() => {
        inputs.map((id) => {
            const input = document.getElementById(id);

            input && addListener(input);
        });
    }, []);

    inputs.map((id) => {
        const input = document.getElementById(id);

        input && addListener(input);
    });

    function addListener(input) {
        input.addEventListener("keyup", (e) => {
            if (input.value.length > 0) {
                input.style.setProperty("border-color", "#fa3c12");
            } else {
                input.style.setProperty("border-color", "#858094");
            }

            const key = e.key; // const {key} = event; ES6+

            const code = parseInt(input.value);
            if (code >= 0 && code <= 9 && !(key === "Backspace" || key === "Delete")) {
                const n = input.nextElementSibling;
                if (n) n.focus();
            } else {
                input.value = "";
            }

            if (key === "Backspace" || key === "Delete") {
                const prev = input.previousElementSibling;
                if (prev) prev.focus();
            }

            const pinValue = inputs.map((id) => document.getElementById(id).value).join("");
            setPin(pinValue);
        });
    }
    return (
        <motion.div className="md:fixed overflow-y-auto left-0 top-0 w-full md:h-[100vh]  md:bg-[rgba(11,0,42,0.2)] md:backdrop-blur-[5px] z-[100] static backdrop-blur-0 h-full bg-[#fcfcfc] ">
            <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
                transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
                className="w-full flex justify-center"
            >
                <div className="w-[350px] md:w-[359px] md:h-[432px] bg-[#fcfcfc]  md:mt-[114px] md:pt-[50px] md:pb-[40px] h-auto">
                    <img
                        src={IC_SharpCancel}
                        alt=""
                        className="pl-[50px] cursor-pointer hidden md:block"
                        onClick={() => {
                            setIsConfirmPinModalOpen(false);
                            setCurrentStep(2);
                        }}
                    />
                    <div className=" md:mt-[50px]">
                        <h3 className="text-[23px] md:text-[13px] text-center font-medium font-Jost text-secondary-main">
                            Transaction PIN
                        </h3>
                        <p className="text-secondary-30 font-Jost text-[16px] md:text-[13px] mt-[10px] text-center">
                            Confirm with Transaction PIN
                        </p>
                    </div>
                    <div className="flex w-full items-center pl-[85px] mt-[20px] gap-[10px]">
                        <input
                            id="input1"
                            type="text"
                            maxLength="1"
                            placeholder="-"
                            className="h-[40px] text-[19px] pl-[14px] font-Jost text-white-30 w-[40px] rounded-lg  border border-secondary-20 bg-[#fcfcfc]"
                        />
                        <input
                            id="input2"
                            type="text"
                            maxLength="1"
                            placeholder="-"
                            className="h-[40px] text-[19px] pl-[14px] font-Jost text-white-30 w-[40px] rounded-lg  border border-secondary-20 bg-[#fcfcfc]"
                        />
                        <input
                            id="input3"
                            type="text"
                            maxLength="1"
                            placeholder="-"
                            className="h-[40px] text-[19px] pl-[14px] font-Jost text-white-30 w-[40px] rounded-lg  border border-secondary-20 bg-[#fcfcfc]"
                        />
                        <input
                            id="input4"
                            type="text"
                            maxLength="1"
                            placeholder="-"
                            className="h-[40px] text-[19px] pl-[14px] font-Jost text-white-30 w-[40px] rounded-lg  border border-secondary-20 bg-[#fcfcfc]"
                        />
                    </div>
                    <p className="mt-[40px] text-secondary-30 font-Jost md:text-[13px]  text-[16px] text-center ">
                        Don’t Have one? <span className="text-primary-main">Set Transaction PIN</span>
                    </p>
                    <div className="flex justify-center w-full mt-[40px]">
                        <button className="md:w-[95px] h-[45px] w-full self-center  rounded-[5px] bg-primary-main text-[#fcfcfc]">
                            Confirm
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
