import React from 'react';
import ReviewCarousel from '../../components/ReviewCarousel/ReviewCarousel';
import Card from '../../components/Card/Card';
import './transition.css';

const cardData = [
    { imageUrl: 'Card1.webp', title: 'Materiales de calidad, confort duradero.', description: 'Nuestras remeras son cómodas y duraderas, hechas con materiales premium.' },
    { imageUrl: 'Card2.webp', title: 'Los tonos brillantes que muestran tu estilo.', description: 'Podes elegir entre una amplia gama de colores vivos para tu personalidad única.' }
];

function Featured() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <p className="text-sm mb-5">Único</p>
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
                        — Descrubrí Calidad y Variedad en la&nbsp; —<br /> Indumentaria Vooid
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        En Vooid, ofrecemos una amplia gama de remeras de alta calidad en varios colores e impresiones.<br />
                        Encuentra el diseño perfecto para tu estilo único.
                    </p>
                </div>
                <div className="flex md:-m-4 text-center justify-center">
                    {cardData.map((card, index) => (
                        <Card key={index} imageUrl={card.imageUrl} title={card.title} description={card.description} />
                    ))}
                </div>
                <div className="flex justify-center"> {/* Nuevo contenedor para centrar el ReviewCarousel */}
                    <ReviewCarousel />
                </div>
            </div>
        </section>
    );
}

export default Featured;