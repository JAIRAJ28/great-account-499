import React from "react";
import Footer from "../Components/footer/footer"
import { Route, Routes } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import LeftSidebar from "../Components/LeftSidebar";
import Women from "../Pages/ProductPages/Women"
import Men from "../Pages/ProductPages/Men"
import { Dashboard } from "../Admin/Dashboard";
import SearchBar from "../Pages/ProductPages/SearchBar";
import CartandCheckout from "../Pages/Cart and Checkout/CartandCheckout";
import { Admin } from "../Admin/logAdmin/loginAmin";
// import

const AllRoutes = () => {
  return (
    <div>
      <LeftSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/cart" element={<CartandCheckout/>} />
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Login/>} /> */}
        <Route path="/AdminDashboard" element={<Dashboard/>} />
        <Route path="/AdminLogin" element={<Admin/>} />
        <Route path="/AdminEdit" element={<Admin/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
