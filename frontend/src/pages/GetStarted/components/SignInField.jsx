import React from "react";
import { logo } from "../../../assets";
import { mail } from "../../../icons";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addUserData } from "../../../redux/userSlice";
import CustomPasswordInput from "../../../widgets/inputs/CustomPasswordInput";

function SignInField() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        data
      );
      console.log("Response is:", response);
      if (response.data.data.status === 404) {
        toast.error("Oops user does not exists");
      }
      switch (response.data.data) {
        case true:
          const userData = await axios.get(
            `http://localhost:3000/users/email/${values.email}`
          );
          console.log("This is the userData:", userData.data);
          const data = userData.data;
          dispatch(addUserData({ data }));
          toast.success("Logged In Successfully");
          navigate("/dashboard");

          break;

        default:
          toast.error(" Try again ");
          break;
      }
    } catch (error) {
      console.log("error:", error);
      switch (error.response.data.data.status) {
        case 403:
          toast.error("Invalid password");
          break;

        default:
          toast.error("Pls try again");
          break;
      }
    }
  };
  const { values, handleChange, handleBlur, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

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
      <h1 className="my-[1.25rem] mx-auto w-[12.0625rem] h-[2.5rem] font-Jost font-big text-l leading-[2.5rem] items-center text-secondary-main ">
        Welcome Back
      </h1>
      <h1 className="text-center w-full lg:h-[2.5rem]  font-Jost font-regular text-s leading-[1.4375rem] items-center text-secondary-30 ">
        Please enter your details
      </h1>
      {/**INPUT FIELDS */}
      <form onSubmit={handleSubmit} className=" mt-[2.5rem] ">
        {/**Email */}
        <div className="mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Email
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  "border-[#858095]"  border-[0.0625rem] pl-[1.25rem] rounded-md`}
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
        </div>
        {/**Email */}
        {/**PASSWORD */}
        <div className="mx-auto w-full lg:w-[21.8rem] mt-[1.25rem] ">
          <h1 className="lg:w-[3.9375rem] lg:h-[1.1875rem] font-Jost font-medium text-xs leading-[1.1875rem] items-center mb-[0.3125rem] text-secondary-main ">
            Password
          </h1>
          <div
            className={`flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]  "border-[#858095]" border-[0.0625rem]  rounded-md`}
          >
            <CustomPasswordInput
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
        </div>
        {/**PASSWORD */}
        {/**BUTTON*/}
        <div className=" lg:mx-auto w-[20.1875rem] my-[2.5rem] ">
          <Button name="Sign In" isSubmitting={isSubmitting} />
        </div>
        {/**BUTTON*/}
        <h1 className="w-[190px] h-[1.4375rem] mx-auto font-Jost font-regular text-s leading-[1.4375rem] items-center text-secondary-main ">
          No account?{" "}
          <Link to="/getStarted">
            <span className="text-primary-main">Register Here</span>
          </Link>
        </h1>
      </form>
      {/**INPUT FIELDS */}
    </motion.div>
  );
}

export default SignInField;
