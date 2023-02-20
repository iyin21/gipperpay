import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    Donation : localStorage.getItem('donation') ? JSON.parse(localStorage.getItem('donation')) : {},
}

export const donateSlice = createSlice({
    name:"donate",
    initialState,
    reducers:{
        addDonation:(state,action) => {
            const data = action.payload
            const newDonation = {...state.Donation, data}
            state.Donation = newDonation
            toast.success(`Donation ${action.payload.name} Has been successfully created`)
            localStorage.setItem('donation', JSON.stringify(state.Donation))
        }
    }
})

export const {addDonation} = donateSlice.actions
export default donateSlice.reducer

