import { createSlice } from "@reduxjs/toolkit";

export const user_DB_Slice = createSlice({
  name: "users_DB",
  initialState: {
    value: [],
  },
  reducers: {
    set_User_DB: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { set_User_DB } = user_DB_Slice.actions;
export default user_DB_Slice.reducer;
