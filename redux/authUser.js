import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "authData",
  initialState: { value: {} },
  reducers: {
    setAuthUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
