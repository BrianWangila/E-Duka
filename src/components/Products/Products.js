import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../API/Api";
import { List, Card, Image } from "antd";

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      console.log("res", res.products);
      setItems(res.products);
    });
  }, []);

  return (
    <div className="products">
      <List
      grid={{column: 3}}
        renderItem={(product, index) => {
          return (
            <Card
              title={product.title}
              key={index}
              cover={<Image className="item-card-image" src={product.thumbnail} />}
            ></Card>
          );
        }}
        dataSource={items}
      ></List>
    </div>
  );
};

export default Products;
