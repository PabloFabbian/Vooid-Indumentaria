import React from 'react';

const HeroHeaderSection = () => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center filter brightness-75" style={{backgroundImage: "url('Gatobg.webp')"}}>
            <div className="container mx-auto px-4">
                <div className="lg:flex-grow md:w-4/6 -ml-20 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                        Descubrí los Últimos Diseños
                        <br />de Indumentaria Oversize
                    </h1>
                    <p className="mb-8 leading-relaxed text-white text-pretty">
                        Compra ahora diseños exclusivos o personalizados que te hagan único.
                        <br className="hidden lg:inline-block"/>Calidad, color y estampados que se ajustan a tu estilo.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop</button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHeaderSection;