import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "./data/data";
const Category = () => {

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {

        if (window.pageYOffset > 70) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    return (
        <div className="w-full  bg-orange-200 grid justify-items-center sticky top-0 z-10">

            <div className="grid grid-cols-3 py-2 max-[520px]:gap-1 gap-10 sm:w-2/3 sm:flex flex-wrap">
                <>
                    {categories.map((item, index) => (

                        <Link to={`/category/${item.slug}`}>
                            {!showButton &&
                                <div className="flex items-center gap-2">
                                    <img className="w-8" src={item.image} alt={item.name} />
                                    <h2 className="sm:text-lg text-sm hover:text-orange-600">{item.name}</h2>
                                </div>}
                            {showButton && <div className="flex items-center gap-2">                                
                                <h2 className="sm:text-lg text-sm hover:text-orange-600">{item.name}</h2>
                            </div>}

                        </Link>

                    ))}
                    {showButton && (
                        <>
                            
                            <button className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                                Кнопка
                            </button>
                        </>

                    )}
                </>
            </div>
        </div>
    );

};

export default Category;