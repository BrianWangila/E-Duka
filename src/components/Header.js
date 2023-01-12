import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  DownCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: "E-Duka",
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
      <Menu
        onClick={onMenuClick}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};
export default Header;
