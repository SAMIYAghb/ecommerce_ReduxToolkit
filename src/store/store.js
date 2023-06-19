import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebarSlice';
import category from './categorySlice';
import product from './ProductSlice';
import cart from './cartSlice';



export const store = configureStore({
  reducer: {
    sidebar,
    category,
    product,
    cart,
  },
})
