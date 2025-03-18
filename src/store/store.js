import { configureStore } from "@reduxjs/toolkit";
import loginInfoReducer from "./loginInfoSlice";
import configAppReducer from "./configAppSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    loginInfo: loginInfoReducer,
    configApp: configAppReducer,
    profile: profileReducer,
  },
});

export default store;
