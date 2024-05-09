// rootReducer.ts
'use client';
import { combineReducers } from 'redux';
import cartReducer from './cartSlice'; // Replace with the correct path

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export default rootReducer;
