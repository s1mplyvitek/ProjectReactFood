import React from "react";
import { categories } from "./data/data";
import { Link } from "react-router-dom";



const Category = () => {
    return (
        <div className="w-full  bg-orange-200 grid justify-items-center sticky top-0 z-10">
            {/* Categories */}
            <div className="grid grid-cols-3 py-2 max-[520px]:gap-1 gap-2 sm:w-2/3 sm:flex flex-wrap justify-between">
                {categories.map((item, index) => (

                    <Link to={item.link}>
                        <div className="flex items-center gap-2">
                            <img className="w-8" src={item.image} alt={item.name} />
                            <h2 className="sm:text-lg text-sm hover:text-orange-600">{item.name}</h2>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default Category;
