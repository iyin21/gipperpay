import React, { useState } from "react";
import Avatar from "react-avatar";
import { BsUpload } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Formik } from "formik";
import Button from "../../../../GetStarted/components/Button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import UploadButton from "./UploadButton";
import useGetCountriesQuery from "../../../../../customhooks/useGetCountries"
import { businesslogo } from "../../../../../assets";


function BusinessDetails() {
  const { countries, loading, error } = useGetCountriesQuery();

  const onSubmit = () => {};

  return (
    <div className="lg:w-full mt-[1.25rem] ">
      <div className=" hidden lg:flex lg:flex-col ">
        <h1 className=" w-[10.75rem] font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main ">
          Business Details
        </h1>
        <h1 className=" w-[22.625rem]  font-Jost not-italic font-regular text-[0.6875rem]  leading-[1rem] text-white-30 ">
          Here's what we know about your business. Please do update it if there have been
          any recent changes.
        </h1>
      </div>
      <div className=" flex flex-col lg:flex-row lg:mt-[1.25rem] lg:justify-between justify-center items-center  ">
        <div className=" lg:flex lg:flex-row items-center ">
          <Avatar name="Business Details" round={true} size="80" src={businesslogo}/>
          <h1 className=" hidden lg:flex  ml-[1.25rem] font-Jost not-italic font-medium text-s leading-[1.4375rem] text-secondary-main ">
            Business Logo
          </h1>
        </div>
        <div className="lg:w-[14.0625rem] ">
        <UploadButton />
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
                          placeholder="Enter you business name"
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
                          placeholder="Enter your business industry"
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
                    <div className="w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0]">
                  <h1 className="lg:w-[9.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main">
                    Country
                  </h1>
                  <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                  <select
                      name="country"
                      {...formik.getFieldProps("country")}
                      defaultValue={formik.values.country || "Nigeria"}
                      className="h-full w-[95%] py-[1.1rem] bg-transparent text-white-30 placeholder:text-white-30 pl-3"
                    >
                      <option value="" disabled className="border">
                        {loading ? "Loading..." : error ? "Error loading countries" : "Select country of residence"}
                      </option>
                      {countries &&
                        countries.map((country) => (
                          <option key={country.name} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                    </select>
                    {countries &&
                      countries.map((country) => (
                        country.name === formik.values.country && (
                          <img key={country.name} className="inline-block w-[25px] h-[20px] ml-2 absolute left-[3%]" src={country.flag} alt={country.name} />
                        )
                      ))}
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
                          placeholder="Enter state of residence"
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
