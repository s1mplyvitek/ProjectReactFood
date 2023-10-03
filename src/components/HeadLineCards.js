import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




const HeadLineCards = () => {
    let action = useSelector((state) => state.action)


    return (
        <>
            <div className="w-3/4 mx-auto px-5 py-12 grid md:grid-cols-3 gap-5 mb-16">
                {/* Card */}
                {action.map((item) =>
                    <div className="rounded-xl relative shadow-xl skew-y-2 hover:scale-125 hover:z-10 duration-300">
                        {/* Overlay */}
                        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                            <p className="font-bold text-2xl px-2 pt-4">{item.name}</p>
                            <p className="px-2">До 20 Августа</p>
                            <Link to={`/fill/${item.id}`}>
                                <button type="button" className="absolute bottom-1 left-1 py-2 px-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-orange-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Заказать сейчас!
                                </button>
                            </Link>
                        </div>
                        <img
                            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                            src={item.img}
                            alt="/" />
                    </div>
                )}
            </div>
        </>

    );
};

export default HeadLineCards;