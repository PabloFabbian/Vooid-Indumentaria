import React from 'react';
import './transition.css';

const cardData = [
    { imageUrl: 'Card1.webp', title: 'Materiales de calidad confort duradero.', description: 'Nuestras remeras comodas y duraderas, con materiales premium.' },
    { imageUrl: 'Card2.webp', title: 'Tonos brillantes que muestran tu estilo.', description: 'Elige entre amplia gama de colores vivos para tu personalidad única.' }
];

function Featured() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <p className="text-sm mb-5">Único</p>
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
                    — &nbsp;Conozca Calidad y Variedad en las&nbsp; —<br /> Vooid Oversize
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        En Vooid, ofrecemos una amplia gama de remeras de alta calidad en varios colores e impresiones.<br />
                        Encuentra el diseño perfecto para tu estilo único.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    {cardData.map((card, index) => (
                        <div key={index} className="p-4 w-full md:w-1/4 sm:w-1/2 w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <div className="px-5 py-3">
                                <img src={card.imageUrl} alt={`Imagen ${index + 1}`} className="mb-6 inline-block rounded-lg" />
                                <h2 className="title-font font-medium text-xl md:text-2xl text-white mb-4">{card.title}</h2>
                                <p className="leading-relaxed">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Featured;