import { useDispatch, useSelector } from "react-redux";
import { categories } from "../data/data";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../store/slices/cartSlice";
import { useEffect } from "react";
import { getMenu } from "../../store/slices/menuSlice";



const MenuCategoriesCards = () => {

    const { slug } = useParams();

    const addCategory = categories.find((item) => item.slug == slug)
    let category = addCategory.slug;

    let menu = useSelector((state) => state.menu);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMenu())
    }, []);



    return (
        <>
            <h2 className="text-center font-bold text-xl sm:text-3xl text-orange-500 p-5 mt-10 min-[530px]:mt-0">{addCategory.name}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 sm:px-0 sm:w-2/3 mx-auto mb-16">
                {menu.items.map((item) => (item.category === category ?
                    (
                        <div className="border rounded-lg text-sm text-gray-500 shadow-2xl hover:shadow-none duration-300">
                            <Link to={`/dish/${item.id}`}>
                                <img className="h-[200px] w-full object-cover rounded-t-lg" src={item.image} alt="/" />
                                <div className="p-2">
                                    <p className="text-black font-bold pb-3">{item.name}</p>
                                    <p className="pb-3">350 г</p>
                                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam cumque nihil a deleniti,
                                        voluptatem dolores nesciunt, delectus saepe enim labore</p>
                                </div>
                            </Link>
                            <div className="flex justify-between mb-2 p-2">
                                <span className="font-bold text-black lg:text-lg">{item.price} ₽</span>
                                <button
                                    onClick={() => dispatch(addToCart(item))}
                                    type="button"
                                    class="inline-block rounded max-w-[200px] min-w-[50px] border-2 active:bg-orange-600 border-neutral-800 px-6 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                                    data-te-ripple-init>
                                    В корзину
                                </button>
                            </div>
                        </div>

                    ) : ""
                ))}
            </div>
        </>
    );
};


export default MenuCategoriesCards;