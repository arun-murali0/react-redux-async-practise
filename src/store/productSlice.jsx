import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  data: [],
  status: "idle",
};

const fetchData = createSlice({
  name: "DataFetch",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "Error";
      });
  },
});

export const { fetchProducts } = fetchData.actions;
export default fetchData.reducer;

export const getProducts = createAsyncThunk("/productS/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
