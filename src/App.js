import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Layout className="layout">
      <Header />
      <PageContent />
      <Footer />
    </Layout>
  </div>
);

export default App;
