import { configureStore } from "@reduxjs/toolkit";
import falanReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: falanReducer,
  },
});
