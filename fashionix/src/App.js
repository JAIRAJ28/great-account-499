import "./App.css";
import Navbar from "./Components/HomePage/Navbar";
import Loader from "./Components/HomePage/Loader";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/HomePage/Home";
import LeftSidebar from "./Components/LeftSidebar";
import Footer from "./Components/footer/footer";
<<<<<<< HEAD


=======
import AllRoutes from "./AllRoutes/AllRoutes";
import { Dashboard } from "./Admin/dashboard";
>>>>>>> 1ef8517d1dff332c7411b8ab3a17e903f6df2e83
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
<<<<<<< HEAD
        <Navbar />
        <LeftSidebar/>
        <Home key="home" />
        <Footer/>
=======
        <AllRoutes/>
        {/* <Dashboard/> */}
>>>>>>> 1ef8517d1dff332c7411b8ab3a17e903f6df2e83
      </div>
    </>
  );
}

export default App;

