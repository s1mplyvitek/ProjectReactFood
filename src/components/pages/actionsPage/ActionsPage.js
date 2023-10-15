import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ActionsPage = () => {
    const actions = useSelector((state) => state.actions)

    return (
        <div className="px-3 md:px-0 md:w-4/5 lg:w-2/3 mx-auto grow mb-10">
            <p className="text-center py-7 text-xl sm:text-3xl text-orange-600 font-bold mt-10 min-[530px]:mt-0">Акции</p>
            <p className="text-center sm:text-xl mb-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi!</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {actions.map((item) =>
                    <Link to={`/action/${item.id}`}>
                        <div className="rounded-xl overflow-hidden border shadow-2xl hover:shadow-none duration-300 cursor-pointer">
                            <img className="w-full h-[300px] object-cover" src={item.img} alt="/" />
                            <p className="p-3 sm:text-xl">{item.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ActionsPage;