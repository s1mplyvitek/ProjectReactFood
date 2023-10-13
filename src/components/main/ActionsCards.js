import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




const ActionsCards = () => {

    let action = useSelector((state) => state.actions)

    return (
        <>
            <section >
                <h2 className="text-4xl font-bold text-orange-600 text-center py-5">
                    Акции
                </h2>
                {/* Cards */}
                <div className=" sm:w-3/4 mx-auto px-5 py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
                    {action.map((item) =>
                        <div className="rounded-xl relative shadow-xl skew-y-2 hover:skew-y-0 hover:scale-125 hover:z-10 duration-300">
                            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                                <p className="font-bold md:text-2xl px-2 pt-4">{item.name}</p>
                                <p className="px-2">До 20 Августа</p>
                                <Link to={`/action/${item.id}`}>
                                    <button type="button" className="absolute max-w-[170px] min-w-[70px] bottom-1 left-1 py-2 px-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-orange-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
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
            </section>
        </>

    );
};

export default ActionsCards;