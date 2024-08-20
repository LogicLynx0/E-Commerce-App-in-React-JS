import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedProducts: [],
 
};
const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState,
  reducers: {
    likeUnlikeItem: (state, action) => {
      const item = action.payload;

      const isFavourite = state.likedProducts.find((pr) => pr.id === item.id);

      if (isFavourite) {
        state.likedProducts = state.likedProducts.filter(
          (pr) => pr.id !== item.id
        );
      } else {
        state.likedProducts = [...state.likedProducts, item];
      }
    },
  },
});

export const { likeUnlikeItem } = likedProductsSlice.actions;
export default likedProductsSlice.reducer;
