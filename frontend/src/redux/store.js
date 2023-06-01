import { configureStore } from "@reduxjs/toolkit";
import donateSlice from "./donateSlice";
import userSlice from "./userSlice";
import payrollSlice from "./payrollSlice";
import gipperfiSlice from "./gipperfiSlice";


export const store = configureStore({
  reducer: {
    donate: donateSlice,
    user: userSlice,
    payroll: payrollSlice,
    gipperfi: gipperfiSlice
  },
});
