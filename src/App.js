import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <PageContent />
      <Footer />
    </Router>
  </div>
);

export default App;
