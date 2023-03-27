import { configureStore } from "@reduxjs/toolkit";
import donateSlice from "./donateSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    donate: donateSlice,
    user: userSlice,
  },
});
