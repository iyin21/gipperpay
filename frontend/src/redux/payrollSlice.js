import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"


const initialState = {
    organization : {},
    activePage: false,
    countryOptions:{
        name:'',
        flag:''
    },
    isFreelance: false,
    freelance:{},
    isModalActive: false
}

export const payrollSlice = createSlice({
    name:"payroll",
    initialState,
    reducers:{
        addOrganizationProfile:(state,action) => {
            // const data = action.payload
            // const newDonation = {...state.Donation, data}
            // state.Donation = newDonation
            state.organization = action.payload
            toast.success(`Organization ${action.payload.company} has been successfully created`)
            
        },
        setActivePayrollPage :(state,action)=>{
            state.activePage = action.payload
        },
        setFreelancePage :(state, action) =>{
        state.isFreelance = action.payload
        },
        setCountryOptions :(state, action) =>{
            state.countryOptions = action.payload
        },
        addFreelanceDetails:(state, action) =>{
            state.freelance = action.payload
        },
        showActiveModal :(state, action) =>{
            state.isModalActive = action.payload
        }
    }
})

export const {addOrganizationProfile, setActivePayrollPage, setCountryOptions, setFreelancePage, addFreelanceDetails, showActiveModal} = payrollSlice.actions
export default payrollSlice.reducer

