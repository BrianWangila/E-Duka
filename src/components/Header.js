import React, { useEffect, useState, useReducer } from "react";
import { getCart } from "../API/Api";
import { useNavigate } from "react-router-dom";
import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  DownCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Drawer,
  InputNumber,
  Menu,
  Table,
  Typography,
} from "antd";

const items = [
  {
    label: "Home",
    key: "",
    icon: <ShoppingOutlined />,
  },

  {
    label: "Categories",
    icon: <DownCircleOutlined />,
    children: [
      {
        type: "group",
        label: "Women",
        children: [
          {
            label: "Dresses",
            key: "womens-dresses",
          },
          {
            label: "Shoes",
            key: "womens-shoes",
          },
          {
            label: "Watches",
            key: "womens-watches",
          },
          {
            label: "Bags",
            key: "womens-bags",
          },
        ],
      },
      {
        type: "group",
        label: "Men",
        children: [
          {
            label: "Shirts",
            key: "mens-shirts",
          },
          {
            label: "Shoes",
            key: "mens-shoes",
          },
          {
            label: "Watches",
            key: "mens-watches",
          },
        ],
      },
      {
        type: "group",
        label: "Electronics",
        children: [
          {
            label: "Smartphones",
            key: "smartphones",
          },
          {
            label: "Laptops",
            key: "laptops",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };

  return (
    <div className="appHeader">
      <div className="logo">
        <Typography.Title level={3} className="logo-text">
          E-Duka
        </Typography.Title>
      </div>
      <div className="menu">
        <Menu onClick={onMenuClick} mode="horizontal" items={items} />
      </div>
      <div className="cart-and-account">
        <Menu mode="horizontal">
          <Menu.Item key="cart">
            <AppCart />
          </Menu.Item>
          <Menu.Item key="signin">
            <Button type="primary">Sign In</Button>
          </Menu.Item>

          <Menu.Item key="signup">
            <Button>Sign Up</Button>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};
// appcart component
const AppCart = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);
  return (
    <>
      <Badge
        count={5}
        onClick={() => {
          setCartDrawerOpen(true);
        }}
      >
        <ShoppingCartOutlined /> Cart
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        title="Your Cart"
        contentWrapperStyle={{ width: "100%", maxWidth: "500px" }}
      >
        <Table
          pagination={false}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (price) => <span>${price}</span>,
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              render: (quantity) => (
                <InputNumber defaultValue={quantity}></InputNumber>
              ),
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (total) => <span>${total}</span>,
            },
            {
              title: "Discount Price",
              dataIndex: "discountedPrice",
              render: (discountedPrice) => <span>${discountedPrice}</span>,
            },
          ]}
          dataSource={cartItems}
          summary={(data) => {
            const total = data.reduce((prev, curr) => {
              return prev + curr.total;
            }, 0);
            return (
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={3}>Total</Table.Summary.Cell>
                <Table.Summary.Cell>${total}</Table.Summary.Cell>
              </Table.Summary.Row>
            );
          }}
        />
      </Drawer>
    </>
  );
};

export default Header;
