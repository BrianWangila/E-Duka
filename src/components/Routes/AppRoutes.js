import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryId" element={<Category />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
