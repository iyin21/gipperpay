import { useFormik } from "formik";
import React, { useRef } from "react";
import { BsUpload } from "react-icons/bs";
import "react-phone-number-input/style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { addUserData } from "../../../../../redux/userSlice";

function UploadButton() {
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
    <div className="lg:w-[14.0625rem] ">
    <button onClick={handleUploadClick} className="xs:flex xs:mx-auto sm:flex sm:mx-auto">
      <div className=" flex flex-row m-auto mt-[0.625rem] lg:m-0 lg:mt-0  justify-center w-[8rem] h-[2.5rem] lg:ml-[6.25rem] rounded-[6.25rem] border-[0.0625rem] border-primary-main text-primary-main items-center ">
        <BsUpload />
        <h1 className="ml-[0.625rem] text-s ">Upload</h1>
      </div>
    </button>

    {/* 👇 Notice the `display: hidden` on the input */}
    <input
      type="file"
       accept=".png, .jpg, .jpeg"
      ref={inputRef}
      name="imageUploader"
      value={values.image}
      onChange={(e) =>
        setFieldValue("imageUploader", e.target.files[0], false)
      }
      className="hidden"
    />
    {values.imageUploader ? `${values.imageUploader.name}` : null}
    <h1 className=" lg:w-[14.0625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-white-30 mt-[0.625rem] items-center ">
      Png or JPEG not bigger than 500x500px
    </h1>
  </div>
  )
}

export default UploadButton
