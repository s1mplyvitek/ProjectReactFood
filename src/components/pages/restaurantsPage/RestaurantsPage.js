import { useDispatch, useSelector } from "react-redux";
import Maps from "../../Maps";
import { Link } from "react-router-dom";
import { addIdMap } from "../../../store/slices/mapsSlice";

const RestaurantsPage = () => {

    const restaurants = useSelector((state) => state.restaurants)
    const dispatch = useDispatch();

    return (
        <div className="w-2/3 mx-auto flex flex-col grow items-center text-xl mb-10">
            <h2 className="py-5 text-orange-600 font-bold text-3xl mt-10 min-[530px]:mt-0">Рестораны</h2>
            <div className="mb-10">
                <Maps />
            </div>

            <div className="grid grid-cols-4 gap-3 ">
                {restaurants.map((item) =>
                    <Link to={`/restauran/${item.id}`}>
                        <div onClick={() => dispatch(addIdMap(item))} className="rounded-lg overflow-hidden shadow-2xl hover:shadow-none duration-300 cursor-pointer">
                            <img src={item.image} alt="/" />
                            <div className="p-2">
                                <p className="text-center mb-3 text-orange-600">{item.address}</p>
                                <p className="mb-3">{item.schedule}</p>
                                <p className="text-base indent-5 mb-3">{item.cuisine}</p>
                                <button type="button" className="py-2.5 float-right px-5 mr-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Заходи, если что!
                                </button>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default RestaurantsPage;