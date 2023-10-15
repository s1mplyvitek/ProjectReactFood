import { useState } from "react";



const TimeDelivery = () => {


    const [deliv, setDeliv] = useState(true);
    const [closeDeliv, setCloseDelive] = useState(true);

    return (
        <>
            {!closeDeliv ? <div className=
                "fixed w-full h-screen z-20 top-0 left-0 " onClick={() => setCloseDelive(true)}></div> : ""}

            <div className="hidden min-[1330px]:flex items-center bg-white rounded-full p-1 text-[12px] cursor-pointer relative z-20">
                <div className="flex" onClick={() => setCloseDelive(false)}>
                    <p className={deliv ? "bg-black text-white rounded-full p-1.5" : "p-1.5 hover:scale-110 duration-200"} onClick={() => setDeliv(true)}>Доставка</p>
                    <p className={deliv ? "p-1.5 hover:scale-110 duration-200" : "bg-black text-white rounded-full p-1.5"} onClick={() => setDeliv(false)}>Самовывоз</p>
                </div>

                <div className={closeDeliv ? "hidden" : "flex"}>
                    <div className={deliv ? "absolute flex flex-col top-10 right-16 w-[400px] max-h-[700px] bg-white border shadow-lg rounded-lg  z-20" : "hidden"}>
                        <h2 className="text-center text-2xl text-orange-600">Доставка</h2>
                        <div className="grid grid-cols-1 p-2 gap-3">
                            <div className="text-base indent-5 p-2">
                                <h3 className="text-center text-xl mb-2">Стандартная доставка</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="https://img.freepik.com/premium-vector/delivery-yellow-van-carrying-parcels-on-points-cargo-car-on-a-white-background_101087-530.jpg?w=1380"
                                    alt="/" className="" />
                            </div>
                            <div className="text-base indent-5 p-2">
                                <h3 className="text-xl text-center mb-2">Получи заказ максимально быстро:</h3>
                                <ol>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur.</li>
                                </ol>
                            </div>
                        </div>
                        <span className="absolute right-3 text-2xl cursor-pointer hover:scale-110 " onClick={() => setCloseDelive(true)}>x</span>
                    </div>

                    <div className={deliv ? "hidden" : "absolute flex flex-col top-10 left-16 w-[400px] max-h-[700px] bg-white border shadow-lg rounded-lg  z-20"}>
                        <h2 className="text-center text-2xl text-orange-600">Самовывоз</h2>
                        <div className="grid grid-cols-1 p-2 gap-3">
                            <div className="text-base indent-5 p-2">
                                <h3 className="text-center text-xl mb-2">Покупай и забирай!</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="https://img.freepik.com/free-vector/object-in-carton-box-passed-from-delivers-hands-to-clients-hands-on-white-background-courier-handing-gift-box-to-customer-flat-vector-illustration-fast-delivery-transportation-concept_74855-21995.jpg?w=1380&t=st=1694864960~exp=1694865560~hmac=1b9bf7b11da6cbc8dd348f6d95914bafa95c42f8466808674458e9213c05f228"
                                    alt="/" className="object-cover" />
                            </div>
                            <div className="text-base indent-5 p-2">
                                <h3 className="text-xl text-center mb-2">Забирай готовую еду!</h3>
                                <ol>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur.</li>
                                </ol>
                            </div>
                        </div>
                        <span className="absolute left-3 text-2xl cursor-pointer hover:scale-110 " onClick={() => setCloseDelive(true)}>x</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default TimeDelivery;