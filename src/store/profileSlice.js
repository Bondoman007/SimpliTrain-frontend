import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    bio: "",
    education: [],
    workExperience: [],
  },
  reducers: {
    updateBio: (state, action) => {
      state.bio = action.payload;
    },
    updatePersonalInfo: (state, action) => {
      const { firstName, lastName, age, gender, address } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.age = age;
      state.gender = gender;
      state.address = address;
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    updateEducation: (state, action) => {
      const { id, updatedEducation } = action.payload;
      state.education = state.education.map((edu) =>
        edu.id === id ? { ...edu, ...updatedEducation } : edu
      );
    },

    addWorkExperience: (state, action) => {
      state.workExperience.push(action.payload);
    },
    updateWorkExperience: (state, action) => {
      const { id, updatedWork } = action.payload;
      state.workExperience = state.workExperience.map((work) =>
        work.id === id ? { ...work, ...updatedWork } : work
      );
    },
  },
});

export const {
  updateBio,
  updatePersonalInfo,
  addEducation,
  updateEducation,
  addWorkExperience,
  updateWorkExperience,
} = profileSlice.actions;

export default profileSlice.reducer;
