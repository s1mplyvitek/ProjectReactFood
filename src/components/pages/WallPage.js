import { useSelector } from "react-redux";
import Maps from "../Maps";

const WallPage = () => {

    const restaurants = useSelector((state) => state.data)

    return (
        <div className="w-2/3 mx-auto flex flex-col grow items-center text-xl ">
            <h2 className="py-5 text-orange-600 font-bold text-3xl">Рестораны</h2>
            <div className="mb-10">
                <Maps />
            </div>

            <div className="grid grid-cols-4 gap-3 ">
                {restaurants.map((item) =>
                    <div className="rounded-lg overflow-hidden shadow-2xl hover:shadow-none duration-300 cursor-pointer">
                        <img src={item.image} alt="/" />
                        <div className="p-2">
                            <p className="text-center">{item.address}</p>
                            <p>{item.schedule}</p>
                            <p>{item.cuisine}</p>
                        </div>

                    </div>

                )}
            </div>
        </div>
    );
};

export default WallPage;