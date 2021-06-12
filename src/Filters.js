import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters, selectUniqueColors } from "./store/products";

const Filters = () => {
  const [priceMax, setPriceMax] = React.useState("");
  const [priceMin, setPriceMin] = React.useState("");
  const [selectedColors, setSelectedColors] = React.useState([]);
  const data = useSelector(selectUniqueColors);
  const dispatch = useDispatch();

  function handleCheckbox({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value)
      );
    }
  }

  function isChecked(color) {
    return selectedColors?.includes(color);
  }

  React.useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
  }, [selectedColors, dispatch]);

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: "prices",
        value: { min: Number(priceMin), max: Number(priceMax) },
      })
    );
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
