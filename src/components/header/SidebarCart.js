import { useDispatch, useSelector } from "react-redux";
import { setSidebarCart } from "../../store/slices/sidebarCartSlice";
import { AiOutlineClose } from "react-icons/ai";
import { clearCart } from "../../store/slices/cartSlice";



const SidebarCart = ({ cart, nameCart, sum }) => {

    const dispatch = useDispatch();
    const bool = useSelector((state) => state.cartside)

    return (
        <>
            {/*Overlay*/}
            {bool ? <div className=
                "bg-black/80 fixed w-full h-screen z-20 top-0 left-0 " onClick={() => dispatch(setSidebarCart())}></div> : ""}
            {/* Side */}

            <div className={bool
                ? "fixed top-0 right-0 w-[400px] h-screen bg-white z-20 duration-300"
                : "fixed top-0 right-[-100%] w-[400px] h-screen bg-white z-20 duration-300"}>
                <div className="">
                    <AiOutlineClose
                        onClick={() => dispatch(setSidebarCart())} size={30} className="absolute left-4 top-4 cursor-pointer hover:rotate-180 duration-500" />
                    <div className="flex justify-end">
                        <h2 className="text-2xl p-4">
                            <span className="font-bold">eDa</span>livery
                        </h2>

                    </div>
                    <div className="text-center text-2xl grid">
                        <span className="">Корзина</span>
                        <div className="text-start text-lg grid px-5">
                            <div className="mb-14">{cart.length > 0 ?
                                <div>
                                    <div className="my-8">
                                        {nameCart}
                                    </div>
                                    <div className="flex gap-3 text-xl justify-between mb-5">
                                        <span className="">Выбрано: {cart.length}</span>
                                        <span className="">сумма: <span className="text-orange-600">{sum} ₽</span></span>
                                        <button onClick={() => dispatch(clearCart())} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                            🗑️
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className=" py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-orange-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                            Оформить на {sum} ₽
                                        </button>
                                    </div>

                                </div> :
                                <div className="grid justify-items-center">
                                    <span className="text-2xl mb-5">пуста</span>
                                    <p className="mb-5 text-2xl text-orange-600">Вы ничего не выбрали!</p>
                                    <img src="https://cdn-icons-png.flaticon.com/128/6009/6009591.png" alt="/" />
                                </div>}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default SidebarCart;