import Modal from "react-modal"
import React from "react";
import { AiOutlineClose } from "react-icons/ai"
import './modalStyles.css'
import { Link } from "react-router-dom";



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',


    },
};

Modal.setAppElement('#root');

const Cards = ({ names, categories, images, prices, key, id }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
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
                className="modal"
                overlayClassName="overlay"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <img className="w-full h-[300px] object-cover rounded-t-lg"
                    src={images} alt={names} />
                <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{names}</p>
                    <Link to={`/catalog/${id}`}>
                        <button>Выбери меня!</button>                        
                    </Link>
                    <div className="cursor-pointer" onClick={closeModal}><AiOutlineClose /></div>
                </div>
            </Modal>
        </>
    );
};

export default Cards;