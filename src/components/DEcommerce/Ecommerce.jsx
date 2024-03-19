import React, { useState } from 'react';

const cardData = [
    { id: 1, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'Vooid Logo T-Shirt', price: '$16.00' },
    { id: 2, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'Vooid Graphic T-Shirt', price: '$21.15' },
    { id: 3, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'Vooid Pattern T-Shirt', price: '$12.00' },
    { id: 4, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'The 400 Blows', price: '$18.40' },
    { id: 5, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'The Catalyzer', price: '$16.00' },
    { id: 6, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'Shooting Stars', price: '$21.15' },
    { id: 7, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'Neptune', price: '$12.00' },
    { id: 8, imageUrl1: 'https://dummyimage.com/380x600/264653/fff', imageUrl2: 'https://dummyimage.com/380x600/458985/fff', type:'Black' ,title: 'The 400 Blows', price: '$18.40' }
];

function Ecommerce() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="flex flex-col text-center w-full mb-4">
                <p className="text-sm mb-5">Descubre</p>
                <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
                    Tienda Vooid
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Compra nuestra colección seleccionada de camisetas oversized únicas y con estilo.
                </p>
            </div>
            <div className="container px-36 py-12 mx-auto">
                <div className="justify-center flex flex-wrap -m-4">
                    {cardData.map((card) => (
                        <div 
                            key={card.id} 
                            className="lg:w-1/3 md:w-1/2 p-4 w-full mb-6"
                            onMouseEnter={() => handleMouseEnter(card.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="block relative rounded overflow-hidden">
                                <img 
                                    alt="ecommerce" 
                                    className="object-cover object-center w-full h-full block transition duration-500 ease-in-out transform hover:scale-110" 
                                    src={hoveredCard === card.id ? card.imageUrl2 : card.imageUrl1} 
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
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">View All</button>
                </div>
            </div>
        </section>
    )
}

export default Ecommerce;