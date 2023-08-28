import { useParams } from "react-router-dom";
import { data } from "./data/data";

const IdPage = () => {
    const { id } = useParams();
    let elementId = data.find((item) => item.id == id)
    
    return (
        <div className="w-2/3 mx-auto flex py-5 gap-5">
            <img className="h-[600px] w-[400px] object-cover rounded-lg" src={elementId.image} alt="/" />
            <div>
                <h2 className="text-2xl">{elementId.name}</h2>
                <p className="text-gray-500">{elementId.name} - lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam cumque nihil a deleniti,
                    voluptatem dolores nesciunt, delectus saepe enim labore</p>
            </div>

        </div>
    );
};

export default IdPage;