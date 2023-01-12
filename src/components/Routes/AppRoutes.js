import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "../../Pages/Categories";
import Home from "../../Pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
