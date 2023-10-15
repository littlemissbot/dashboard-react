/**
 * Redux store configuration.
 * @module redux/store
 */
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";

/**
 * Redux store instance.
 * @type {Object}
 * @property {Object} reducer - The root reducer object that manages the state of the store.
 * @property {Object} reducer.products - The products slice reducer.
 */
export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
