import { createSlice, configureStore } from "@reduxjs/toolkit";
const InitialCounterState = { counter: 0, showCounter: true ,};

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
const InitialAuth={isAuthanticated:false} 
    const Authslice=createSlice({
     name:'Authentication',
     initialState:InitialAuth,
     reducers:{
       login(state){
         state.isAuthanticated =true;
       },
       logout(state){
        state.isAuthanticated =false;

       }

     }
   });

const store = configureStore({ reducer: {counter:counterslice.reducer,auth:Authslice.reducer},
 });

 export  const counteractions=counterslice.actions;
 export  const authactions=Authslice.actions;
 
 export default store;