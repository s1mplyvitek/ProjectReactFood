import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import navlogo from "../content/footer.png"
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import { categories } from "./data/data";

const Navbar = ({ cart, sum, nameCart, }) => {

    const [nav, setNav] = useState(false)
    const [deliv, setDeliv] = useState(true)
    const [cartSide, setCartSide] = useState(false)


    let navigation = [
        { title: "О нас", icon: <TbTruckDelivery />, link: "about" },
        { title: "Избранное", icon: <MdFavorite />, link: "favor" },
        { title: "Кошелек", icon: <FaWallet />, link: "wallet" },
        { title: "Помощь", icon: <MdHelp />, link: "help" },
        { title: "Акции", icon: <AiFillTag />, link: "fill" },
        { title: "Лучшие", icon: <BsFillSaveFill />, link: "fillsave" },
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

                        <div onClick={() => setCartSide(!cartSide)} className="flex gap-5">
                            <button className="bg-black text-md hover:text-orange-600 text-white hidden min-[960px]:flex items-center gap-1 py-1.5 rounded-full">
                                <BsFillCartFill size={20} className="" /> Корзина
                            </button>
                            <span>{cart.length}</span>
                            <span>{sum} rub</span>
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
                                        <span className="">кол-во: {cart.length} товаров</span>
                                        <span>сумма: {sum} ₽</span>
                                        <p>{nameCart}</p>
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

            <div className="w-full  bg-orange-200 grid justify-items-center sticky top-0 z-10">

                <div className="grid grid-cols-3 py-2 max-[520px]:gap-1 gap-2 sm:w-2/3 sm:flex flex-wrap justify-between">
                    {categories.map((item, index) => (

                        <Link to={item.link}>
                            <div className="flex items-center gap-2">
                                <img className="w-8" src={item.image} alt={item.name} />
                                <h2 className="sm:text-lg text-sm hover:text-orange-600">{item.name}</h2>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </>

    )
}

export default Navbar