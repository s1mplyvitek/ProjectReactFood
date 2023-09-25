import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai"
import { useSelector } from "react-redux";




const HelpPage = () => {

    const support = useSelector((state) => state.support)



    const [idActive, setIdActive] = useState("");

    const handleItemClick = (id) => {
        setIdActive(idActive === id ? "" : id);
    }

    return (
        <div className="w-2/3 mx-auto grow">
            <h1 className="text-center text-orange-600 text-3xl font-bold my-7">Поддержка</h1>
            <div className="grid bg-slate-300 rounded-lg p-5 text-xl w-2/3 mx-auto">
                <ul>
                    {support.map((item) =>
                        <li className="mb-6">
                            <div className="grid bg-white rounded-md overflow-hidden">
                                <div onClick={() => handleItemClick(item.id)}
                                    className="flex justify-between p-3 cursor-pointer">
                                    {item.question}
                                    <AiOutlineDown className={item.id === idActive ? "rotate-180 duration-300" : "rotate-0 duration-300" }/>
                                </div>
                                <div className={item.id === idActive ? "p-3 bg-slate-100" : "hidden"}>{item.answer}</div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default HelpPage;