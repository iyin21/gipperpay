import React, { useState } from "react";
import Avatar from "react-avatar";
import { BsUpload } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Formik } from "formik";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function BusinessDetails() {
  const onSubmit = () => {};

  return (
    <div className="lg:w-full mt-[1.25rem] ">
      <div className=" hidden lg:flex lg:flex-col ">
        <h1 className=" w-[10.75rem] font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main ">
          Business Details
        </h1>
      </div>
      <div className=" flex flex-col lg:flex-row lg:mt-[1.25rem] lg:justify-between justify-center items-center  ">
        <div className=" lg:flex lg:flex-row items-center ">
          <Avatar name="Business Details" round={true} size="80" />
          <h1 className=" hidden lg:flex  ml-[1.25rem] font-Jost not-italic font-medium text-s leading-[1.4375rem] text-secondary-main ">
            Business Details
          </h1>
        </div>
        <div className="lg:w-[14.0625rem] ">
          <div className=" flex flex-row m-auto mt-[0.625rem] lg:m-0 lg:mt-0  justify-center w-[8rem] h-[2.5rem] lg:ml-[6.25rem] rounded-[6.25rem] border-[0.0625rem] border-primary-main text-primary-main items-center ">
            <BsUpload />
            <h1 className="ml-[0.625rem] text-s ">Upload</h1>
          </div>
          <h1 className=" lg:w-[14.0625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-white-30 mt-[0.625rem] items-center ">
            Png or JPEG not bigger than 500x500px
          </h1>
        </div>
      </div>

      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
              <span>Business Details</span>
              {open ? <FiChevronDown /> : <FiChevronRight />}
            </Disclosure.Button>
            <Disclosure.Panel as="div">
              <Formik
                initialValues={{
                  BusinessName: "",
                  BusinessEmail: "",
                  BusinessWebsite: "",
                  BusinessNumber: "",
                  BusinessIndustry: "",
                  AboutBusiness: "",
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
                    {/**Business Name */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Business Name
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="BusinessName"
                          {...formik.getFieldProps("BusinessName")}
                          placeholder="Enter city of residence"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Business Name */}
                    {/**Business Email */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Business Email
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="BusinessEmail"
                          {...formik.getFieldProps("BusinessEmail")}
                          placeholder="Enter email Address"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Business Email */}
                    {/**Business Website */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Business Website
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="BusinessWebsite"
                          {...formik.getFieldProps("BusinessWebsite")}
                          placeholder="Enter your business website"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Business Website */}
                    {/**PHONE NUMBER  */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[5.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Phone Number
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full   shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  border-[#858095] border-[0.0625rem] rounded-md">
                        <PhoneInput
                          defaultCountry="NG"
                          type="tel"
                          name="phoneNumber"
                          // {...formik.getFieldProps("phoneNumber")}
                          value={formik.values.BusinessNumber}
                          onChange={(e) =>
                            formik.setFieldValue("phoneNumber", e, false)
                          }
                          placeholder="07086 576 9863"
                          className=" bg-transparent text-white-30 placeholder:text-white-30 py-[1.1rem] pl-3 w-full h-full "
                        />
                      </div>
                    </div>
                    {/**PHONE NUMBER */}
                    {/**Business Industry */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Business Industry
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="BusinessIndustry"
                          {...formik.getFieldProps("BusinessIndustry")}
                          placeholder="Enter city of residence"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Business Industry */}
                    {/**About Business */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        About Business
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <textarea
                          name="AboutBusiness"
                          {...formik.getFieldProps("AboutBusiness")}
                          rows={5}
                          cols={5}
                          placeholder="Enter a description... "
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**About Business */}
                    {/**button */}
                    <button
                      type="button"
                      className=" mt-[0.625rem] lg:mt-[0] font-Jost not-italic font-regular items-center text-primary-main "
                    >
                      Update & Save
                    </button>
                    {/**button */}
                  </form>
                )}
              </Formik>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
              <span>Business Location</span>
              {open ? <FiChevronDown /> : <FiChevronRight />}
            </Disclosure.Button>
            <Disclosure.Panel as="div">
              <Formik
                initialValues={{
                  Country: "",
                  State: "",
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
                    {/**Country */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Country
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="Country"
                          {...formik.getFieldProps("Country")}
                          placeholder="Enter city of residence"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Country */}
                    {/**State */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        State
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="State"
                          {...formik.getFieldProps("State")}
                          placeholder="Enter city of residence"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**State */}
                    {/**button */}
                    <button
                      type="button"
                      className=" mt-[0.625rem] lg:mt-[0] font-Jost not-italic font-regular items-center text-primary-main "
                    >
                      Update & Save
                    </button>
                    {/**button */}
                  </form>
                )}
              </Formik>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default BusinessDetails;
