import { createSlice } from "@reduxjs/toolkit";

// Slice = Collection of (Action + Reducer + State).
const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items : []
   },
   reducers : {
    // Mutuating the 'state' here-
    addItem : (state,action) => {
      state.items.push(action.payload);
    },
    removeItem : (state) => {
      state.items.pop();
    },
    clearItems : (state) => {
      state.items.length = 0;
    }
   }
});

export const {addItem, removeItem, clearItems} = cartSlice.actions;

export default cartSlice.reducer;

/* 
  "Redux-Toolkit me 'action' batata h ki kya change karna h? , 'reducer' batata h ki  kaise change karna h? ,
   and 'slice' in sab ko ek feature ke under organize karta hai( Action + Reducer + State )"

      -> "addItem" = an action.
      -> (state, action)=>{...} = reducer function. ( A func() which updates the 'redux-state' based on certain action )
    
      # FLOW-

               UI
               ↓
        dispatch(action)                   
               ↓
         Reducer runs
               ↓
         State update
               ↓
         UI re-render

*/

