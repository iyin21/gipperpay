import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isCrypto: false,
    isPayout: false,
    coins: {
        name:'',
        current_price:''
    }
}
export const gipperfiSlice = createSlice({
    name:"gipperfi",
    initialState,
    reducers:{
        setActiveCryptoPage:(state,action)=>{
            state.isCrypto = action.payload
        },
        setAmountToInvest:(state, action) =>{
            state.coins = action.payload
        },
        setActivePayoutPage :(state, action) =>{
            state.isPayout = action.payload
        }
    }
})

export const {setActiveCryptoPage, setAmountToInvest, setActivePayoutPage} = gipperfiSlice.actions
export default gipperfiSlice.reducer