import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FillPage = () => {
    const fill = useSelector((state) => state.action)

    return (
        <div className="w-2/3 mx-auto grow mb-10">
            <p className="text-center my-7 text-3xl text-orange-600 font-bold">Акции</p>
            <p className="text-center text-xl mb-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi!</p>
            <div className="grid grid-cols-3 gap-5">
                {fill.map((item) =>
                    <Link to={`/fill/${item.id}`}>
                        <div className="rounded-xl overflow-hidden border shadow-2xl hover:shadow-none duration-300 cursor-pointer">
                            <img className="w-full h-[300px] object-cover" src={item.img} alt="/" />
                            <p className="p-3 text-xl">{item.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default FillPage;