import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartProvider from "../components/providers/CartProvider";
import FooterLayout from "../layouts/FooterLayout";
import React from "react";



const RootLayout = () => {

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
            <FooterLayout />
        </div>
    );
};

export default RootLayout;