import React, { useState } from 'react';
import { ShoppingOutlined, ShoppingCartOutlined, DownCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'E-Duka',
    key: 'mail',
    icon: <ShoppingOutlined />,
  },
  
  {
    label: 'Categories',
    key: 'SubMenu',
    icon: <DownCircleOutlined />,
    children: [
      {
        type: 'group',
        label: 'Clothing',
        children: [
          {
            label: 'Ladies',
            key: 'setting:1',
          },
          {
            label: 'Men',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Jewelery',
        children: [
          {
            label: 'Necklaces',
            key: 'setting:3',
          },
          {
            label: 'Rings',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Cart
      </a>
    ),
    key: 'cart',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        SignIn
      </a>
    ),
    key: 'user',
    icon: <UserOutlined />,
  },
];
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;