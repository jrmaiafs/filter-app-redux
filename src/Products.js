import React from "react";
import data from "./store/data";

const Products = () => {
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
        {data.map((product) => (
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
