import React from "react";




const HeadLineCards = () => {
    
    return (
        <>
            <div className="w-3/4 mx-auto px-5 py-12 grid md:grid-cols-3 gap-5">
                {/* Card */}
                <div className="rounded-xl relative">
                    {/* Overlay */}
                    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                        <p className="font-bold text-2xl px-2 pt-4">2 по цене 1</p>
                        <p className="px-2">До 20 Августа</p>
                        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Заказать сейчас</button>
                    </div>
                    <img
                        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAyNi10YXlsb3Ita2lzZXItMjVfMS5qcGc.jpg"
                        alt="/" />
                </div>
                {/* Card */}
                <div className="rounded-xl relative">
                    {/* Overlay */}
                    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                        <p className="font-bold text-2xl px-2 pt-4">Новые рестораны</p>
                        <p className="px-2"></p>
                        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Заказать сейчас</button>
                    </div>
                    <img
                        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                        src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczQ2LW1vbmlrYWdyYWJrb3dza2Etcm9hc3RlZC1wb3JrLWFuZC1wb3RhdG8tc2FsYWQtOC1leWUuanBn.jpg"
                        alt="/" />
                </div>
                {/* Card */}
                <div className="rounded-xl relative">
                    {/* Overlay */}
                    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                        <p className="font-bold text-2xl px-2 pt-4">Мы так же доставляем десерты</p>
                        <p className="px-2">Вкусные угощения</p>
                        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Заказать сейчас</button>
                    </div>
                    <img
                        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                        src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvaXM5NTY1LWltYWdlLWt3dnlmcTJnLmpwZw.jpg"
                        alt="/" />
                </div>
            </div>           
        </>

    );
};

export default HeadLineCards;