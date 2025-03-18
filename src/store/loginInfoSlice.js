import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  jwtToken: "",
};

const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState,
  reducers: {
    addEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { addEmail } = loginInfoSlice.actions;
export default loginInfoSlice.reducer;
