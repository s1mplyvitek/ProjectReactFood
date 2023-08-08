import React from "react";


const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[600px] relative">
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Самая <span className="text-orange-600">Лучшая</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-600">Еда</span> Здесь</h1>
                </div>
                <img className="w-full max-h-[600px] object-cover" src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmYyNjIyLWltYWdlLWt3dnluZXd0LmpwZw.jpg" alt="/" />
            </div>
        </div>
    )
}

export default Hero