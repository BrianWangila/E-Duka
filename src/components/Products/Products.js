import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  addToCart,
  getProductsByCategory,
} from "../../API/Api";
import { LoadingOutlined } from "@ant-design/icons";
import {
  List,
  Card,
  Image,
  Typography,
  Rate,
  Button,
  message,
  Spin,
  Select,
} from "antd";
const { Meta } = Card;

const Products = () => {
  const category = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("price-asc");
  useEffect(() => {
    setLoading(true);
    (category?.categoryId
      ? getProductsByCategory(category.categoryId)
      : getAllProducts()
    ).then((res) => {
      console.log("res", res.products);
      setItems(res.products);
      setLoading(false);
    });
  }, [category]);

  //   sort the products
  const sortItems = () => {
    switch (sortOrder) {
      case "price-asc":
        return items.sort((a, b) => a.price - b.price);
      case "price-desc":
        return items.sort((a, b) => b.price - a.price);
      case "rating-asc":
        return items.sort((a, b) => a.rating - b.rating);
      case "rating-desc":
        return items.sort((a, b) => b.rating - a.rating);
      default:
        return items;
    }
  };

  //   if loading is true, show a loading message and Spinner
  if (loading) {
    const antIcon = (
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    );
    return <Spin indicator={antIcon} />;
  }

  return (
    <div className="products">
      {/* sort through the products */}
      <Typography.Text>Sort items by: </Typography.Text>
      <Select
        onChange={(value) => setSortOrder(value)}
        defaultValue={"price-asc"}
        options={[
          {
            label: "Price: Low to High",
            value: "price-asc",
          },
          {
            label: "Price: High to Low",
            value: "price-desc",
          },
          {
            label: "Rating: Low to High",
            value: "rating-asc",
          },
          {
            label: "Rating: High to Low",
            value: "rating-desc",
          },
        ]}
      ></Select>
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
        dataSource={sortItems()}
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
