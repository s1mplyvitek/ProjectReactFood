import { Link } from "react-router-dom";
import { categories } from "../data/data";



const CategoriesCardsMenu = () => {
    return (
        <div className="w-3/4 mx-auto mb-16">
            <h1 className="text-2xl sm:text-4xl text-center text-orange-600 font-bold my-5">Наше меню</h1>

            <div className="grid grid-cols-1 min-[530px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 py-5 justify-items-center">
                {categories.map((item) => (

                    <Link to={`/category/${item.slug}`}>
                        <div className="w-full mx-auto hover:scale-105 duration-300">
                            <img className="h-[200px] object-cover mx-auto" src={item.image2} alt="/" />
                            <p className="text-center text-base sm:text-xl font-bold text-gray-500">{item.name}</p>

                        </div>
                    </Link>


                ))}
            </div>
        </div>
    );
};

export default CategoriesCardsMenu;