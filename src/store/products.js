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
    setFilter(state, action) {
      console.log();

      state.filters = action.payload;
    },
    setPrice(state, action) {
      state.pricers[action.payload.name] = action.payload.value;
    },
  },
});

export const uDataArrayColor = ({ products }) => {
  return Array.from(new Set(products.data?.map((product) => product.color)));
};

export const uProductDataArray = ({ products }) => {
  return data
    .filter(
      (product) =>
        !products.filters.length || products.filters.includes(product.color)
    )
    .filter(
      (price) =>
        (!products.pricers.max || price.price < products.pricers.max) &&
        (!products.pricers.min || price.price > products.pricers.min)
    );
};

export const { setFilter, setPrice } = slice.actions;

export default slice.reducer;
