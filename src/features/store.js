import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import blogReducer from "./blog/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
  },
});
