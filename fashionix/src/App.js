import "./App.css";
import { LeftSideBar } from "./Components/LeftSidebar";
import Navbar from "./Components/HomePage/Navbar";
import Loader from "./Components/HomePage/Loader";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/HomePage/Home";
import { Register } from "./Components/register/register";
import Footer from "./Components/footer/footer";
import Moredetails from "./Components/Singlepage/singledetails";
function App() {

  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
      <div className="App">
        <Navbar />
        
        <LeftSideBar/>

        <Home key="home" />
     
        <Footer />
      </div>
    </>

  );
}

export default App;

