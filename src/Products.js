import React from "react";
import { useSelector } from "react-redux";
// import data from "./store/data";
import { uProductDataArray } from "./store/products";

const Products = () => {
  const data = useSelector(uProductDataArray);
  
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
        {data?.map((product) => (
          <tr key={product.id}>
            <td>{product.product}</td>
            <td>{product.price}</td>
            <td>{product.color}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
