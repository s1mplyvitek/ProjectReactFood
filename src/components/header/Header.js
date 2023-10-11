import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import navlogo from "../../content/footer.png"
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSidebar } from "../../store/slices/sidebarNavSlice";
import TimeDelivery from "./TimeDelivery";
import CartProvider from "../providers/CartProvider";
import { setSidebarCart } from "../../store/slices/sidebarCartSlice";
import SidebarCart from "./SidebarCart";




const Header = ({ sum }) => {

    window.addEventListener('scroll', function () {
        let cartScroll = document.getElementById('scrollFixed');

        let currentUrl = this.window.location.href;

        if (currentUrl.includes("/about") || currentUrl.includes("/work")) {
            return;
        }

        if (window.pageYOffset > 40) {
            cartScroll.style.position = 'fixed';
            cartScroll.style.top = '0.1%';
            cartScroll.style.right = '16.6%';
        } else {
            cartScroll.style.position = 'static';
        }
    });


    let dispatch = useDispatch();


    return (
        <>
            <div className="w-full bg-slate-100">
                <div className="w-2/3 mx-auto flex justify-between gap-2">

                    {/* Left side */}
                    <div className="flex items-center gap-2">
                        <div onClick={() => dispatch(setSidebar())} className="cursor-pointer min-[529.9px]:hidden">
                            <AiOutlineMenu size={30} />
                        </div>

                        <Link to={"/"}>
                            <img className="max-[500px]:hidden w-[160px]" src={navlogo} alt="/" />
                        </Link>
                    </div>

                    <div className="flex justify-end gap-5 py-1.5">

                        <TimeDelivery />
                        {/* Search Input */}

                        <div className="bg-slate-100 hover:bg-white rounded-full border gap-1 flex items-center py-0.5 px-2 w-[150px] min-[740px]:w-[300px] min-[1120px]:w-[400px]">
                            <AiOutlineSearch size={20} />
                            <input className="bg-transparent py-1  focus:outline-none w-full" type="text" placeholder="Найти блюдо" />
                        </div>

                        {/* Cart button */}

                        <div id="scrollFixed" onClick={() => dispatch(setSidebarCart())} className="flex z-30 gap-5">
                            <div className="flex">
                                <span className="text-xs ml-5  rounded-lg text-black p-1">{sum} ₽</span>
                                <button className="bg-black text-md hover:text-orange-600 text-white hidden min-[960px]:flex items-center gap-1 py-1.5 rounded-full">
                                    <BsFillCartFill size={20} className="" /> Корзина
                                </button>
                            </div>
                        </div>

                        {/* Cart Sidebar */}
                        <CartProvider>
                            <SidebarCart />
                        </CartProvider>
                    </div>

                </div>
            </div>




        </>

    )
}

export default Header;