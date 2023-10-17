import { useParams } from "react-router-dom";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { addToFavorites } from "../../store/slices/favoritesSlice";
import { useEffect } from "react";
import { getMenu } from "../../store/slices/menuSlice";

const IdCardPage = () => {

    let menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenu())
    }, []);


    const { id } = useParams();
    let elementId = menu.items.find((item) => item.id == id)

    return (
        <div className="w-2/3 mx-auto grid md:flex py-5 gap-5 mt-10 min-[530px]:mt-0">
            <img className="md:h-[60%] md:w-[40%] w-full  object-cover rounded-lg" src={elementId.image} alt="/" />
            <div className="grid grid-cols-1 content-start gap-5">
                <div>
                    <h2 className="sm:text-2xl">{elementId.name}</h2>
                    <p className="text-gray-500 text-xs sm:text-base">{elementId.name} - lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam cumque nihil a deleniti,
                        voluptatem dolores nesciunt, delectus saepe enim labore</p>
                </div>
                <span className="text-sm sm:text-base">{elementId.price} ₽</span>
                <button
                    onClick={() => dispatch(addToCart(elementId))}
                    type="button"
                    class="inline-block max-w-[200px] rounded border-2 active:bg-orange-600 border-neutral-800 px-6 text-[10px] md:text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                    data-te-ripple-init>
                    В корзину
                </button>
                <span className="flex gap-1 items-center text-sm md:text-xl cursor-pointer active:text-orange-400 hover:text-orange-600"
                    onClick={() => dispatch(addToFavorites(elementId))}>
                    <AiFillHeart size={35} className=" hover:scale-125 active:scale-100 duration-100" />Добавить в избранное</span>
            </div>


        </div>
    );
};

export default IdCardPage;