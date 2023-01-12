import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../API/Api";

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
        console.log("res", res.products)
        setItems(res.products);
    });
  }, []);

  return <div className="products">Products</div>;
};

export default Products;
