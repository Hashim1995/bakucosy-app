import { createSlice } from "@reduxjs/toolkit";
export const deviceSlice = createSlice({
  name: "isMobile",
  initialState: {
    value: false,
  },
  reducers: {
    detectDevice: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { detectDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
