import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import navlogo from "../content/footer.png"

import { Link } from "react-router-dom";

const Navbar = ({ navunder }) => {

    const [nav, setNav] = useState(false)
    const [deliv, setDeliv] = useState(true)




    return (
        <div className="w-full bg-slate-100">

            <div className="w-2/3 mx-auto flex justify-between gap-2">

                {/* Left side */}
                <div className="flex items-center gap-2">
                    <div onClick={() => setNav(!nav)} className="cursor-pointer min-[529.9px]:hidden">
                        <AiOutlineMenu size={30} />
                    </div>

                    <Link to={"/"}>
                        <img className="max-[400px]:hidden w-[160px]" src={navlogo} alt="/" />
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

                    <button className="bg-black text-md hover:text-orange-600 text-white hidden min-[960px]:flex items-center gap-1 py-1.5 rounded-full">
                        <BsFillCartFill size={20} className="" /> Корзина
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
                            <span className="font-bold">eDa</span>livery
                        </h2>

                        <nav>
                            <div className="flex flex-col p-4 text-gray-800">

                                {navunder.map((item) => (
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

    )
}

export default Navbar