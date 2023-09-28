import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiTwotoneShop } from 'react-icons/ai';
import navlogo from "../content/footer.png"
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";


const Navbar = ({ cart, sum, nameCart, }) => {

    let dispatch = useDispatch();

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

    const [nav, setNav] = useState(false)
    const [deliv, setDeliv] = useState(true)
    const [cartSide, setCartSide] = useState(false)
    const [closeDeliv, setCloseDelive] = useState(true);



    let navigation = [
        { title: "О нас", icon: <TbTruckDelivery />, link: "/about" },
        { title: "Избранное", icon: <MdFavorite />, link: "favor" },
        { title: "Рестораны", icon: <AiTwotoneShop />, link: "wallet" },
        { title: "Акции", icon: <AiFillTag />, link: "fills" },
        { title: "Отзывы", icon: <BsFillSaveFill />, link: "reviews" },
        { title: "Помощь", icon: <MdHelp />, link: "help" },
        { title: "Вакансия", icon: <FaUserFriends />, link: "/work" },
    ];


    return (
        <>
            <div className="bg-white">
                <div className="max-[529.9px]:hidden w-2/3 mx-auto flex flex-wrap justify-end gap-4  pt-2">
                    {navigation.map((item) => (
                        <Link to={item.link}>
                            <div className="flex gap-1 hover:scale-105 duration-100 active:scale-100 place-content-center text-sm py-1 hover:text-orange-600"><div className="grid place-content-center">{item.icon}</div>{item.title}</div>
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
                        {!closeDeliv ? <div className=
                            "fixed w-full h-screen z-20 top-0 left-0 " onClick={() => setCloseDelive(true)}></div> : ""}

                        <div className="hidden min-[1330px]:flex items-center bg-white rounded-full p-1 text-[12px] cursor-pointer relative z-20">
                            <div className="flex" onClick={() => setCloseDelive(false)}>
                                <p className={deliv ? "bg-black text-white rounded-full p-1.5" : "p-1.5 hover:scale-110 duration-200"} onClick={() => setDeliv(true)}>Доставка</p>
                                <p className={deliv ? "p-1.5 hover:scale-110 duration-200" : "bg-black text-white rounded-full p-1.5"} onClick={() => setDeliv(false)}>Самовывоз</p>
                            </div>

                            <div className={closeDeliv ? "hidden" : "flex"}>
                                <div className={deliv ? "absolute flex flex-col top-10 right-16 w-[800px] h-[400px] bg-white border shadow-lg rounded-lg  z-20" : "hidden"}>
                                    <h2 className="text-center text-2xl text-orange-600">Доставка</h2>
                                    <div className="grid grid-cols-2 p-2 gap-3">
                                        <div className="text-base indent-5 p-2">
                                            <h3 className="text-center text-xl mb-2">Стандартная доставка</h3>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                            <img src="https://img.freepik.com/premium-vector/delivery-yellow-van-carrying-parcels-on-points-cargo-car-on-a-white-background_101087-530.jpg?w=1380"
                                                alt="/" className="" />
                                        </div>
                                        <div className="text-base indent-5 p-2">
                                            <h3 className="text-xl text-center mb-2">Получи заказ максимально быстро:</h3>
                                            <ol>
                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit, amet consectetur.</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <span className="absolute right-3 text-2xl cursor-pointer hover:scale-110 " onClick={() => setCloseDelive(true)}>x</span>
                                </div>

                                <div className={deliv ? "hidden" : "absolute flex flex-col top-10 left-16 w-[800px] h-[400px] bg-white border shadow-lg rounded-lg  z-20"}>
                                    <h2 className="text-center text-2xl text-orange-600">Самовывоз</h2>
                                    <div className="grid grid-cols-2 p-2 gap-3">
                                        <div className="text-base indent-5 p-2">
                                            <h3 className="text-center text-xl mb-2">Покупай и забирай!</h3>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                            <img src="https://img.freepik.com/free-vector/object-in-carton-box-passed-from-delivers-hands-to-clients-hands-on-white-background-courier-handing-gift-box-to-customer-flat-vector-illustration-fast-delivery-transportation-concept_74855-21995.jpg?w=1380&t=st=1694864960~exp=1694865560~hmac=1b9bf7b11da6cbc8dd348f6d95914bafa95c42f8466808674458e9213c05f228"
                                                alt="/" className="object-cover" />
                                        </div>
                                        <div className="text-base indent-5 p-2">
                                            <h3 className="text-xl text-center mb-2">Забирай готовую еду!</h3>
                                            <ol>
                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit, amet consectetur.</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <span className="absolute left-3 text-2xl cursor-pointer hover:scale-110 " onClick={() => setCloseDelive(true)}>x</span>
                                </div>
                            </div>

                        </div>


                        {/* Search Input */}

                        <div className="bg-slate-100 hover:bg-white rounded-full border gap-1 flex items-center py-0.5 px-2 w-[150px] min-[740px]:w-[300px] min-[1120px]:w-[400px]">
                            <AiOutlineSearch size={20} />
                            <input className="bg-transparent py-1  focus:outline-none w-full" type="text" placeholder="Найти блюдо" />
                        </div>

                        {/* Cart button */}

                        <div id="scrollFixed" onClick={() => setCartSide(!cartSide)} className="flex z-20 gap-5">
                            <div className="flex">
                                <span className="text-xs ml-5  rounded-lg text-black p-1">{sum} ₽</span>
                                <button className="bg-black text-md hover:text-orange-600 text-white hidden min-[960px]:flex items-center gap-1 py-1.5 rounded-full">
                                    <BsFillCartFill size={20} className="" /> Корзина
                                </button>
                            </div>
                        </div>

                        {/* Cart Sidebar */}
                        {/*Overlay*/}
                        {cartSide ? <div className=
                            "bg-black/80 fixed w-full h-screen z-20 top-0 left-0 " onClick={() => setCartSide(!cartSide)}></div> : ""}
                        {/* Side */}

                        <div className={cartSide
                            ? "fixed top-0 right-0 w-[400px] h-screen bg-white z-20 duration-300"
                            : "fixed top-0 right-[-100%] w-[400px] h-screen bg-white z-20 duration-300"}>
                            <div className="">
                                <AiOutlineClose
                                    onClick={() => setCartSide(!cartSide)} size={30} className="absolute left-4 top-4 cursor-pointer hover:rotate-180 duration-500" />
                                <div className="flex justify-end">
                                    <h2 className="text-2xl p-4">
                                        <span className="font-bold">eDa</span>livery
                                    </h2>

                                </div>
                                <div className="text-center text-2xl grid">
                                    <span className="">Корзина</span>
                                    <div className="text-start text-lg grid px-5">
                                        <div className="mb-14">{cart.length > 0 ?
                                            <div>
                                                <div className="my-8">
                                                    {nameCart}
                                                </div>
                                                <div className="flex gap-3 text-xl justify-between mb-5">
                                                    <span className="">Выбрано: {cart.length}</span>
                                                    <span className="">сумма: <span className="text-orange-600">{sum} ₽</span></span>
                                                    <button onClick={() => dispatch(clearCart())} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                                        🗑️
                                                    </button>
                                                </div>
                                                <div className="flex justify-center">
                                                    <button className=" py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-orange-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                                        Оформить на {sum} ₽
                                                    </button>
                                                </div>

                                            </div> :
                                            <div className="grid justify-items-center">
                                                <span className="text-2xl mb-5">пуста</span>
                                                <p className="mb-5 text-2xl text-orange-600">Вы ничего не выбрали!</p>
                                                <img src="https://cdn-icons-png.flaticon.com/128/6009/6009591.png" alt="/" />
                                            </div>}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>




                        {/* Mobile Menu */}
                        {/* Overlay */}
                        {nav ? <div className=
                            "bg-black/80 fixed w-full h-screen z-20 top-0 left-0 " onClick={() => setNav(!nav)}></div> : ""}



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