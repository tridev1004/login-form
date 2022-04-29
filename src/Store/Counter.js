  import { createSlice } from "@reduxjs/toolkit";
  
  const InitialCounterState = { counter: 0, showCounter: true };

const counterslice = createSlice({
  name: "counter",
  initialState: InitialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});  


export const counteractions = counterslice.actions;
//
export default counterslice.reducer;