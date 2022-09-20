import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import imageReducer from "../features/image/imageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imager: imageReducer,
  },
});
