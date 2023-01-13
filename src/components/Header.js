import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  DownCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Drawer, Menu, Typography } from "antd";

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
      <Drawer open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
    </>
  );
};

export default Header;
