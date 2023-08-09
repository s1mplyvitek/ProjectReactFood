import React, { useState } from "react";
import { data } from "./data/data";

const Food = () => {

    const [foods, setFoods] = useState(data)

    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Самые популярные блюда</h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between">

                {/* Filter Type */}
                <div>
                    <p className="font-bold text-gray-700">Фильтр по виду блюда</p>
                    <div className="flex  flex-wrap">
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Все</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Бургеры</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Пицца</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Салаты</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Курица</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className="font-bold text-gray-700">Фильтр по цене</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item, index) => (
                    <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                        <img className="w-full h-[200px] object-cover rounded-t-lg"
                         src={item.image} alt={item.name} />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;