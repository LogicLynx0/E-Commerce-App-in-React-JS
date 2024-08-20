// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../features/counter/counterSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import likedProductsSlice from "../features/counter/likedProductsSlice";
import filterSlice from "../features/counter/filterSlice";

export const store = configureStore({
  reducer: {
    cartItem: counterSlice,
    likedProducts: likedProductsSlice,
    category: filterSlice,
  },
});
