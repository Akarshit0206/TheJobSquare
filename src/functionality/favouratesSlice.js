import { createSlice } from "@reduxjs/toolkit";

const initialState = { favourates: {} };
const favouratesSlice = createSlice({
  name: "favourates",
  initialState,
  reducers: {
    addFavourates: (state, action) => {
      state.favourates[action.payload.id] = {
        title: action.payload.title,
        contract_time: action.payload.contract_time,
        salary_min: action.payload.salary_min,
        salary_max: action.payload.salary_max,
        companyName: action.payload.company.display_name,
        redirect_url: action.payload.redirect_url,
        location: action.payload.location.display_name,
      };
    },
    removeFavourates: (state, action) => {
      for (let id in state.favourates) {
        if (id == action.payload) {
          delete state.favourates[id];
        }
      }
    },
    favouratesCache: (state, action) => {
      state.favourates = action.payload;
    },
  },
});

export const { addFavourates, removeFavourates, favouratesCache } =
  favouratesSlice.actions;
export default favouratesSlice.reducer;
