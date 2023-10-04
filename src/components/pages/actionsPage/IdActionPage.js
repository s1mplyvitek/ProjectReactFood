import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";



const IdActionPage = () => {

    const { id } = useParams();
    const action = useSelector((state) => state.actions)
    let elementId = action.find((item) => item.id == id)

    return (
        <div className="flex grow">
            <div className="grid grid-cols-2 w-2/3 mx-auto my-10 gap-5">
                <div>
                    <img className="w-full h-[600px] object-cover" src={elementId.img} alt="/" />
                </div>
                <div>
                    <div className="flex gap-3 items-center">
                        <Link to={"/actions"}>
                            <span className="rounded-full p-1 cursor-pointer hover:text-orange-600 mb-7">
                                <AiOutlineArrowLeft size={25} />
                            </span>
                        </Link>
                        <p className="text-xl">Акции</p>
                    </div>
                    <p className="text-3xl text-orange-600 mb-7">{elementId.name}</p>
                    <p className="text-xl">
                        <p className="mb-5">{elementId.condition}</p>
                        <p className="indent-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam!</p>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default IdActionPage;