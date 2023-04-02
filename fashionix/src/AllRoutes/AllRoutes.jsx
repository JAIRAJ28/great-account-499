import React from "react";
import Footer from "../Components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import LeftSidebar from "../Components/LeftSidebar";
import Women from "../Pages/ProductPages/Women";
import Men from "../Pages/ProductPages/Men";
import { Login } from "../Components/loginsig/login";
import SearchBar from "../Pages/ProductPages/SearchBar";
import CartandCheckout from "../Pages/CartandCheckout/CartandCheckout";
import { Register } from "../Components/register/register";
import Navbar from "../Components/HomePage/Navbar";
import Moredetails from "../Components/Singlepage/singledetails";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/product/id" element={<Moredetails />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/cart" element={<CartandCheckout />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
