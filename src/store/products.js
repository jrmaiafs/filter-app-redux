import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const slice = createSlice({
  name: "products",
  initialState: {
    data,
    filters: [],
    pricers: {
      max: 0,
      min: 0,
    },
  },
  reducers: {
    incrementar(state) {
      return (state = state + 1);
    },
    reduzir(state) {
      return (state = state - 1);
    },
  },
});

export const uDataArrayColor = ({ products }) => {
  return Array.from(new Set(products.data?.map((product) => product.color)));
};

export const { incrementar, reduzir } = slice.actions;

export default slice.reducer;
