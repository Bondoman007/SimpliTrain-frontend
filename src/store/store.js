import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import loginInfoReducer from "./loginInfoSlice";
import configAppReducer from "./configAppSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loginInfo: loginInfoReducer,
    configApp: configAppReducer,
  },
});

export default store;
