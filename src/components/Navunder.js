import { TbTruckDelivery } from "react-icons/tb";
import Navbar from "./Navbar";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navunder = () => {

    let navigation = [{ title: "О нас", icon: <TbTruckDelivery />, link: "about" },
    { title: "Избранное", icon: <MdFavorite />, link: "favor" },
    { title: "Кошелек", icon: <FaWallet />, link: "wallet" },
    { title: "Помощь", icon: <MdHelp />, link: "help" },
    { title: "Акции", icon: <AiFillTag />, link: "fill" },
    { title: "Лучшие", icon: <BsFillSaveFill />, link: "fillsave" },
    { title: "Приглашайте друзей", icon: <FaUserFriends />, link: "friends" },

    ]

    return (
        <div className="bg-white">            
            <div className="max-[529.9px]:hidden w-2/3 mx-auto flex flex-wrap justify-end gap-4  pt-2">
                {navigation.map((item) => (
                    <Link to={item.link}>
                        <div className="flex gap-1 place-content-center text-sm py-1 hover:text-orange-600"><div className="grid place-content-center">{item.icon}</div>{item.title}</div>
                    </Link>
                ))}
            </div>
            <Navbar navunder={navigation} />
        </div>

    );
};

export default Navunder;