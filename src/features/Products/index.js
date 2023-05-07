import React from "react";
import { useGetAllProductsQuery, useGetProductQuery } from "./apiSlice";

const Products = () => {
  const { data: d } = useGetAllProductsQuery();
  const { data } = useGetProductQuery("iphone");
  console.log(d);
  console.log(data);
  return (
    <div>
      <h1>Data:</h1>
    </div>
  );
};

export default Products;
