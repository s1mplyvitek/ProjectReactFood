import React, { useState } from "react";
import { data } from "../data/data";
import Cards from "./PopCardsModal";
import CartProvider from "../providers/CartProvider";

const PopMenu = () => {


    let categoryArr = ['burger', 'pizza', 'salad', 'free', 'chicken', "beverages", "dessert", "combo"];
    const popMenu = categoryArr.reduce((acc, category) => {
        const items = data.filter(item => item.category === category);
        return acc.concat(items.slice(0, 2));
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
        <div className="px-5 mx-auto py-10 lg:w-3/4 mb-10">

            <h1 className="text-orange-600 font-bold text-4xl text-center pt-10">Популярные блюда</h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between ">

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

            {/* pop-up*/}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item) => (
                    <CartProvider>
                        <Cards key={item.id} id={item.id} names={item.name} price={item.price2} images={item.image} prices={item.price} />
                    </CartProvider>
                ))}
            </div>
        </div>
    );
};

export default PopMenu;