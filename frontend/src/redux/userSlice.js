import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, { payload }) => {
      console.log("This is the payload", payload);
      const data = payload.data;
      const newUserData = { ...state.user, data };
      state.user = newUserData;
      console.log("New state is:", state.user);
    },
  },
});

export const { addUserData } = userSlice.actions;

export default userSlice.reducer;
