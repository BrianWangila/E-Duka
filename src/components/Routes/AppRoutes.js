import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryId" element={<Category />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
