
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import CartProvider from "./components/providers/CartProvider";
import Navbar from "./components/Navbar";



function App() {

  const { pathname } = useLocation();

 
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <Navbar />
      </CartProvider>      
      <Outlet></Outlet>
      <Footer />
    </div>

  );
}

export default App;
