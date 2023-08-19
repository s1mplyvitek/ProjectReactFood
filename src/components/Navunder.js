import { TbTruckDelivery } from "react-icons/tb";
import Navbar from "./Navbar";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";

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
        <>
            <Navbar navunder={navigation}/>
            <div className="max-[450px]:hidden">
                {navigation.map((item) => (
                    <p className="">{item.title}</p>
                ))}
            </div>
        </>

    );
};

export default Navunder;