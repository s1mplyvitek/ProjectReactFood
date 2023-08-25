
import React from "react";
import Category from "./components/Category";
import { Outlet } from "react-router-dom";
import Navunder from "./components/Navunder";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navunder />
      <Category />       
      <Outlet></Outlet>      
      <Footer />         
    </div>


  );
}

export default App;
