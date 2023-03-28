import React from "react";
import "./App.css";
import { LeftSideBar } from "./Components/LeftSidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LeftSideBar/>
    </div>
  );
}

export default App;
