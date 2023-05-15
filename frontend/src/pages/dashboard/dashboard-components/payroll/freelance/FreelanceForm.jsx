import React,{useState} from 'react'
import {BsChevronDown } from "react-icons/bs"
import { useSelector } from 'react-redux'
import CustomInput from '../../../../../components/form/CustomInput'
import CustomLabel from '../../../../../components/form/CustomLabel'
import CustomTextArea from '../../../../../components/form/CustomTextArea'
import CustomButton from '../../../../../components/form/CustomButton'
import { gustCoin } from '../../../../../assets'
import { downIcon } from '../../../../../icons'
import { payrollItems } from '../Payroll'
const initialState = {
    gust: "",
    firstName:"",
    lastName:"",
   
    jobType:"",
    jobPayer:"",
    
    country: "Nigeria",
    email: "",
    description: "",
  }
const FreelanceForm = () => {
    const [formValues, setFormValues] = useState(initialState);
  const { gust, firstName, lastName, jobPayer, jobType, country, email, description } =
    formValues;
  const handleChange =(e) =>{

  }
  const {countryOptions} = useSelector(state =>state.payroll)
  console.log(countryOptions)
  return (
    <div>
        {payrollItems.map(({ img, title, desc, checker }, index) => (
        !checker && <div
            key={index}
            
            className={
              
                 "bg-lightGreen rounded-md px-4 py-3 flex h-auto gap-3 items-center w-full"
            }
          >
            <div className="w-[40px] h-[40px] rounded-full flex justify-center text-center items-center bg-whiteText">
              <img src={img} alt={title} className="w-[10px] h-auto" />
            </div>

            <div>
              <p className="text-secondary-50 font-medium text-sm ">{title}</p>
              <p className="text-lightWhite w-full leading[18px] my-3 font-medium text-xs">
                {desc}
              </p>
            </div>
          </div>
        ))}
        <h3 className='text-center text-s font-medium mt-2'>Send invoice</h3>
        <form>
            <div className='my-2'>
            <CustomLabel>Select Gust</CustomLabel>
               
            <div className="w-full border-[1px] px-5 h-auto bg-white-60 py-[14px] flex flex-row justify-between items-between rounded-[5px] border-primary-90 ">
             <div className='flex h-auto gap-2 justify-center'>
             <img src={gustCoin} alt="gustCoin"  className="w-[20px] h-[20px]" />
              <h1 className="w-[32px] h-[19px] not-italic font-regular text-xs leading-[19px] text-white-30 mr-[10px] ">
                GU$T
              </h1>
              <img
                src={downIcon}
                alt="downIcon"
                className="w-[20px] h-[20px]"
              />
             </div>
             <p className='text-s font-normal text-white-30'>$0.00</p>
            </div>
          
            </div>
            {/* <div className="my-2">
              <CustomLabel>Country</CustomLabel>
              <div className="relative lg:inline-block">
              
              <select
                className="appearance-none w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5 flex gap-3 items-center"
                value={country}
                onChange={handleChange}
                name="country"
              >
               Select
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              
                <BsChevronDown size={10} />
              </div>
              </div>
            </div> */}
        <div className="my-2">
              <CustomLabel>First Name</CustomLabel>
              <CustomInput
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="Mary"
              />
            </div>
            <div className="my-2">
              <CustomLabel>Last Name</CustomLabel>
              <CustomInput
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Stanfield"
              />
            </div>
            <div className="my-2">
              <CustomLabel>Type of job done</CustomLabel>
              <CustomInput
                name="jobType"
                value={jobType}
                onChange={handleChange}
                placeholder="UI design"
              />
            </div>
            <div className="my-2">
              <CustomLabel>Country</CustomLabel>
              <div className="relative lg:inline-block">
              
              {/* <select
                className="appearance-none w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5 flex gap-3 items-center"
                value={country}
                onChange={handleChange}
                name="country"
              >
                {countryOptions?.map((country) => (
                  <option
                    value={country.name}o0
                    key={country.name}
                    className="w-[20rem]"
                  >
                    <img src={country.flag} alt={country.name} />
                    {country.name}
                  </option>
                ))}
              </select> */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              
                <BsChevronDown size={10} />
              </div>
              </div>
            </div>
            <div className="my-2">
              <CustomLabel>Name of Payer</CustomLabel>
              <CustomInput
                name="jobPayer"
                value={jobPayer}
                onChange={handleChange}
                placeholder="Gipper"
              />
            </div>
            <div className="my-2">
              <CustomLabel>Payer email</CustomLabel>
              <CustomInput
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="-Enter email-"
              />
            </div>
            <div className="my-2">
              <CustomLabel>Job description</CustomLabel>
              <CustomTextArea
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
            <div className="my-2 flex justify-center m-auto">
            <CustomButton>Create Link</CustomButton>
          </div>
        </form>
    </div>
  )
}

export default FreelanceForm