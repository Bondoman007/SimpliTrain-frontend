import { createSlice } from "@reduxjs/toolkit";

export const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState: {
    email: null,
    user: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = loginInfoSlice.actions;

export default loginInfoSlice.reducer;
