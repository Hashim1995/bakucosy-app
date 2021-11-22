import { configureStore } from "@reduxjs/toolkit";
import detectDevice from "./device";
export default configureStore({
  reducer: {
    isMobile: detectDevice,
  },
});
