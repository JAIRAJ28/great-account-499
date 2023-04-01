import React from "react";
import Footer from "../Components/footer/footer"
import { Route, Routes } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import LeftSidebar from "../Components/LeftSidebar";
import Women from "../Pages/ProductPages/Women"
import Men from "../Pages/ProductPages/Men"
import {Login} from "../Components/loginsig/login"
import SearchBar from "../Pages/ProductPages/SearchBar";
import CartandCheckout from "../Pages/Cart and Checkout/CartandCheckout";
import { Register } from "../Components/register/register"
import {Dashboard} from "../Admin/dashboard"

const AllRoutes = () => {
  return (
    <div>
      <LeftSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/cart" element={<CartandCheckout />} /> //private route
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} /> //private route
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
