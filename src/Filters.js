import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setPrice, uDataArrayColor } from "./store/products";

const Filters = () => {
  const [priceMax, setPriceMax] = React.useState("");
  const [priceMin, setPriceMin] = React.useState("");
  const [colorsCheckbox, setColorsCheckbox] = React.useState([]);
  const data = useSelector(uDataArrayColor);
  const { pricers } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleCheckbox({ target }) {
    if (target.checked) {
      const newArray = colorsCheckbox.filter((color) => color !== target.value);
      setColorsCheckbox([...newArray, target.value]);
    } else {
      setColorsCheckbox(
        colorsCheckbox.filter((color) => color !== target.value)
      );
    }
  }

  function isChecked(color) {
    return colorsCheckbox?.includes(color);
  }

  React.useEffect(() => {
    dispatch(setFilter(colorsCheckbox));
  }, [colorsCheckbox, dispatch]);

  React.useEffect(() => {
    console.log(priceMax, priceMin);
    dispatch(setPrice({ name: "max", value: Number(priceMax) }));
    dispatch(setPrice({ name: "min", value: Number(priceMin) }));
  }, [priceMax, priceMin, dispatch]);

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

      {data?.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            checked={isChecked(color)}
            value={color}
            onChange={handleCheckbox}
          />
          {color}
        </label>
      ))}
    </form>
  );
};

export default Filters;
