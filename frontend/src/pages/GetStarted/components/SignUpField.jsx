import React from "react";
import { logo } from "../../../assets";
import { mail } from "../../../icons";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schemas/index";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomPasswordInput from "../../../widgets/inputs/CustomPasswordInput";

function SignUpField() {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      gipperTag: values.userName,
      profileAviUrl: "",
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
      dob: "",
      country: "",
    };
    try {
      const response = await axios.post("http://localhost:3000/users", data);
      console.log("Response is:", response);
      switch (response.data.status) {
        case 201:
          toast.success(
            "Your account has been sucessfully created, check your email for futher information"
          );
          navigate("/signIn");
          break;
        case 400:
          toast.success("You already have an account pls sign in");
          break;
        case "PENDING":
          toast.success(
            "Your account has been sucessfully created, check your email for futher information"
          );
          navigate("/signIn");
          break;
        default:
          toast.success("Pls try again");
          break;
      }
    } catch (error) {
      console.log("error:", error);
    } finally {
      actions.resetForm();
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    isSubmitting,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      acceptedTos: false,
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
      className="lg:w-[30.1875rem] rounded-[1.25rem] p-[2.5rem] shadow-s bg-white-60 "
    >
      <img
        src={logo}
        alt=""
        className="lg:w-[12.75rem] lg:h-[2.5rem] mx-auto object-contain "
      />
      <h1 className="my-[1.25rem] mx-auto w-[8.8125rem] h-[2.5rem] font-Jost font-medium text-l leading-[2.5rem] items-center text-secondary-main ">
        Get Started
      </h1>
      <h1 className="text-center w-full lg:h-[2.5rem] px-[0.625rem] font-Jost font-regular text-s leading-[1.4375rem] items-center text-secondary-30 ">
        Create an account and start receiving crypto payments and donations
      </h1>
      {/**INPUT FIELDS */}

      <form className=" mt-[2.5rem]" onSubmit={handleSubmit}>
        {/**FIRST NAME */}
        <div className="mx-auto w-full lg:w-[21.8rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            First Name
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] ${
              errors.firstName && touched.firstName
                ? "border-red-400"
                : "border-[#858095]"
            } border-[0.0625rem] pl-[1.25rem] rounded-md`}
          >
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mary"
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
          {errors.firstName && touched.firstName && (
            <p className="text-red-400 ">{errors.firstName}</p>
          )}
        </div>
        {/**FIRST NAME */}
        {/**LAST NAME */}
        <div className="mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Last Name
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] ${
              errors.lastName && touched.lastName
                ? "border-red-400"
                : "border-[#858095]"
            }  border-[0.0625rem] pl-[1.25rem] rounded-md`}
          >
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Stanfield"
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
          {errors.lastName && touched.lastName && (
            <p className="text-red-400 ">{errors.lastName}</p>
          )}
        </div>
        {/**LAST NAME */}
        {/**GIPPERTAG/USERNAME */}
        <div className="mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] ">
          <h1 className="lg:w-[12.6875rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Choose a Username
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] ${
              errors.userName && touched.userName
                ? "border-red-400"
                : "border-[#858095]"
            }  border-[0.0625rem] pl-[1.25rem] rounded-md`}
          >
            <input
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mary_Stanfield"
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
          {errors.userName && touched.userName && (
            <p className="text-red-400 ">{errors.userName}</p>
          )}
        </div>
        {/**GIPPERPAYTAG/USERNAME */}

        {/**Email */}
        <div className="mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Email
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] ${
              errors.email && touched.email
                ? "border-red-400"
                : "border-[#858095]"
            }  border-[0.0625rem] pl-[1.25rem] rounded-md`}
          >
            <div>
              <img src={mail} alt="" />
            </div>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="gipperpay@email.com"
              className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
            />
          </div>
          {errors.email && touched.email && (
            <p className="text-red-400 ">{errors.email}</p>
          )}
        </div>
        {/**Email */}
        {/**PHONE NUMBER  */}
        <div className="mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] ">
          <h1 className="lg:w-[5.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Phone Number
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full h-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  ${
              errors.phoneNumber && touched.phoneNumber
                ? "border-red-400"
                : "border-[#858095]"
            } border-[0.0625rem] rounded-md`}
          >
            <PhoneInput
              defaultCountry="NG"
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={(e) => setFieldValue("phoneNumber", e)}
              onBlur={handleBlur("phoneNumber")}
              placeholder="+234 xxxxxxxxxx"
              className=" bg-transparent text-white-30 placeholder:text-white-30 py-[1.1rem] pl-3 w-full h-full "
            />
          </div>
          {errors.phoneNumber && touched.phoneNumber && (
            <p className="text-red-400 ">{errors.phoneNumber}</p>
          )}
          {/* <Field
                type="tel"
                name="phoneNumber"
                component={CustomInputField}
                value={values.phoneNumber}
              /> */}
        </div>
        {/**PHONE NUMBER */}
        {/**PASSWORD */}
        <div className="mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Password
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] ${
              errors.password && touched.password
                ? "border-red-400"
                : "border-[#858095]"
            } border-[0.0625rem]  rounded-md`}
          >
            <CustomPasswordInput
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          {errors.password && touched.password && (
            <p className="text-red-400 ">{errors.password}</p>
          )}
        </div>
        {/**PASSWORD */}
        {/**CHECKBOX */}
        <div className=" flex flex-row mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] items-center   ">
          <input
            type="checkbox"
            name="acceptedTos"
            value={values.acceptedTos}
            onChange={handleChange}
            onBlur={handleBlur}
            className=" mr-[1.25rem] ml-[1.25rem] "
          />
          <h1 className="lg:w-[14.75rem] w-[13rem] lg:h-[2.375rem] font-Jost font-regular text-xs leading-[1.4375rem] text-secondary-main ">
            Joining means you are okay with our Terms of Service and Privacy
            Policy.
          </h1>
        </div>
        {errors.acceptedTos && touched.acceptedTos && (
          <p className="text-red-400 text-center lg:mt-[0.625rem] ">
            {errors.acceptedTos}
          </p>
        )}
        {/**CHECKBOX */}
        {/**BUTTON*/}
        <div className=" lg:mx-auto w-[20.1875rem] my-[2.5rem] ">
          <Button
            name="Sign Up"
            isSubmitting={isSubmitting}
            isValid={isValid}
            dirty={dirty}
          />
        </div>
        {/**BUTTON*/}
        <h1 className="w-[11rem] h-[1.4375rem] mx-auto font-Jost font-regular text-s leading-[1.4375rem] items-center text-secondary-main ">
          Have an account?{" "}
          <Link to="/signIn">
            <span className="text-primary-main">Sign In</span>
          </Link>
        </h1>
      </form>

      {/**INPUT FIELDS */}
    </motion.div>
  );
}

export default SignUpField;
