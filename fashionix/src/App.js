import "./App.css";
import Loader from "./Components/HomePage/Loader";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AllRoutes from "./AllRoutes/AllRoutes";

import { Dashboard } from "./Admin/Dashboard";




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
        <AllRoutes/>
    
      
        {/* <Login/> */}


      </div>
    </>
  );
}

export default App;

