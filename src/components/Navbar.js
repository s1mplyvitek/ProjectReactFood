import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import navlogo from "../content/footer.png"
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";


const Navbar = ({ cart, sum, nameCart, }) => {

    let dispatch = useDispatch();

    window.addEventListener('scroll', function () {
        let cartScroll = document.getElementById('scrollFixed');

        if (window.pageYOffset > 70) {
            cartScroll.style.position = 'fixed';
            cartScroll.style.top = '1px';
            cartScroll.style.right = '283px';
        } else {
            cartScroll.style.position = 'static';
        }
    });

    const [nav, setNav] = useState(false)
    const [deliv, setDeliv] = useState(true)
    const [cartSide, setCartSide] = useState(false)


    let navigation = [
        { title: "О нас", icon: <TbTruckDelivery />, link: "about" },
        { title: "Избранное", icon: <MdFavorite />, link: "favor" },
        { title: "Кошелек", icon: <FaWallet />, link: "wallet" },
        { title: "Помощь", icon: <MdHelp />, link: "help" },
        { title: "Акции", icon: <AiFillTag />, link: "fill" },
        { title: "Bests", icon: <BsFillSaveFill />, link: "best" },
        { title: "Приглашайте друзей", icon: <FaUserFriends />, link: "friends" },
    ];


    return (
        <>
            <div className="bg-white">
                <div className="max-[529.9px]:hidden w-2/3 mx-auto flex flex-wrap justify-end gap-4  pt-2">
                    {navigation.map((item) => (
                        <Link to={item.link}>
                            <div className="flex gap-1 place-content-center text-sm py-1 hover:text-orange-600"><div className="grid place-content-center">{item.icon}</div>{item.title}</div>
                        </Link>
                    ))}
                </div>
            </div>


            <div className="w-full bg-slate-100">

                <div className="w-2/3 mx-auto flex justify-between gap-2">

                    {/* Left side */}
                    <div className="flex items-center gap-2">
                        <div onClick={() => setNav(!nav)} className="cursor-pointer min-[529.9px]:hidden">
                            <AiOutlineMenu size={30} />
                        </div>

                        <Link to={"/"}>
                            <img className="max-[500px]:hidden w-[160px]" src={navlogo} alt="/" />
                        </Link>
                    </div>

                    <div className="flex justify-end gap-5 py-1.5">

                        <div className="hidden min-[1330px]:flex items-center bg-white rounded-full p-1 text-[12px] cursor-pointer">
                            <p className={deliv ? "bg-black text-white rounded-full p-1.5" : "p-1.5 hover:scale-110"} onClick={() => setDeliv(true)}>Доставка</p>
                            <p className={deliv ? "p-1.5 hover:scale-110" : "bg-black text-white rounded-full p-1.5"} onClick={() => setDeliv(false)}>Самовывоз</p>
                        </div>


                        {/* Search Input */}

                        <div className="bg-slate-100 hover:bg-white rounded-full border gap-1 flex items-center py-0.5 px-2 w-[150px] min-[740px]:w-[300px] min-[1120px]:w-[400px]">
                            <AiOutlineSearch size={20} />
                            <input className="bg-transparent py-1  focus:outline-none w-full" type="text" placeholder="Найти блюдо" />
                        </div>

                        {/* Cart button */}

                        <div id="scrollFixed" onClick={() => setCartSide(!cartSide)} className="flex z-20 gap-5">
                            <span>{cart.length}</span>
                            <span>{sum} rub</span>
                            <button className="bg-black text-md hover:text-orange-600 text-white hidden min-[960px]:flex items-center gap-1 py-1.5 rounded-full">
                                <BsFillCartFill size={20} className="" /> Корзина
                            </button>
                        </div>

                        {/* Cart Sidebar */}
                        {/*Overlay*/}
                        {cartSide ? <div className=
                            "bg-black/80 fixed w-full h-screen z-20 top-0 left-0 "></div> : ""}
                        {/* Side */}

                        <div className={cartSide
                            ? "fixed top-0 right-0 w-[400px] h-screen bg-white z-20 duration-300"
                            : "fixed top-0 right-[-100%] w-[400px] h-screen bg-white z-20 duration-300"}>
                            <div className="">
                                <AiOutlineClose
                                    onClick={() => setCartSide(!cartSide)} size={30} className="absolute left-4 top-4 cursor-pointer" />
                                <div className="flex justify-end">
                                    <h2 className="text-2xl p-4">
                                        <span className="font-bold">eDa</span>livery
                                    </h2>

                                </div>
                                <div className="text-center text-2xl grid">
                                    <span className="">Корзина</span>
                                    <div className="text-start text-lg grid p-5">
                                        <p className="mb-14">{nameCart}</p>
                                        <div className="flex gap-3 pb-3">
                                            <span className="text-2xl text-bold">сумма: {sum} ₽</span>
                                            <span className="">Выбрано товаров: {cart.length}</span>
                                        </div>
                                        <button onClick={() => dispatch(clearCart())} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                            Очистить корзину
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>




                        {/* Mobile Menu */}
                        {/* Overlay */}
                        {nav ? <div className=
                            "bg-black/80 fixed w-full h-screen z-20 top-0 left-0 "></div> : ""}



                        {/* Side drawer menu */}

                        <div className={nav
                            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300"
                            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-20 duration-300"}>
                            <AiOutlineClose
                                onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
                            <h2 className="text-2xl p-4">
                                <span className="font-bold">eDa</span>livery
                            </h2>

                            <nav>
                                <div className="flex flex-col p-4 text-gray-800">

                                    {navigation.map((item) => (
                                        <Link to={item.link}>
                                            <div onClick={() => setNav(!nav)} className="text-xl py-4 flex">
                                                <div size={25} className="mr-4">{item.icon}</div>
                                                <p>{item.title}</p>
                                            </div>
                                        </Link>
                                    ))}

                                </div>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>

            {/* Categories */}

            <Category />
        </>

    )
}

export default Navbar