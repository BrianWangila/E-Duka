import React, { useState, useEffect } from "react";
import { getAllProducts, addToCart } from "../../API/Api";
import { List, Card, Image, Typography, Rate, Button, message } from "antd";
const { Meta } = Card;

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
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Card
              className="item-card"
              title={product.title}
              key={index}
              cover={
                <Image className="item-card-image" src={product.thumbnail} />
              }
              actions={[
                <Rate allowHalf disabled value={product.rating} />,
                <AddToCartButton item={product} />,
              ]}
            >
              <Card.Meta
                title={
                  <Typography.Paragraph>
                    Price: ${product.price}
                    <Typography.Text delete type="danger">
                      {" "}
                      $
                      {parseFloat(
                        product.price /
                          (1 - product.discountPercentage / 100).toFixed(2)
                      ).toFixed(2)}
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      {" "}
                      {product.discountPercentage}% off
                    </Typography.Text>
                  </Typography.Paragraph>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{
                      rows: 2,
                      expandable: true,
                      symbol: "Show More",
                    }}
                  >
                    {product.description}
                  </Typography.Paragraph>
                }
              ></Card.Meta>
            </Card>
          );
        }}
        dataSource={items}
      ></List>
    </div>
  );
};

const AddToCartButton = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id).then((res) => {
      message.success(`${item.title} added to cart!`);
      setLoading(false);
    });
  };

  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    </Button>
  );
};

export default Products;
