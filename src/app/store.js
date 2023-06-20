import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from "../features/Product-List/ProductListSlice"
import authReducer from "../features/auth/Components/authSlice"
import cartReducer from "../features/cart/cartSlice"
export const store = configureStore({
  reducer: {
   product: productReducer,
   auth:authReducer,
   cart:cartReducer
  },
});
