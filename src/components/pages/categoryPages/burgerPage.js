import { data } from "../../data/data";

const BurgerPage = () => {
    return (
        <>
            <h2 className="text-center font-bold text-3xl text-orange-500 p-5">Бургеры</h2>
            <div className="grid grid-cols-4 gap-5 py-5 w-2/3 mx-auto">
                {data.map((item) => (item.category === "burger" ?
                    (
                        <div className="border rounded-lg text-sm text-gray-500 shadow-2xl hover:shadow-none duration-300">
                            <img className="h-[200px] w-full object-cover rounded-t-lg" src={item.image} alt="/" />
                            <div className="p-2">
                                <p className="text-black font-bold pb-3">{item.name}</p>
                                <p className="pb-3">350 г</p>
                                <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam cumque nihil a deleniti,
                                    voluptatem dolores nesciunt, delectus saepe enim labore</p>
                                <div className="flex justify-between pb-3">
                                    <span className="font-bold text-black text-lg">{item.price2}</span>
                                    <button
                                        type="button"
                                        class="inline-block rounded border-2 border-neutral-800 px-6 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                                        data-te-ripple-init>
                                        В корзину
                                    </button>
                                </div>

                            </div>
                        </div>
                    ) : ""
                ))}
            </div>
        </>

    );
};

export default BurgerPage;