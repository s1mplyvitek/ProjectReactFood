import logo from "../../../content/logo.png"
import style from "./Work.module.css"
import navLogo from "../../../content/footer.png"
import { Link } from "react-router-dom";

const FriendsPage = () => {

    return (
        <>
            <div className="h-screen">
                <div className={"min-h-[400px] bg-[#FFAB08] flex justify-center items-center " + style.work}>
                    <div className="grid grid-cols-2 items-center w-[80vh] pb-10">
                        <img className="hover:rotate-180 duration-300 " src={logo} alt="/" />
                        <Link to="/">
                            <img className="w-full pb-10 pr-3" src={navLogo} alt="/" />
                        </Link>
                    </div>
                </div>
                <div className="grid w-2/3 mx-auto">
                    <p className="text-center mb-10 sm:text-4xl">Lorem ipsum dolor sit, laborum facere inventore</p>
                    <button className="mx-auto">
                        Заполните анкету!
                    </button>
                </div>


            </div>
            <div className={"flex justify-center items-center " + style.bg}>

                <div className="w-1/2 mx-auto bg-scroll ">
                    <p className="text-xl sm:text-5xl py-24 indent-8">
                        Lorem ipsum dolor sit, laborum facere inventore totam vero doloribus enim recusandae illo beatae asperiores ea!
                    </p>
                </div>
            </div>
            <div>
                <div className="w-2/3 mx-auto ">
                    <p className="text-xl sm:text-5xl py-24 indent-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.laborum facere inventore totam vero doloribus enim recusandae illo beatae asperiores ea, molestias quis impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam odio commodi. At, quibusdam expedita perspiciatis minus neque quis dolor repellendus cumque quaerat necessitatibus est. Magnam architecto eveniet vel odio quis repellat velit similique accusantium doloremque sunt dolor harum doloribus aperiam, repellendus, laudantium quod impedit fugiat commodi non!
                    </p>
                </div>

            </div>
            <div className={" " + style.bg1}>

            </div>
            <div className={"grid justify-center items-center " + style.bg2}>
                <h1 className="text-xl sm:text-6xl text-white px-3" > Lorem ipsum dolor sit, amet consectetur adipisicing elit!</h1>
                <div className="flex">
                    <div>
                        <img className="hover:rotate-3 duration-300 " src={logo} alt="/" />
                    </div>
                    <div>
                        <img className="hover:rotate-3 duration-300 scale-110 " src={logo} alt="/" />
                    </div>
                    <div>
                        <img className="hover:rotate-3 duration-300 scale-125 " src={logo} alt="/" />
                    </div>
                    <div>
                        <img className="hover:rotate-3 duration-300 scale-110 " src={logo} alt="/" />
                    </div>
                    <div>
                        <img className="hover:rotate-3 duration-300  " src={logo} alt="/" />
                    </div>
                </div>

            </div>


        </>
    );
};

export default FriendsPage;