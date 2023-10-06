import Modal from "react-modal"
import React from "react";
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom";





Modal.setAppElement('#root');

const PopCardsModal = ({ names, images, prices, key, id, price, itemQty, }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <>
            <div onClick={openModal} key={key} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                <img className="w-full h-[200px] object-cover rounded-t-lg"
                    src={images} alt={names} />
                <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{names}</p>
                    <p>
                        <span className="bg-orange-500 text-white p-1 rounded-full">{prices}</span>
                    </p>
                </div>
            </div>

            <Modal
                className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
                 bg-white p-6 rounded-2xl shadow-xl w-2/5 h-auto"
                overlayClassName="fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex justify-center items-center z-20"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                <div className="grid">
                    <div className="flex justify-between">
                        <p className="font-bold text-3xl">{names}</p>
                        <span className="cursor-pointer" onClick={closeModal}><AiOutlineClose /></span>
                    </div>
                    <div className="flex my-6">
                        <img className="w-2/5 h-[250px] mr-5 object-cover rounded-xl"
                            src={images} alt={names} />
                        <p className="indent-5 w-3/5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam!</p>
                    </div>
                    <div className="flex justify-between text-xl items-center">
                        <div>
                            <Link to={`/dish/${id}`}>
                                <button type="button" class="focus:outline-none text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg
                              px-24 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                                    Добавить
                                </button>
                            </Link>
                            <span>{itemQty}</span>

                        </div>

                        <span >{price} ₽</span>
                    </div>
                </div>

            </Modal>
        </>
    );
};

export default PopCardsModal;