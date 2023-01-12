import React from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "../../Pages/Categories";
import Home from "../../Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};

export default AppRoutes;
