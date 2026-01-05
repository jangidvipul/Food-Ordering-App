import {configureStore} from '@reduxjs/toolkit'; // Imported from redux-toolkit bcz redux is responsible for creating a "Redux Store"
import cartReducer from "./cartSlice";

// returns —> A configured Redux store{} with methods like - dispatch(action), subscribe(listener), etc.
const appStore = configureStore({
   reducer : {
      cart : cartReducer
   }
}); 

export default appStore;