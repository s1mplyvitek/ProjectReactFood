
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import CartProvider from "./components/providers/CartProvider";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
      </CartProvider>      
      <Outlet></Outlet>
      <Footer />
    </div>

  );
}

export default App;
