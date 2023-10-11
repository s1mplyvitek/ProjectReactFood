import { Link } from "react-router-dom";
import st from "./About.module.css";
import burger from "../../../content/logo.png";
import logo from "../../../content/footer.png";
import React from "react";
import burgerUp from "../../../content/burgerUp.png";



const AboutPage = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>

            <div className="bg-[#ffad08e3] ">
                <div className={"h-[500px] bg-[#FFAB08] " + st.about}>
                    <div className="flex justify-center p-5">
                        <Link to={"/"}>
                            <img className="cursor-pointer animate-[logo_1s_2_alternate]" src={logo} alt="/" />
                        </Link></div>
                    <div className="w-3/5 mx-auto grid grid-cols-2">
                        <div className="grid animate-[burger_1s_ease-in_2_alternate] "><img src={burger} alt="/" /></div>
                        <div className="text-5xl grid justify-items-start place-items-center">
                            <h2 className="-skew-y-6 animate-[slogo_1s_ease-in-out]">
                                <span className="text-[#FFFFFF]">Lorem ipsum dolor sit </span><tr />
                                <span className="text-[#FF5C00]">commodi neque repellat</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className={st.mainDiv}>
                    <div className={"" + st.bg}>
                        <h1 className="text-4xl text-white">
                            Lorem ipsum dolor sit, amet consectetur!
                        </h1>
                    </div>
                </div>
                <div className={st.mainDiv}>
                    <div className={"w-full mx-auto " + st.bg1}>
                        <img className="mx-auto ml-[70vh]" src={burgerUp} alt="/" />
                    </div>
                </div>

                <div>
                    <img 
                    className={"w-2/3 mx-auto " + st.hero}
                    src="https://img.freepik.com/free-photo/chicken-burger-bun-lettuce-tomato-meaf-cheese-french-fries-mayonnaise-ketchup-side-view_141793-3713.jpg?w=1380&t=st=1697043965~exp=1697044565~hmac=e66595c53d0ccb731f2868b7703633d94556e67842d41b7a6ecd522f84259f97"
                        alt="/"
                    />
                </div>


                <div className="w-2/3 mx-auto grid justify-items-center text-amber-900">
                    <h1 className="my-5 text-3xl ">eDalivery</h1>
                    <p className="indent-8 mb-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere inventore totam vero doloribus enim recusandae illo beatae asperiores ea, molestias quis impedit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam odio commodi. At, quibusdam expedita perspiciatis minus neque quis dolor repellendus cumque quaerat necessitatibus est. Magnam architecto eveniet vel odio quis
                        repellat velit similique accusantium doloremque sunt dolor harum doloribus aperiam, repellendus, laudantium quod impedit fugiat commodi non! Ipsam, rerum.

                    </p>
                    <div className="grid grid-rows-6 grid-cols-3 gap-6 mb-5">
                        <div className="row-span-1 col-span-2 col-start-1 overflow-hidden rounded-lg">
                            <img src="https://cf.bstatic.com/xdata/images/city/600x200/519285.jpg?k=bcafc4cec36b056ccef5878042798919d0570ebdaa2028dd21454a2070ff84dc&o="
                                alt="/" className="object-cover w-full h-full " />
                        </div>
                        <div className="row-span-1 col-span-1 col-start-1 row-start-2 overflow-hidden rounded-lg">
                            <img src="https://vintage.kz/wp-content/uploads/2019/03/fghb-500x300.jpg" alt="/" className="w-full h-full object-cover" />
                        </div>
                        <div className="row-start-3 row-span-4 rounded-lg overflow-hidden col-start-1">
                            <img src="https://img.freepik.com/premium-photo/atmospheric-french-cafe-with-charming-an-cozy-interior-in-morning-light-intimate-nostalgic-elegant-parisian-generative-ai_742252-9595.jpg?w=740"
                                alt="/" className="h-full w-full object-cover" />
                        </div>
                        <div className="row-start-2 row-span-4 object-cover rounded-lg overflow-hidden col-start-2">
                            <img src="https://img.freepik.com/premium-photo/a-club-sandwich-also-called-a-clubhouse-sandwich-is-a-sandwich-consisting-of-bread_891336-13130.jpg?w=740"
                                alt="/" className="h-full object-cover w-full" />
                        </div>
                        <div className="row-start-1 row-span-4 rounded-lg overflow-hidden col-start-3">
                            <img src="https://img.freepik.com/free-photo/burger-served-with-french-fries-ketchup-and-mayonnaise_140725-8362.jpg?w=740&t=st=1694787222~exp=1694787822~hmac=51c9fa0a1541de8bfbbd1d3628f6a0b3fada7715e584b6f999b2f187ccb6a41a"
                                alt="/" className="h-full w-full object-cover" />
                        </div>
                        <div className="col-start-3 row-start-5 col-span-1 row-span-2 rounded-lg overflow-hidden" >
                            <img src="https://img.freepik.com/free-photo/vertical-shot-of-a-delicious-burger-and-some-french-fries-and-a-glass-of-cocktail-on-a-table_181624-23874.jpg?w=740&t=st=1694888419~exp=1694889019~hmac=72bd59932dec91b5fbce0a7ed57d080d1bf03ca1c7c86086e749d72d6b5f95fb"
                                alt="/" className="object-cover" />
                        </div>
                        <div className="col-start-2 row-start-6 col-span-1 row-span-1 rounded-lg overflow-hidden">
                            <img src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-and-melted-cheese-on-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&uid=R114052350&ga=GA1.2.1806148522.1691225591&semt=sph"
                                alt="/" className="w-full h-full" />
                        </div>
                    </div>

                    <div className="grid grid-rows-6 grid-cols-3 gap-4">
                        <div className="row-start-1 row-span-4 rounded-lg overflow-hidden col-start-1">
                            <img src="https://img.freepik.com/free-photo/group-of-chefs-working-in-the-kitchen_53876-65435.jpg?w=1380&t=st=1694790185~exp=1694790785~hmac=9ea0f68af99e55904c4cd824ea6823ee2d325fb5aaa7b20421b1dfb6eaf93603"
                                alt="/" className="h-full object-cover" />
                        </div>
                        <div className="row-start-2 row-span-4 object-cover rounded-lg overflow-hidden col-start-2">
                            <img src="https://img.freepik.com/free-photo/front-view-man-holding-menu_23-2149930188.jpg?w=1380&t=st=1694790293~exp=1694790893~hmac=e2347581d717a1f14a47c4799d066b17dbf063f415a0c823d5cb328faa2b0856"
                                alt="/" className="h-full object-cover" />
                        </div>
                        <div className="row-start-3 row-span-4 rounded-lg overflow-hidden col-start-3">
                            <img src="https://img.freepik.com/free-photo/pouring-sauce-on-delitious-burger-buns_7502-9876.jpg?w=1380&t=st=1694790389~exp=1694790989~hmac=4bc7654c5ad7d7d089c2acb8c40119e0097fc44269568538b29b182cfcb4fa10"
                                alt="/" className="h-full object-cover" />
                        </div>
                    </div>

                    <div className="">
                        <Link to={"contacts"}>
                            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                ☎
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>

    );
};

export default AboutPage;