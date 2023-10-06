import { Outlet, useLocation } from "react-router-dom";
import FooterLayout from "../layouts/FooterLayout";
import React from "react";
import HeaderLayout from "./HeaderLayout";



const RootLayout = () => {

    const { pathname } = useLocation();


    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className="flex flex-col min-h-screen">
            <HeaderLayout />
            <Outlet></Outlet>
            <FooterLayout />
        </div>
    );
};

export default RootLayout;