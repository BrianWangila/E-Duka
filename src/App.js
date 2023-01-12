import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <PageContent />
    <Footer />
  </div>
);

export default App;
