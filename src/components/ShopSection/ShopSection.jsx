import React, { useState } from 'react';
import './ShopSection.css';

const cardData = [
    { id: 1, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design1.webp', type:'Black' ,title: 'Vooid Logo T-Shirt', price: '$16.000' },
    { id: 2, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design2.webp', type:'Hoodie' ,title: 'Vooid Graphic T-Shirt', price: '$21.150' },
    { id: 3, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design3.webp', type:'White' ,title: 'Vooid Pattern T-Shirt', price: '$12.000' },
    { id: 4, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design1.webp', type:'Black' ,title: 'The 400 Blows', price: '$18.400' },
    { id: 5, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design1.webp', type:'Red' ,title: 'The Catalyzer', price: '$16.000' },
    { id: 6, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design1.webp', type:'Cream' ,title: 'Shooting Stars', price: '$21.150' },
    { id: 7, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design1.webp', type:'Black' ,title: 'Neptune', price: '$12.000' },
    { id: 8, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: './Design1.webp', type:'Drip' ,title: 'The 400 Blows', price: '$18.400' }
];

function Ecommerce() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (id) => {
        setHoveredCard(id);
    };

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="flex flex-col text-center w-full mb-4">
                <p className="text-sm mb-5">Descubre</p>
                <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
                    — &nbsp;&nbsp;Shop&nbsp;&nbsp;  —
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Compra nuestra colección seleccionada de camisetas oversized únicas y con estilo.
                </p>
            </div>
            <div className="container px-6 md:px-36 py-12 -pb-12 mx-auto">
                <div className="justify-center flex flex-wrap -m-4">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="lg:w-1/3 md:w-1/2 w-1/2 p-4 w-full mb-6 cursor-pointer relative"
                            onMouseEnter={() => handleCardHover(card.id)}
                            onMouseLeave={() => handleCardHover(null)}
                        >
                            <a className="block relative rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block transition-opacity duration-500 ease-in-out"
                                    src={card.imageUrl1}
                                />
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block transition-opacity duration-500 ease-in-out absolute top-0 left-0"
                                    src={card.imageUrl2}
                                    style={{ opacity: hoveredCard === card.id ? 1 : 0 }}
                                />
                            </a>
                            <div className="mt-4 text-center">
                                <h2 className="text-white title-font text-lg font-medium">{card.title}</h2>
                                <p className="text-gray-500">{card.type}</p>
                                <p className="mt-1">{card.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-2 w-full">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out">View All</button>
                </div>
            </div>
        </section>
    )
}

export default Ecommerce;