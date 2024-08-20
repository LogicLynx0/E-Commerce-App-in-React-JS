import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../../component/Home";

const initialState = {
  count: {},
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const id = action?.payload;
      // console.log("action", action);
      // console.log("#$$#$%%#%$%#%", id);
      const data = dummyData;
      const selectedItem = data.find((item) => item.id === id);

      let _item = { ...selectedItem };
      if (state.count?.[id]) {
        _item.count = state.count?.[id].count + 1;
        state.count = { ...state.count, [id]: _item };
      } else {
        _item.count = 1;
        state.count = { ...state.count, [id]: _item };
      }
    },

    decrement: (state, action) => {
      let minimumLimit = 0;
      const id = action?.payload;
      const data = dummyData;
      const selectedItem = data.find((item) => item.id === id);
      let _item = { ...selectedItem };
      if (!state.count?.[id] || state.count?.[id] === minimumLimit) return;
      if (state.count?.[id]?.count === 1) {
        delete state.count?.[id];
      } else {
        _item.count = state.count?.[id].count - 1;
        state.count = { ...state.count, [id]: _item };
      }
    },
    deleteItem: (state, action) => {
      const id = action?.payload;
      delete state.count[id]
    }
  },
});

export const { increment, decrement, deleteItem } = counterSlice.actions;
export default counterSlice.reducer;

//id === 0 {state.count}
