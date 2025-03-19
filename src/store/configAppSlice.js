import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfoEditShow: false,
  bioEditShow: false,
  preferredLanguageEditShow: false,
  intrestedTopicEditShow: false,
  socialMediaEditShow: false,
};

const configAppSlice = createSlice({
  name: "cofigApp",
  initialState,
  reducers: {
    bioEditShowOption(state, action) {
      state.bioEditShow = action.payload;
    },
    personalInfoEditShowOption(state, action) {
      state.personalInfoEditShow = action.payload;
    },
    preferredLanguageEditShowOption(state, action) {
      state.preferredLanguageEditShow = action.payload;
    },
    socialMediaEditShowOption(state, action) {
      state.socialMediaEditShow = action.payload;
    },
    intrestedTopicEditShow(state, action) {
      state.intrestedTopicEditShow = action.payload;
    },
  },
});

export const {
  intrestedTopicEditShow,
  socialMediaEditShowOption,
  preferredLanguageEditShowOption,
  personalInfoEditShowOption,
  bioEditShowOption,
} = configAppSlice.actions;
export default configAppSlice.reducer;
