import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import { AiFillTag, AiOutlineClose, AiTwotoneShop } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../store/slices/sidebarNavSlice";


const NavbarHeader = () => {

    const bool = useSelector((state) => state.navside)
    const dispatch = useDispatch();


    let navigation = [
        { title: "О нас", icon: <TbTruckDelivery />, link: "/about" },
        { title: "Избранное", icon: <MdFavorite />, link: "favorites" },
        { title: "Рестораны", icon: <AiTwotoneShop />, link: "restaurants" },
        { title: "Акции", icon: <AiFillTag />, link: "actions" },
        { title: "Отзывы", icon: <BsFillSaveFill />, link: "reviews" },
        { title: "Помощь", icon: <MdHelp />, link: "support" },
        { title: "Вакансия", icon: <FaUserFriends />, link: "/work" },
    ];

    return (

        <nav>
            <div className="bg-white">
                <div className="max-[529.9px]:hidden w-2/3 mx-auto flex flex-wrap justify-end gap-4  pt-2">
                    {navigation.map((item) => (
                        <Link to={item.link}>
                            <div className="flex gap-1 hover:scale-105 duration-100 active:scale-100 place-content-center text-sm py-1 hover:text-orange-600"><div className="grid place-content-center">{item.icon}</div>{item.title}</div>
                        </Link>
                    ))}
                </div>
            </div>


            {/* Mobile Menu */}
            {/* Overlay */}
            {bool ? <div className=
                "bg-black/80 fixed w-full h-screen z-20 top-0 left-0 " onClick={() => dispatch(setSidebar())}></div> : ""}



            {/* Side drawer menu */}

            <div className={bool
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-20 duration-300"}>
                <AiOutlineClose
                    onClick={() => dispatch(setSidebar())} size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">
                    <span className="font-bold">eDa</span>livery
                </h2>

                <nav>
                    <div className="flex flex-col p-4 text-gray-800">

                        {navigation.map((item) => (
                            <Link to={item.link}>
                                <div onClick={() => dispatch(setSidebar())} className="text-xl py-4 flex">
                                    <div size={25} className="mr-4">{item.icon}</div>
                                    <p>{item.title}</p>
                                </div>
                            </Link>
                        ))}

                    </div>
                </nav>
            </div>
        </nav>
    );
};

export default NavbarHeader;