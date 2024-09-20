import React, { useState } from "react";
import "./ShopSection.css";

const cardData = [
  {
    id: 1,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design1.webp",
    type: "Black",
    title: "Vooid Logo T-Shirt",
    price: "$16.000",
  },
  {
    id: 2,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design2.webp",
    type: "Hoodie",
    title: "Vooid Graphic T-Shirt",
    price: "$21.150",
  },
  {
    id: 3,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design3.webp",
    type: "White",
    title: "Vooid Pattern T-Shirt",
    price: "$12.000",
  },
  {
    id: 4,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design1.webp",
    type: "Black",
    title: "The 400 Blows",
    price: "$18.400",
  },
  {
    id: 5,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design1.webp",
    type: "Red",
    title: "The Catalyzer",
    price: "$16.000",
  },
  {
    id: 6,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design1.webp",
    type: "Cream",
    title: "Shooting Stars",
    price: "$21.150",
  },
  {
    id: 7,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design1.webp",
    type: "Black",
    title: "Neptune",
    price: "$12.000",
  },
  {
    id: 8,
    imageUrl1: "https://dummyimage.com/380x600/264653/fff",
    imageUrl2: "./Design1.webp",
    type: "Drip",
    title: "The 400 Blows",
    price: "$18.400",
  },
];

function Ecommerce() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="mb-4 flex w-full flex-col text-center">
        <p className="mb-5 text-sm">Descubre</p>
        <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-4xl">
          — &nbsp;&nbsp;Shop&nbsp;&nbsp; —
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          Compra nuestra colección seleccionada de camisetas oversized únicas y
          con estilo.
        </p>
      </div>
      <div className="-pb-12 container mx-auto px-6 py-12 md:px-36">
        <div className="-m-4 flex flex-wrap justify-center">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative mb-6 w-1/2 cursor-pointer p-2 md:w-1/2 md:p-4 lg:w-1/3"
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <a className="relative block overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out"
                  src={card.imageUrl1}
                />
                <img
                  alt="ecommerce"
                  className="absolute left-0 top-0 block h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out"
                  src={card.imageUrl2}
                  style={{ opacity: hoveredCard === card.id ? 1 : 0 }}
                />
              </a>
              <div className="mt-4 text-center">
                <h2 className="title-font text-lg font-medium text-white">
                  {card.title}
                </h2>
                <p className="text-gray-500">{card.type}</p>
                <p className="mt-1">{card.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 w-full p-2">
          <button className="mx-auto flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white transition duration-300 ease-in-out hover:bg-indigo-600 focus:outline-none">
            Ver Todos
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ecommerce;
