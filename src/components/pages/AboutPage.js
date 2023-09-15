import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <div className="w-2/3 mx-auto grid justify-items-center text-amber-900">
                <h1 className="my-5 text-3xl ">eDalivery</h1>
                <p className="indent-8 mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere inventore totam vero doloribus enim recusandae illo beatae asperiores ea, molestias quis impedit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam odio commodi. At, quibusdam expedita perspiciatis minus neque quis dolor repellendus cumque quaerat necessitatibus est. Magnam architecto eveniet vel odio quis
                    repellat velit similique accusantium doloremque sunt dolor harum doloribus aperiam, repellendus, laudantium quod impedit fugiat commodi non! Ipsam, rerum.

                </p>
                <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-and-cheese-sauces-on-the-table_141793-3998.jpg?w=1380&t=st=1694769087~exp=1694769687~hmac=b9f9e9f8fee7346a2cdfbe80247786f78493cec2ca67db7a0b7f71ea1fc0ba71"
                    alt="/" className="rounded-md mb-3" />
                <div className="">
                    <Link to={"contacts"}>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Нофелет!
                        </button>
                    </Link>
                </div>

            </div>


        </>

    );
};

export default AboutPage;