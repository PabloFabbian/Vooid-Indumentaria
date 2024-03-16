import React from 'react';

const HeroHeaderSection = () => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center filter" style={{backgroundImage: "url('Gatobg32.jpg')"}}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-left text-center md:w-4/6 -mt-40 lg:-mt-16 lg:-ml-40 md:ml-20 md:items-start md:text-left mb-16 md:mb-0">
                    <h1 className="shadow-behind mb-4 font-bold text-white leading-tight text-4xl md:text-5xl">
                        Descubrí los Últimos Diseños
                        <br />de Indumentaria
                        <br />Oversize
                    </h1>
                    <p className="mb-8 leading-relaxed text-white text-pretty">
                        Compra ahora diseños exclusivos o personalizados que te hagan único.
                        <br className="hidden lg:inline-block"/>Calidad, color y estampados que se ajustan a tu estilo.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop</button>
                        <button className="ml-4 inline-flex text-indigo-600 bg-slate-100 border-0 py-2 px-6 focus:outline-none hover:bg-slate-200 hover:text-white rounded text-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHeaderSection;