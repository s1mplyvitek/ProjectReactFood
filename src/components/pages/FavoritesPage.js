import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/slices/cartSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { removeFromFavorites } from "../../store/slices/favoritesSlice";

const FavoritesPage = () => {
    const favor = useSelector((state) => state.favorites);
    const dispatch = useDispatch()

    return (
        <div className="px-3 sm:px-0 sm:w-2/3 mx-auto py-5 grid grow mb-16 ">
            <span className="text-center mb-5 text-orange-600 text-xl sm:text-3xl font-bold mt-10 min-[530px]:mt-0">Любимые блюда</span>
            <div className="grid min-[450px]:px-16 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {favor.map((item) =>
                    <div className="border rounded-lg text-sm text-gray-500 shadow-2xl hover:shadow-none duration-300">
                        <Link to={`/dish/${item.food.id}`}>
                            <img className="sm:h-[200px] w-full object-cover rounded-t-lg" src={item.food.image} alt="/" />
                            <div className="p-2">
                                <p className="text-black font-bold pb-3">{item.food.name}</p>
                                <p className="pb-3">350 г</p>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam cumque nihil a deleniti,
                                    voluptatem dolores nesciunt, delectus saepe enim labore</p>
                            </div>
                        </Link>
                        <div className="flex justify-between mb-2 p-2">
                            <span className="font-bold text-black sm:text-lg">{item.food.price} ₽</span>
                            <button
                                onClick={() => dispatch(addToCart(item.food))}
                                type="button"
                                class="inline-block rounded border-2 active:bg-orange-600 border-neutral-800 px-6 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                                data-te-ripple-init>
                                В корзину
                            </button>
                        </div>
                        <div className="flex gap-1 text-black p-2 items-center sm:text-base hover:text-orange-600 cursor-pointer"
                            onClick={() => dispatch(removeFromFavorites(item.food.id))}>
                            <span><AiFillCloseCircle size={30} /></span>
                            <p className="">Убрать из избранное</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;