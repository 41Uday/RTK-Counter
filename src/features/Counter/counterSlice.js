import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByNumber: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, increaseByNumber } = counterSlice.actions;

export const selectCount = (state) => state.value;

export default counterSlice.reducer;
