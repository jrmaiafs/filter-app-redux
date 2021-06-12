import React from "react";
import { useSelector } from "react-redux";

const filterColors = (colors) => (product) =>
  !colors.length || colors.includes(product.color);

const filterPrices = (prices) => (product) =>
  (!prices.max || product.price <= prices.max) &&
  (!prices.min || product.price >= prices.min);

export const filterProducts = ({ products }) => {
  const { data, filters } = products;
  return data
    .filter(filterColors(filters.colors))
    .filter(filterPrices(filters.prices));
};

const Products = () => {
  const data = useSelector(filterProducts);

  return (
    <table>
      <thead>
        <tr>
          <th>product</th>
          <th>price</th>
          <th>color</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ id, product, price, color }) => (
          <tr key={id}>
            <td>{product}</td>
            <td>{price}</td>
            <td>{color}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
