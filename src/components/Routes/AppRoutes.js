import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryId" element={<Category />} />
    </Routes>
  );
};

export default AppRoutes;
