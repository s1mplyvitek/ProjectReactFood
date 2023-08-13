import React, { useState } from "react";
import { data } from "./data/data";
import Cards from "./Cards";

const Food = () => {    

    const [foods, setFoods] = useState(data)  

    // Filter

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })

        );
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };


    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Самые популярные блюда</h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between">

                {/* Filter Type */}
                <div>
                    <p className="font-bold text-gray-700">Фильтр по виду блюда</p>
                    <div className="flex  flex-wrap">
                        <button onClick={() => setFoods(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Все</button>
                        <button onClick={() => filterType("burger")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Бургеры</button>
                        <button onClick={() => filterType("pizza")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Пицца</button>
                        <button onClick={() => filterType("salad")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Салаты</button>
                        <button onClick={() => filterType("chicken")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Курица</button>
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
                {data.map((item) => (
                    <Cards key={item.id} names={item.name} categories={item.category} images={item.image} prices={item.price} />
                ))}
            </div>
        </div>
    );
};

export default Food;