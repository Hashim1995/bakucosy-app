import { configureStore } from "@reduxjs/toolkit";
import detectDevice from "./device";
import selectMainCategory from "./selectedMainCategory";
import searchQuery from "./search";
export default configureStore({
  reducer: {
    isMobile: detectDevice,
    selectedMainCategory: selectMainCategory,
    searchQuery: searchQuery,
  },
});
