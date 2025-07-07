import { configureStore } from "@reduxjs/toolkit";
import favouratesReducer from "../functionality/favouratesSlice.js";

export const store = configureStore({
  reducer: favouratesReducer,
});
