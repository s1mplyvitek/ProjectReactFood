
import React from "react";
import Category from "./components/Category";
import { Outlet } from "react-router-dom";
import Navunder from "./components/Navunder";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navunder />      
      <Outlet></Outlet>
      <Category /> 
      <Footer />         
    </div>


  );
}

export default App;
