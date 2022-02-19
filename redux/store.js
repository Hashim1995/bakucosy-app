import { configureStore } from "@reduxjs/toolkit";
import detectDevice from "./device";
import selectMainCategory from "./selectedMainCategory";
import searchQuery from "./search";
import set_User_DB from "./user_DB";
export default configureStore({
  reducer: {
    isMobile: detectDevice,
    selectedMainCategory: selectMainCategory,
    searchQuery: searchQuery,
    users_DB: set_User_DB,
  },
});
