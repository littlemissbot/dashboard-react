import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productCount: 0,
  },
  reducers: {
    products: (state, action) => {
      state.products = action.payload.records;
      state.productCount = action.payload.count;
    },
  },
});

export const { products } = productsSlice.actions;

export default productsSlice.reducer;
