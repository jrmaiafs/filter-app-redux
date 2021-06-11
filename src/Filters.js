import React from "react";
import { useSelector } from "react-redux";
import { uDataArrayColor } from "./store/products";

const Filters = () => {
  const [priceMax, setPriceMax] = React.useState("");
  const [priceMin, setPriceMin] = React.useState("");
  const data = useSelector(uDataArrayColor);
  console.log(data);
  return (
    <form>
      <input
        type="number"
        onChange={({ target }) => setPriceMax(target.value)}
        placeholder="max"
      />
      <input
        type="number"
        onChange={({ target }) => setPriceMin(target.value)}
        placeholder="min"
      />

      {data?.map((product) => (
        <label key={product}>
          <input type="checkbox" />
          {product}
        </label>
      ))}
    </form>
  );
};

export default Filters;
