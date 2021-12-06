import { configureStore } from "@reduxjs/toolkit";
import detectDevice from "./device";
import selectMainCategory from "./selectedMainCategory";
export default configureStore({
  reducer: {
    isMobile: detectDevice,
    selctedMainCategory: selectMainCategory,
  },
});
