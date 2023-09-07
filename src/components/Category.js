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

            <div className="flex flex-wrap py-2 max-[520px]:gap-1 gap-6 w-2/3 ">
                <>
                    {categories.map((item, index) => (

                        <Link to={`/category/${item.slug}`}>
                            {!showButton &&
                                <div className="flex items-center gap-2">
                                    <img className="w-8" src={item.image} alt={item.name} />
                                    <h2 className="sm:text-lg text-sm hover:text-orange-600">{item.name}</h2>
                                </div>}
                            {showButton && <div className="">                                
                                <h2 className="text-sm sm:text-base   hover:text-orange-600">{item.name}</h2>
                            </div>}

                        </Link>

                    ))}                    
                </>
            </div>
        </div>
    );

};

export default Category;