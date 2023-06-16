import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {BsChevronDown } from "react-icons/bs"
import CustomInput from '../../../../../components/form/CustomInput'
import CustomButton from '../../../../../components/form/CustomButton'
import CustomTextArea from '../../../../../components/form/CustomTextArea'
import CustomLabel from '../../../../../components/form/CustomLabel'
import { gustCoin } from '../../../../../assets'
import { downIcon } from '../../../../../icons'
import { addFreelanceDetails } from '../../../../../redux/payrollSlice'
import PayrollLinkModal from '../organization/PayrollLinkModal'
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
    const [error, setError] = useState('')
    const [countries, setCountries] = useState([])
    const[showLinkModal, setShowLinkModal] = useState(false)
    const { gust, firstName, lastName, jobPayer, jobType, country, email, description } =
      formValues;
    const handleChange =(e) =>{
      setError('')
     const {name, value} = e.target
     setFormValues({...formValues, [name]: value})
     setError('')
    }

    const dispatch = useDispatch()
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await axios.get("https://restcountries.com/v3.1/all");
          const countryOptions = response.data.map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
          }));
         
          setCountries(countryOptions);
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
      };
  
      fetchCountries();
    });
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!gust || !firstName || !lastName || !jobPayer || !jobType || !email ||!description){
      setError('please submit all details')
    }else{
      dispatch(addFreelanceDetails(formValues))
      setShowLinkModal(true)
      console.log('open link')
    }
      
    console.log(showLinkModal)
    
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      {error && <p className='text-red-400'>{error}</p>}
    <div className='my-2'>
    <CustomLabel>Select Coin and Amount to receive</CustomLabel>
       
    <div className="w-full border-[1px] px-5 h-auto bg-white-60 py-[14px] flex flex-row justify-between items-between rounded-[5px] border-primary-90 ">
     
     <div className='flex h-auto w-full flex- gap-2 '>
     <img src={gustCoin} alt="gustCoin"  className="w-[20px] h-[20px]" />
      <h1 className="w-[32px] h-[19px] not-italic font-regular text-xs leading-[19px] text-white-30 mr-[5px] ">
        GU$T
      </h1>
      <img
        src={downIcon}
        alt="downIcon"
        className="w-[20px] h-[20px]"
      />
     </div>
     
     <input value={gust} name="gust" onChange={handleChange} className="w-[20%] text-left text-s font-normal text-white-30" placeholder="$0.00"/>
     {/* <p className='text-s font-normal text-white-30'>$0.00</p> */}
    </div>
  
    </div>
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
      <div className="relative w-full lg:block">
      
      <select
        className="appearance-none w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5 flex gap-3 items-center"
        value={country}
        onChange={handleChange}
        name="country"
      >
        {countries?.map((country) => (
          <option
            value={country.name}o0
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
{showLinkModal && <PayrollLinkModal setShowLinkModal={setShowLinkModal} checker={true}/>}
    </>
  )
}

export default FreelanceForm