import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfoEditShow: false,
};

const configAppSlice = createSlice({
  name: "cofigApp",
  initialState,
  reducers: {
    personalInfoEditShowChange(state) {
      state.personalInfoEditShow = false;
    },
  },
});

export const { personalInfoEditShowChange } = configAppSlice.actions;
export default configAppSlice.reducer;
