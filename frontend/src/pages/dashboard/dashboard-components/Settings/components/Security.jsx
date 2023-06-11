import React, { useState, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { Formik } from "formik";
import CustomPasswordInput from "../../../../../widgets/inputs/CustomPasswordInput";

function Security(values) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div className="lg:w-full mt-[1.25rem] ">
      <div className=" hidden lg:flex lg:flex-col ">
        <h1 className=" w-[20.7875rem] font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main ">
          Manage your Password and Security
        </h1>
        <h1 className=" w-[22.625rem]  font-Jost not-italic font-regular text-[0.6875rem]  leading-[1rem] text-white-30 ">
          Change, Set, Retrieve Password for this account.
        </h1>
      </div>
      {/**Log in Password */}
      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
              <span className="flex items-center space-x-2">
                <span >Login Password</span>
              </span>
              <div className="flex flex-row justify-center items-center px-[5px] gap-[10px]">
              <span className="rounded-[20px] px-[5px] gap-[10px] bg-[#F7F7F7] w-[35px] h-[16px] font-jost font-normal text-xs leading-4 text-[#A4A4A4] flex order-0">0/4</span>
                {open ? <FiChevronDown /> : <FiChevronRight />}
                </div>
            </Disclosure.Button>
            <Disclosure.Panel as="div">
              <Formik
                initialValues={{
                  Password: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <form
                    className=" lg:grid lg:grid-cols-2 lg:gap-[0.625rem] lg:mt-[2.5rem] mt-[1.25rem] "
                    onSubmit={formik.handleSubmit}
                  >
                    {/**Transaction Pin */}
                    <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem]">
                      <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Password
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-white-70 w-[300px] h-[50px]  lg:w-[21.8rem] xs:w-full shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md border border-[#858895]">
                        <CustomPasswordInput
                          values={values}
                          handleChange={Formik.handleChange}
                          handleBlur={Formik.handleBlur}
                          placeholder="**********"
                        />
                      </div>
                    </div>
                    {/**Transaction Pin */}

                    {/**button */}
                    <button
                      type="button"
                      className=" mt-[0.625rem] lg:mt-[1.7652rem] font-Jost not-italic font-regular items-center text-primary-main"
                    >
                      Change Password
                    </button>
                    {/**button */}
                  </form>
                )}
              </Formik>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/**Log in Password */}

      {/**Transaction Pin */}
      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
              <span className="flex items-center space-x-2">
                <span>Transaction Pin</span>
              </span>
              <div className="flex flex-row justify-center items-center px-[5px] gap-[10px]">
              <span className="rounded-[20px] px-[5px] gap-[10px] bg-[#F7F7F7] w-[35px] h-[16px] font-jost font-normal text-xs leading-4 text-[#A4A4A4] flex order-0">0/4</span>
                {open ? <FiChevronDown /> : <FiChevronRight />}
                </div>
            </Disclosure.Button>
            <Disclosure.Panel as="div">
              <Formik
                initialValues={{
                  Pin: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <form
                    className=" lg:grid lg:grid-cols-2 lg:gap-[0.625rem] lg:mt-[2.5rem] mt-[1.25rem] "
                    onSubmit={formik.handleSubmit}
                  >
                    {/**Transaction Pin */}

                    <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem]">
                      <h1 className="lg:w-[5.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main">
                        Transaction Pin
                      </h1>
                      {otp.map((value, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          value={value}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          maxLength={1}
                          placeholder="-"
                          className="w-[40px] h-[40px] p-[8px] bg-[#FCFCFC] border-[1px] text-center  border-[#FA3C12] rounded-[8px] mx-[8px] focus:outline-none focus:border-[#FA3C12] align-stretch font-[#FA3C12"
                        />
                      ))}
                    </div>
                    {/**Transaction Pin */}

                    {/**button */}
                    <button
                      type="button"
                      className=" mt-[0.625rem] lg:mt-[0.7652rem] font-Jost not-italic font-regular items-center text-primary-main"
                    >
                      Change Pin
                    </button>
                    {/**button */}
                  </form>
                )}
              </Formik>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/**Transaction Pin */}
    </div>
  );
}

export default Security;
