import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Maps from "../Maps";



const RestaurantPage = () => {
    const { id } = useParams();
    const restaurant = useSelector((state) => state.data)
    let elementId = restaurant.find((item) => item.id == id)

    return (
        <div className="w-2/3 mx-auto flex flex-col items-center">
            <span className="text-center py-10 text-3xl text-orange-600"> eDalivery - {elementId.address}</span>
            <div className="mb-5"><Maps /></div>
            <div className="grid grid-cols-2 text-xl gap-5 relative">
                <img src={elementId.image} alt="/" />
                <div>
                    <p className="mb-3"><span>По адрессу {elementId.address}</span></p>
                    <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam!</p>
                    <span>Ежедневно {elementId.schedule}</span>
                </div>

            </div>

        </div>
    );
};

export default RestaurantPage;