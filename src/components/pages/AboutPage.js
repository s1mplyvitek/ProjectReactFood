import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <div className="w-4/5 mx-auto grid justify-items-center text-amber-900">
                <h1 className="my-5 text-3xl ">eDalivery</h1>
                <p className="indent-8 mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere inventore totam vero doloribus enim recusandae illo beatae asperiores ea, molestias quis impedit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam odio commodi. At, quibusdam expedita perspiciatis minus neque quis dolor repellendus cumque quaerat necessitatibus est. Magnam architecto eveniet vel odio quis
                    repellat velit similique accusantium doloremque sunt dolor harum doloribus aperiam, repellendus, laudantium quod impedit fugiat commodi non! Ipsam, rerum.

                </p>
                <div className="grid grid-rows-6 grid-cols-3 gap-4 mb-5">
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


        </>

    );
};

export default AboutPage;