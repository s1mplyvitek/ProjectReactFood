
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Category />
      
      
      
    </div>


  );
}

export default App;
