import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Maps from "../../Maps";



const IdRestaurantPage = () => {
    const { id } = useParams();
    const restaurant = useSelector((state) => state.restaurants)
    let elementId = restaurant.find((item) => item.id == id)

    return (
        <>
            <h1 className="text-center pt-14 text-xl sm:text-3xl text-orange-600"> eDalivery - {elementId.address}</h1>
            <div className="w-2/3 mx-auto flex flex-col items-center mt-3 sm:mt-0">
                <div className="mb-5"><Maps /></div>
            </div>
            <div className="px-3 sm:px-0 sm:w-2/3 mx-auto flex flex-col items-center mb-10">
                <div className="grid sm:grid-cols-2 sm:text-xl gap-5 relative">
                    <img src={elementId.image} alt="/" />
                    <div>
                        <p className="mb-3"><span>По адрессу {elementId.address}</span></p>
                        <p className="mb-4 indent-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam!</p>
                        <span>Ежедневно {elementId.schedule}</span>
                    </div>

                </div>

            </div>
        </>

    );
};

export default IdRestaurantPage;