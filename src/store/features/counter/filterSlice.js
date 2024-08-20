import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredCategory: 'All Products'
};
const categorySlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) =>{
            state.filteredCategory = action.payload;
            // console.log('stateeee', state);
        }
    }
})

export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer;