import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/Product-List/ProductListSlice"
import authReducer from "../features/auth/Components/authSlice"
export const store = configureStore({
  reducer: {
   product: productReducer,
   auth:authReducer
  },
});
