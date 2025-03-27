import { createSlice } from "@reduxjs/toolkit";

const launchLandYearSlice = createSlice({
  name: "launchAndYear",
  initialState: null,
  reducers: {
    addLaunchAndYear: (state, action) => {
      return action.payload;
    },
  },
});

export const { addLaunchAndYear } = launchLandYearSlice.actions;
export default launchLandYearSlice.reducer;
