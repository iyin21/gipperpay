import { configureStore } from "@reduxjs/toolkit";
import donateSlice from "./donateSlice";

export const store = configureStore({
    reducer:{
        donate: donateSlice,
    } 
})
