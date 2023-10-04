import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { addToFavorites } from "../../store/slices/favoritesSlice";

const IdCardPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    let elementId = data.find((item) => item.id == id)

    return (
        <div className="w-2/3 mx-auto flex py-5 gap-5 ">
            <img className="h-[600px] w-[400px] object-cover rounded-lg" src={elementId.image} alt="/" />
            <div className="grid grid-cols-1 content-start gap-5">
                <div>
                    <h2 className="text-2xl">{elementId.name}</h2>
                    <p className="text-gray-500">{elementId.name} - lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam cumque nihil a deleniti,
                        voluptatem dolores nesciunt, delectus saepe enim labore</p>
                </div>
                <span>{elementId.price2} ₽</span>
                <button
                    onClick={() => dispatch(addToCart(elementId))}
                    type="button"
                    class="inline-block w-[200px] rounded border-2 border-neutral-800 px-6 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                    data-te-ripple-init>
                    В корзину
                </button>
                <span className="flex gap-1 items-center text-xl cursor-pointer active:text-orange-400 hover:text-orange-600"
                    onClick={() => dispatch(addToFavorites(elementId))}>
                    <AiFillHeart size={35} className=" hover:scale-125 active:scale-100 duration-100" />Добавить в избранное</span>
            </div>


        </div>
    );
};

export default IdCardPage;