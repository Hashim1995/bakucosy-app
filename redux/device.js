import { createSlice } from "@reduxjs/toolkit";
export const deviceSlice = createSlice({
  name: "isMobile",
  initialState: {
    value: false,
  },
  reducers: {
    detectDevice: (state) => {
      state.value = !state.value;
    },
  },
});
export const { detectDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
