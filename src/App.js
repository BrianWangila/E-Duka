import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Layout className="layout">
      <Header />
    </Layout>
  </div>
);

export default App;