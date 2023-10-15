import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";



const IdActionPage = () => {

    const { id } = useParams();
    const action = useSelector((state) => state.actions)
    let elementId = action.find((item) => item.id == id)

    return (
        <div className="flex grow">
            <div className="grid sm:grid-cols-2 p-3 sm:p-0 sm:w-2/3 mx-auto my-10 sm:gap-5">
                <div>
                    <img className="w-full sm:h-[600px] object-cover" src={elementId.img} alt="/" />
                </div>
                <div>
                    <div className="flex gap-3 items-center sm:text-xl">
                        <Link to={"/actions"}>
                            <span className="rounded-full p-1 cursor-pointer hover:text-orange-600 mb-7">
                                <AiOutlineArrowLeft size={25} />
                            </span>
                        </Link>
                        <p className="">Акции</p>
                    </div>
                    <p className="text-xl sm:text-3xl text-orange-600 mb-7">{elementId.name}</p>
                    <p className="sm:text-xl">
                        <p className="mb-5">{elementId.condition}</p>
                        <p className="indent-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam!</p>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default IdActionPage;