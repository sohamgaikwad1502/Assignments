import { configureStore } from "@reduxjs/toolkit";
import initialDataReducer from "./slices/initialDataSlice";
import launchReducer from "./slices/launchSlice";
import launchAndLandReducer from "./slices/launchAndLandSlice";
import launchLandYearReducer from "./slices/launchLandYearSlice";

const store = configureStore({
  reducer: {
    initialData: initialDataReducer,
    launch_success: launchReducer,
    launch_and_land: launchAndLandReducer,
    launch_land_year: launchLandYearReducer,
  },
});

export default store;
