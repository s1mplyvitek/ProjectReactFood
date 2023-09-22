import logo from "../../content/logo.png"
import style from "./Work.module.css"

const FriendsPage = () => {
    return (
        <div className="h-screen grow">
            <div className={"h-[500px] bg-[#FFAB08] " + style.work}>
                <img src={logo} alt="/" />
            </div>
            <div className="w-2/3 mx-auto">

                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            </div>
        </div>

    );
};

export default FriendsPage;