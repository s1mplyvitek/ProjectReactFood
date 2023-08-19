
import React from "react";

import Category from "./components/Category";
import { Outlet } from "react-router-dom";
import Navunder from "./components/Navunder";


function App() {
  return (
    <div>
      <Navunder />
      {/* <Navbar /> */}
      <Outlet></Outlet>
      <Category />      
    </div>


  );
}

export default App;
