// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, set } = counterSlice.actions;

export default configureStore({
  reducer: { counter: counterSlice.reducer },
});
