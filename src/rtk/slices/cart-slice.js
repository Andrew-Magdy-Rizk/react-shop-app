import { createSlice } from "@reduxjs/toolkit";

const sliceReducer = createSlice({
  initialState: [],
  name: "cartreducer",
  reducers: {
    addToCart: (state, action) => {
      const findCard = state.find(
        (product) => product.id === action.payload.id
      );
      if (findCard) {
        findCard.quantity += 1;
      } else {
        const prdouctclone = { ...action.payload, quantity: 1 };
        state.push(prdouctclone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = sliceReducer.actions;
export default sliceReducer.reducer;
