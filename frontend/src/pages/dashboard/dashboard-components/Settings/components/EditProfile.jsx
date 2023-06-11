import { useFormik } from "formik";
import React, { useRef } from "react";
import Avatar from "react-avatar";
import { BsUpload } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { mail } from "../../../../../assets/index";
import Button from "../../../../GetStarted/components/Button";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { addUserData } from "../../../../../redux/userSlice";
import CustomPasswordInput from "../../../../../widgets/inputs/CustomPasswordInput";
import UploadButton from "./UploadButton";
 
function EditProfile() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };
  // const onSubmit = () => {

  // };
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      gipperTag: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      country: "",
      dob: "",
      email: ""
    },
    onSubmit: async (values, actions) => {
      const data = {
        gipperTag: values.gipperTag,
        firstName: values.firstName,
        lastName: values.lastName,
        email: user.data.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        profileAviUrl: values.imageUploader.name,
        country: values.country,
        dob: values.dob,
      };
      try {
        //const startKyc = await axios.post("http://localhost:3000/user");
        const response = await axios.patch(
          `http://localhost:3000/users/${user.data.userId}`,
          data
        );
        console.log("response is :", response);
        if (response.status === 200) {
          const userData = await axios.get(
            `http://localhost:3000/users/email/${user.data.email}`
          );
          console.log("This is the userData:", userData.data);
          const data = userData.data;
          dispatch(addUserData({ data }));
          toast.success("Profile updated sucessfully");
        }
      } catch (error) {
      } finally {
        actions.resetForm();
      }
    },
  });
  return (
    <div className="lg:w-full mt-[1.25rem] ">
      <div className=" hidden lg:flex lg:flex-col ">
        <h1 className=" w-[10.75rem] font-Jost not-italic font-medium text-sm leading-[1.6875rem] text-secondary-main ">
          Personal Information
        </h1>
        <h1 className=" w-[22.625rem]  font-Jost not-italic font-regular text-[0.6875rem]  leading-[1rem] text-white-30 ">
          Here's what we know about you. Please do update it if there have been
          any recent changes.
        </h1>
      </div>
      <div className=" flex flex-col lg:flex-row lg:mt-[1.25rem] lg:justify-between justify-center items-center  ">
        <div className=" lg:flex lg:flex-row items-center ">
          <Avatar
            name={`${values.firstName}  ${values.lastName}`}
            round={true}
            size="80"
            src=""
          />

          <h1 className=" hidden lg:flex  ml-[1.25rem] font-Jost not-italic font-medium text-s leading-[1.4375rem] text-secondary-main ">
            {values.firstName} {values.lastName}
          </h1>
        </div>
        <div className="lg:w-[14.0625rem] ">
        <UploadButton />
        </div>
      </div>
      {/**Inputform */}
      <form
        className="  px-[0.625rem] lg:px-0 mt-[2.5rem] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-[2.5rem]  items-center "
        onSubmit={handleSubmit}
      >
        {/**GipperTag */}
        {/* <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Username
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-white-70 w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md">
            <input
              type="text"
              name="gipperTag"
              value={values.gipperTag}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={`${values.gipperTag}`}
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
        </div> */}
        {/**GipperTag */}
        {/**FIRST NAME */}
        <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            First Name
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-white-70 w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md">
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={`${values.firstName}`}
              maxLength={20} 
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
        </div>
        {/**FIRST NAME */}
        {/**LAST NAME */}
        <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Last Name
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-white-70 w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md">
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={`${values.lastName}`}
              maxLength={20} 
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
        </div>
        {/**LAST NAME */}
{/**EMAIL */}
<div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Email
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-white-70 w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="example@mail.com"
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
        </div>
{/**EMAIL */}
        {/**PHONE NUMBER  */}
        <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[5.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Phone Number
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full  lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  border-[#858095] border-[0.0625rem] rounded-md">
            <PhoneInput
              defaultCountry="NG"
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={(e) => setFieldValue("phoneNumber", e, false)}
              //onBlur={handleBlur("phoneNumber")}
              placeholder={`${values.phoneNumber}`}
              className=" bg-transparent text-white-30 placeholder:text-white-30 py-[1.1rem] pl-3 w-full h-full "
            />
          </div>
        </div>
        {/**PHONE NUMBER */}
        {/**PASSWORD */}
        {/* <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Password
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-white-70 w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md">
            <CustomPasswordInput
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
        </div> */}
        {/**PASSWORD */}
        {/**DOB */}
        {/* <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[5.1875rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Date of Birth
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-white-70 w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md">
            <input
              type="text"
              name="dob"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="dd/mm/yyyy"
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
        </div> */}
        {/**DOB */}
        {/**Country */}
        {/* <div className="mx-auto mt-[1.25rem] lg:mt-0 w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Country
          </h1>
          <div className="flex mt-[0.6rem] items-center bg-white-70 w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  pl-[1.25rem] rounded-md">
            <input
              type="text"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="eg. Nigeria"
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
        </div> */}
        {/**Country */}
        {/**BUTTON*/}
        <div className=" w-[20.1875rem] mx-auto mt-[2.5rem] lg:mx-0 xs:w-full">
          <Button
            name="Update"
            isSubmitting={isSubmitting}
            radius="rounded-[6.25rem]"
          />
        </div>
        {/**BUTTON*/}
      </form>
      {/**Inputform */}
    </div>
  );
}

export default EditProfile;
