import { createSlice } from "@reduxjs/toolkit";
export const mainCategory = createSlice({
  name: "selctedMainCategory",
  initialState: {
    value: "All",
  },
  reducers: {
    selectMainCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { selectMainCategory } = mainCategory.actions;

export default mainCategory.reducer;
