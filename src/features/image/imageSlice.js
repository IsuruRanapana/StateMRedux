import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "even",
};

export const imageSlice = createSlice({
  name: "imager",
  initialState,
  reducers: {
    odd: (state) => {
      state.value = "odd";
    },
    even: (state) => {
      state.value = "even";
    },
  },
});

export const { odd, even } = imageSlice.actions;

export default imageSlice.reducer;
