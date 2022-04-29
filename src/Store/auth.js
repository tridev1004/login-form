import { createSlice } from "@reduxjs/toolkit";
const InitialAuth = { isAuthanticated: false };

const Authslice = createSlice({
  name: "Authentication",
  initialState: InitialAuth,
  reducers: {
    login(state) {
      state.isAuthanticated = true;
    },
    logout(state) {
      state.isAuthanticated = false;
    },
  },
});
export const authactions = Authslice.actions;
export default Authslice.reducer;