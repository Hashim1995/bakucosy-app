import { createSlice } from "@reduxjs/toolkit";
export const loggedUserslice = createSlice({
  name: "loggedUser",
  initialState: {
    value: {
      isLogged: false,
      user: {},
    },
  },
  reducers: {
    set_LoggedUser: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { set_LoggedUser } = loggedUserslice.actions;
export default loggedUserslice.reducer;
