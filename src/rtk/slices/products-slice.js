import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productsreducer/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:9000/products");
    const data = await res.json();
    return data;
  }
);
const productsreducer = createSlice({
  initialState: [],
  name: "productsreducer",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productsreducer.actions;
export default productsreducer.reducer;
