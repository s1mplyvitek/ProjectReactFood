import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [deliv, setDeliv] = useState(true)

    let navigation = [{ title: "О нас", icon: <TbTruckDelivery />, link: "about"},
                      { title: "Избранное", icon: <MdFavorite />, link: "favor"},
                      { title: "Кошелек", icon: <FaWallet />, link: "wallet" },
                      { title: "Помощь", icon: <MdHelp />, link: "help" },
                      { title: "Акции", icon: <AiFillTag />, link: "fill" },
                      { title: "Лучшие", icon: <BsFillSaveFill />, link: "fillsave" },
                      { title: "Приглашайте друзей", icon: <FaUserFriends />, link: "friends" },

    ]


    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">

            {/* Left side */}

            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <Link to={"/"}>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                        <span className="font-bold">еDa</span>livery
                    </h1>
                </Link>

                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
                    <p className={deliv ? "bg-black text-white rounded-full p-2" : "p-2 hover:scale-110"} onClick={() => setDeliv(true)}>Доставка</p>
                    <p className={deliv ? "p-2 hover:scale-110" : "bg-black text-white rounded-full p-2"} onClick={() => setDeliv(false)}>Самовывоз</p>
                </div>
            </div>

            {/* Search Input */}

            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent p-2 focus:outline-none w-full" type="text" placeholder="Найти блюдо" />
            </div>

            {/* Cart button */}

            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
                <BsFillCartFill size={20} className="mr-2" /> Корзина
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className=
                "bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div> : ""}



            {/* Side drawer menu */}

            <div className={nav
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">
                    Лучшая <span className="font-bold">Еда</span>
                </h2>

                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">

                        {navigation.map((item) => (
                            <Link to={item.link}>
                                <div onClick={() => setNav(!nav)} className="text-xl py-4 flex">
                                    <div size={25} className="mr-4">{item.icon}</div>
                                    <p>{item.title}</p>
                                </div>
                            </Link>
                        ))}



                    </ul>
                </nav>
            </div>

        </div>

    )
}

export default Navbar