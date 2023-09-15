import React, { useState } from "react";
import { categories, data } from "./data/data";
import Cards from "./popCards"
import { Link } from "react-router-dom";

const Food = () => {


    let categoryArr = ['burger', 'pizza', 'salad', 'free', 'chicken', "beverages", "dessert", "combo"];
    const popMenu = categoryArr.reduce((acc, category) => {
        const items = data.filter(item => item.category === category);
        return acc.concat(items.slice(0, 3));
    }, []);

    const [foods, setFoods] = useState(popMenu)

    // Filter

    const filterType = (category) => {
        setFoods(
            popMenu.filter((item) => {
                return item.category === category;
            })

        );
    };

    const filterPrice = (price) => {
        setFoods(
            popMenu.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className="px-5 mx-auto py-10 lg:w-3/4">

            <h1 className="text-4xl text-center text-orange-500 font-bold my-5">Наше меню</h1>

            <div className="grid grid-cols-1 min-[530px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 py-5 justify-items-center">
                {categories.map((item) => (

                    <Link to={`/category/${item.slug}`}>
                        <div className="w-full mx-auto hover:scale-105 duration-300">
                            <img className="h-[200px] object-cover mx-auto" src={item.image2} alt="/" />
                            <p className="text-center text-xl font-bold text-gray-500">{item.name}</p>

                        </div>
                    </Link>


                ))}
            </div>

            <h1 className="text-orange-600 font-bold text-4xl text-center pt-10">Популярные блюда</h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between">

                {/* Filter Type */}
                <div>
                    <p className="font-bold text-gray-700">Фильтр по виду блюда</p>
                    <div className="flex  flex-wrap">
                        <button onClick={() => setFoods(popMenu)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Все</button>
                        <button onClick={() => filterType("burger")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Бургеры</button>
                        <button onClick={() => filterType("pizza")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Пицца</button>
                        <button onClick={() => filterType("salad")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Салаты</button>
                        <button onClick={() => filterType("chicken")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
                        <button onClick={() => filterType("free")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Фри</button>
                        <button onClick={() => filterType("beverages")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Напитки</button>
                        <button onClick={() => filterType("dessert")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Десерт</button>
                        <button onClick={() => filterType("combo")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Комбо</button>

                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className="font-bold text-gray-700">Фильтр по цене</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button onClick={() => filterPrice("$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                        <button onClick={() => filterPrice("$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                        <button onClick={() => filterPrice("$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                        <button onClick={() => filterPrice("$$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item) => (
                    <Cards key={item.id} id={item.id} names={item.name} categories={item.category} images={item.image} prices={item.price} />
                ))}
            </div>
        </div>
    );
};

export default Food;