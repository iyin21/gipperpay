import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { dropIn } from "./PayrollLinkModal";
import { useSelector } from "react-redux";
import PayrollHeader from "../components/PayrollHeader";
import OrgLogo from "../../../../../assets/payroll/orgLogo.png";
import Card from "../components/Card";
import CustomButton from "../../../../../components/form/CustomButton";
import CustomInput from "../../../../../components/form/CustomInput";
import CustomLabel from "../../../../../components/form/CustomLabel";
import ConfirmOTP from "./ConfirmOTP";
import BuyAndSellSuccessModal from "../../../../../widgets/Modal/buy/BuyAndSellSuccessModal";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  wallet: "",
  identity: "",
  country: "Nigeria",
};

const EmployeeModal = ({  setShowEmployeeModal }) => {
  const [activeLink, setActiveLink] = useState(0);
  const [images, setImages] = useState([]);
  const [formValues, setFormValues] = useState(initialState);
  const { firstName, lastName, email, wallet, country } = formValues;
  const [showOTPModal, setShowOTPModal] = useState(false);
  const { countries } = useSelector((state) => state.payroll);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleNext = () =>{
    setActiveLink((prev) => prev + 1)
  }

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    noClick: true,
    noKeyboard: true,
  });
  console.log(acceptedFiles);
  const removeFile = () => {
    setImages([]);
  };
  const lists = images.map((file) => (
    <div key={file.name} className="bg-white-Main my-3 px-8 py-3 rounded-md">
      <div className="flex justify-between items-center h-auto cursor-pointer">
        <img
          src={file.preview}
          alt={file.name}
          className="w-[100px] h-[50px] object-cover"
        />
        <AiFillCloseCircle size="1rem" color="#7B7B7B" onClick={removeFile} />
      </div>
    </div>
  ));
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext()
    setShowOTPModal(true);
  };
  
  return (
    <>
     <div className="fixed overflow-y-auto left-0 top-0 w-full h-[100vh] flex bg-whiteText z-50">
        <div className="w-full">
          <PayrollHeader setShowEmployeeModal={setShowEmployeeModal} />
         {activeLink === 0 ?
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex justify-center bg-white-Main  m-auto w-full h-full lg:pt-4"
          >
            <div className="w-full lg:w-[50%] bg-whiteText rounded-md py-4 px-8">
              <div className="lg:w-full ">
                <Card
                  title="Employee form"
                  desc="All Payment would be made in crypto"
                  image={OrgLogo}
                  className="lg:w-1/2 w-full bg-lightGreen"
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div className=" flex flex-col gap-6 lg:grid lg:grid-cols-2">
                  <div className="my-2">
                    <CustomLabel>First Name</CustomLabel>
                    <CustomInput
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                      placeholder="Gipper"
                    />
                  </div>
                  <div className="my-2">
                    <CustomLabel>Last Name</CustomLabel>
                    <CustomInput
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                      placeholder="Pay"
                    />
                  </div>
                  <div className="my-2">
                    <CustomLabel>Email address</CustomLabel>
                    <CustomInput
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="gipper@gmail.com"
                    />
                  </div>
                  <div className="my-2">
                    <CustomLabel>Enter USDT (ERC20) address</CustomLabel>
                    <CustomInput
                      name="wallet"
                      value={wallet}
                      onChange={handleChange}
                      placeholder="Pay"
                    />
                  </div>
                  <div className="my-2">
                    <CustomLabel>Means of identification</CustomLabel>
                    <div className=" relative lg:block">
                      <select
                        className="bg-[#FFFFFF] appearance-none w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5 flex gap-3 items-center"
                        value={country}
                        onChange={handleChange}
                        name="country"
                      >
                        <option
                          className="text-secondary-30"
                          value="none"
                          selected
                          disabled
                          hidden
                        >
                          --Choose document--
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <BsChevronDown size={10} />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <CustomLabel>Country</CustomLabel>
                    <div className="relative lg:block">
                      <select
                        className="appearance-none w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5 flex gap-3 items-center"
                        value={country}
                        onChange={handleChange}
                        name="country"
                      >
                        <option
                          className="text-secondary-30"
                          value="none"
                          selected
                          disabled
                          hidden
                        >
                          {country}
                        </option>
                        {countries?.map((country) => (
                          <option
                            value={country.name}
                            key={country.name}
                            className="w-[20rem]"
                          >
                            <img src={country.flag} alt={country.name} />
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <BsChevronDown size={10} />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <CustomLabel>Identity document</CustomLabel>
                    <section className="cursor-pointer py-8 flex justify-center h-auto items-center border-2 border-spacing-7 border-dashed rounded-md  border-gray-400">
                      <div
                        className="dropbox"
                        {...getRootProps({
                          isDragAccept,
                          isFocused,
                          isDragReject,
                        })}
                      >
                        <input {...getInputProps()} />
                        <p className="text-xs text-secondary-30 font-regular gap-2 leading-5 flex items-center h-auto">
                          <FiUpload color="#5C5571" onClick={open} />
                          Drag and drop image here or{" "}
                          <span className="text-secondary-main" onClick={open}>
                            Browse
                          </span>
                        </p>
                      </div>
                    </section>
                    {images && (
                      <aside>
                        <p>{lists}</p>
                      </aside>
                    )}
                  </div>
                </div>
                <div className="my-2">
                  <CustomButton>Submit</CustomButton>
                </div>
              </form>
            </div>
          </motion.div> : activeLink === 1 ?
          <ConfirmOTP
          showOTPModal={showOTPModal}
          setShowOTPModal={setShowOTPModal}
          firstName={firstName}
          handleNext={handleNext}
          setShowEmployeeModal={setShowEmployeeModal}
        /> : activeLink === 2 ? <BuyAndSellSuccessModal desc="Employee details received" firstName={firstName}/>  : ""
}
        </div>
      </div>    
     
      
    </>
  );
};

export default EmployeeModal;
