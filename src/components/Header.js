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
    key: "categories",
    icon: <DownCircleOutlined />,
    children: [
      {
        type: "group",
        label: "Clothing",
        children: [
          {
            label: "Ladies",
            key: "ladies",
          },
          {
            label: "Men",
            key: "men",
          },
        ],
      },
      {
        type: "group",
        label: "Jewelery",
        children: [
          {
            label: "Necklaces",
            key: "necklaces",
          },
          {
            label: "Rings",
            key: "rings",
          },
        ],
      },
    ],
  },
  {
    label: "Cart",
    key: "cart",
    icon: <ShoppingCartOutlined />,
  },
  {
    label: "SignIn",
    key: "signIn",
    icon: <UserOutlined />,
  },
];
const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const onMenuClick = (item) => {
    setCurrent(item.key);
    console.log("item", item);
    navigate(`/${item.key}`);
  };
  return (
    <div className="appHeader">
      <Menu
        onClick={onMenuClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};
export default Header;
