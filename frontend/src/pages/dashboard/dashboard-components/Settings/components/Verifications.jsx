import React from "react";

import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Formik } from "formik";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useSelector } from "react-redux";
import { complete, incomplete, upload, triangle, exclamation } from "../../../../../assets";
import { useFormik } from "formik";
import useGetCountriesQuery from "../../../../../customhooks/useGetCountries"

function Verifications() {
  const { user } = useSelector((store) => store.user);
  const { countries, loading, error } = useGetCountriesQuery();
  const formik = useFormik({
    initialValues: {
      country: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values.country);
    },
  });
  return (
    <div className="lg:w-full mt-[1.25rem] ">
      <div className=" hidden lg:flex lg:w-full items-center justify-between">
        <h1 className=" w-[10.75rem] font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main ">
          Account Verification
        </h1>
        <div className="flex items-center">
  <div className="mt-4 w-[45px] h-[5px] bg-gray-200 rounded">
    <div className="h-full bg-green-500 rounded" style={{ width: '20%' }}></div>
  </div>
  <span className="ml-2 mt-[1.25rem]">20% Complete</span>
</div>
      </div>
      <div className=" flex flex-col lg:flex-row lg:mt-[1.25rem] lg:justify-between justify-center items-center  ">
        <div className=" lg:flex lg:flex-row items-center ">
          <h1 className=" w-[22.625rem]  font-Jost not-italic font-regular text-[0.6875rem]  leading-[1rem] text-white-30 ">
            Add your personal information and proof of Address to increase your
            withdrawal limits for fiat and crypto. Get verified same day
          </h1>
        </div>
      </div>
{/**Personal Profile */}
      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
              <span className="flex items-center space-x-2">{<img className="w-[20px] h-[20px]" src={complete} alt="" />}<span>Personal Profile</span></span>

              <div className="flex flex-row justify-center items-center px-[5px] gap-[10px]">
              <span className="rounded-[20px] px-[5px] gap-[10px] bg-[#DFF6C9] w-[35px] h-[16px] font-jost font-normal text-xs leading-4 text-[#039F00] flex order-0">2/2</span>
                {open ? <FiChevronDown /> : <FiChevronRight />}
                </div>
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
{/**Personal Profile */}

{/**Contact Information */}
      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
            <span className="flex items-center space-x-2">{<img className="w-[20px] h-[20px]" src={incomplete} alt="" />}<span>Contact Information</span></span>
            <div className="flex flex-row justify-center items-center px-[5px] gap-[10px]">
              <span className="rounded-[20px] px-[5px] gap-[10px] bg-[#F7F7F7] w-[35px] h-[16px] font-jost font-normal text-xs leading-4 text-[#A4A4A4] flex order-0">0/4</span>
                {open ? <FiChevronDown /> : <FiChevronRight />}
                </div>
            </Disclosure.Button>
            <Disclosure.Panel as="div">
              <Formik
                initialValues={{
                  Country: "",
                  State: "",
                  City: "",
                  StreetAdress: "",
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
                    {/**Country of Residence*/}
                    <div className="w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0]">
                  <h1 className="lg:w-[9.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main">
                    Country of Residence
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
                    {/*Country of Residence */}
                    {/**Business Email */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        State
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="state"
                          {...formik.getFieldProps("State")}
                          placeholder="Enter state of residence"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Business Email */}
                    {/**Business Website */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        City
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="text"
                          name="city"
                          {...formik.getFieldProps("City")}
                          placeholder="Enter your city of residence"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Business Website */}

                    {/**Street Address */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Street Address
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                        <input
                          type="number"
                          name="streetAddress"
                          {...formik.getFieldProps("StreetAddress")}
                          placeholder="Enter your Street Address"
                          className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
                        />
                      </div>
                    </div>
                    {/**Street Address */}


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
{/**Contact Information */}

{/**Upload Identity Documents */}
      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
            <span className="flex items-center space-x-2">{<img className="w-[20px] h-[20px]" src={incomplete} alt="" />}<span>Upload identity documents</span></span>
            <div className="flex flex-row justify-center items-center px-[5px] gap-[10px]">
              <span className="rounded-[20px] px-[5px] gap-[10px] bg-[#F7F7F7] w-[35px] h-[16px] font-jost font-normal text-xs leading-4 text-[#A4A4A4] flex order-0">0/4</span>
                {open ? <FiChevronDown /> : <FiChevronRight />}
                </div>
            </Disclosure.Button>
            <Disclosure.Panel as="div">
              <Formik
                initialValues={{
                  IDtype: "",
                  IdCountry: "",
                  FrontID: "",
                  BackID: "",
                }}
                onSubmit={(values) => {
                  const data = {
                    userId: user.data.userId,
                    userIdtype: values.IDtype,
                    idFront: values.FrontID,
                    idCountry: values.Nationality,
                    idBack: values.BackID,
                    expiryDate: values.ExpiryDate,
                  };
                  try {
                  } catch (error) {}
                }}
              >
                {(formik) => (
                  <form
                    className=" lg:grid lg:grid-cols-2 lg:gap-[0.625rem] lg:mt-[2.5rem] mt-[1.25rem] "
                    onSubmit={formik.handleSubmit}
                  >
                    {/**ID TYPE */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Select ID type
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] pl-[1.25rem] rounded-md">
                      <select
                      name="IDtype"
                      {...formik.getFieldProps("IDtype")}
                      className="h-full w-[95%] py-[1.1rem] bg-transparent text-white-30 placeholder:text-white-30"
                    >
                      <option value="" disabled>
                        Select ID type
                      </option>
                      <option value="National ID">National ID</option>
                      <option value="Passport">Passport</option>
                      <option value="Military ID">Military ID</option>
                    </select>
                      </div>
                    </div>
                    {/**ID TYPE */}
                    {/**Nationality */}
                    <div className="w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0]">
                  <h1 className="lg:w-[9.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main">
                    Country of Residence
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
                          <img key={country.name} className="inline-block w-[25px] h-[20px] ml-2 absolute left-[50%]" src={country.flag} alt={country.name} />
                        )
                      ))}
                      </div>
                    </div>
                    {/**Nationality */}
                    {/**Front Document */}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Front Document
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] border-dashed border-opacity-50 pl-[1.25rem] rounded-md">
                      <label htmlFor="idFront" className="relative inline-flex items-center">
                        <span className=" text-gray-500 py-[1.4rem] px-3 rounded-l-md">
                         <img src={upload} alt="" />
                        </span>
                        <span className="bg-transparent py-[1.1rem] px-3 rounded-r-md w-[200px] leading-[16px] text-[#808595] text-[11px]">
                          Drag and drop image here of Browse
                        </span>
                      </label>
                      <input
                        type="file"
                        accept=".jpg"
                        id="idFront"
                        name="idFront"
                        {...formik.getFieldProps("idFront")}
                        className="hidden"
                      />
                      </div>
                    </div>
                    {/**Front Document */}
                    {/** Back Document*/}
                    <div className=" w-full lg:w-[18.75rem] mt-[0.625rem] lg:mt-[0] ">
                      <h1 className="lg:w-[7.5rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
                        Back Document
                      </h1>
                      <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#858095] border-[0.0625rem] border-dashed border-opacity-50 pl-[1.25rem] rounded-md">
                      <label htmlFor="idFront" className="relative inline-flex items-center">
                        <span className=" text-gray-500 py-[1.4rem] px-3 rounded-l-md">
                         <img src={upload} alt="" />
                        </span>
                        <span className="bg-transparent py-[1.1rem] px-3 rounded-r-md w-[200px] leading-[16px] text-[#808595] text-[11px] ">
                          Drag and drop image here of Browse
                        </span>
                      </label>
                      <input
                        type="file"
                        accept=".jpg"
                        id="idFront"
                        name="idFront"
                        {...formik.getFieldProps("idFront")}
                        className="hidden"
                      />
                      </div>
                    </div>
                    {/**Back Document */}

                    {/** Notice */}
                      <div className="flex justify-between bg-[#f7f7f7] rounded-[20px] w-[252.34px] h-[86px] pl-5 pt-2">
                        <div className="flex items-center ">
                          <img src={triangle} alt="" className="w-[27.25px] h-[25px] absolute "/>
                          <img src={exclamation} alt="" className="w-[7.25px] h-[15px] absolute left-[50.99px] my-2" />
                        </div>
                        <div className="flex flex-col relative w-[195px] text-[13px]">
                        <h1 className="text-primary-main text-[16px] leading-[23px] font-[500] w-[157px]"> Important Notice</h1>
                        <p>The uploaded I.D must carry the same name you registered with</p>
                        </div>
                      </div>
                    {/** Notice */}
                
                    {/**button */}
                    <button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className={` mt-[0.625rem] lg:mt-[0] font-Jost not-italic font-regular items-center text-primary-main ${
                        formik.isSubmitting && "opacity-[0.35]"
                      } `}
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
{/**Upload Identity Documents */}

{/**Proof of Adress */}
      <Disclosure
        as="div"
        className=" lg:w-[43.75rem]  mt-[1.875rem] rounded-[1.25rem] border-[0.0625rem] border-[#A4A4A4] p-[1.25rem] "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className=" flex lg:flex-row justify-between items-center w-full font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main  ">
            <span className="flex items-center space-x-2">{<img className="w-[20px] h-[20px]" src={incomplete} alt="" />}<span>Proof of Address</span></span>
            <div className="flex flex-row justify-center items-center px-[5px] gap-[10px]">
              <span className="rounded-[20px] px-[5px] gap-[10px] bg-[#F7F7F7] w-[35px] h-[16px] font-jost font-normal text-xs leading-4 text-[#A4A4A4] flex order-0">0/4</span>
                {open ? <FiChevronDown /> : <FiChevronRight />}
                </div>
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
{/**Proof of Adress */}
  </div>
  );
}

export default Verifications;
