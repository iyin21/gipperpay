import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BsChevronDown } from "react-icons/bs";
import ModalBackDrop from "../../../../../widgets/Modal/ModalBackDrop";
import Logo from "../../../../../assets/orgLogo.png";
import CustomInput from "../../../../../components/form/CustomInput";
import CustomLabel from "../../../../../components/form/CustomLabel";
import CustomTextArea from "../../../../../components/form/CustomTextArea";
import CustomButton from "../../../../../components/form/CustomButton";
import { addOrganizationProfile,setActivePayrollPage } from "../../../../../redux/payrollSlice";
import { useDispatch } from "react-redux";
import { setCountryOptions } from "../../../../../redux/payrollSlice";

export const initialState = {
  employees: "",
  company: "",
  country: "Nigeria",
  adminName: "",
  email: "",
  description: "",
}
const OrganizationProfile = (props) => {
  const [countries, setCountries] = useState([]);
  const[error, setError] = useState('')
  
  const [formValues, setFormValues] = useState(initialState);
  const { employees, company, country, adminName, email, description } =
    formValues;
  const { showOrgModal, setShowOrgModal } = props;
  const dispatch = useDispatch()
 
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryOptions = response.data.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
        }));
        dispatch(setCountryOptions(countryOptions))
        setCountries(countryOptions);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(Object.keys(formValues).length === 0)
    if(Object.keys(formValues).length === 0){
      setError('Please submit all details')
    }
    dispatch(addOrganizationProfile(formValues))
    dispatch(setActivePayrollPage(true))
  };
  console.log(formValues)
  if(!showOrgModal) return null
  console.log(showOrgModal)
  return (
    <ModalBackDrop
      showOrgModal={showOrgModal}
      setShowOrgModal={setShowOrgModal}
      stepper={false}
      
      text="Organization"
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full rounded-2xl lg:w-[45rem] mx-auto mt-32 lg:mt-5 h-[40rem] bg-whiteText px-8 lg:px-10 pt-11"
      >
        <form className="w-full" onSubmit={handleFormSubmit}>
          {error && <p className="text-red-400">{error}</p>}
          <div className="flex w-full gap-4 h-auto items-center">
            <img src={Logo} alt="logo" className="" />

            <div>
              <p className="text-secondary-50 font-medium text-sm ">
                Create Profile
              </p>
              <p className="text-lightWhite leading[18px] my-1 font-medium text-xs">
                Create a payroll for your workers
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <div className="my-2">
              <CustomLabel>Description of company</CustomLabel>
              <CustomTextArea
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <CustomLabel>How many employees</CustomLabel>
              <CustomInput
                name="employees"
                value={employees}
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <CustomLabel>Name of the company</CustomLabel>
              <CustomInput
                name="company"
                value={company}
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <CustomLabel>Country</CustomLabel>
              <div className="relative lg:inline-block">
              
              <select
                className="appearance-none w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5 flex gap-3 items-center"
                value={country}
                onChange={handleChange}
                name="country"
              >
                {countries.map((country) => (
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
              <CustomLabel>Admin name</CustomLabel>
              <CustomInput
                name="adminName"
                value={adminName}
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <CustomLabel>Business email</CustomLabel>
              <CustomInput name="email" value={email} onChange={handleChange} />
            </div>
            
          </div>
          <div className="my-2">
            <CustomButton>Create</CustomButton>
          </div>
        </form>
      </motion.div>
    </ModalBackDrop>
  );
};

export default OrganizationProfile;
