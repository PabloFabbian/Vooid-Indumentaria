import React from 'react';

function Card({ imageUrl, title, description }) {
    return (
        <div className="p-4 w-full md:w-1/4 sm:w-1/2 w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="md:px-5 py-3">
                <img src={imageUrl} alt={`Imagen`} className="mb-6 inline-block rounded-lg" />
                <h2 className="title-font font-medium text-xl md:text-2xl text-white mb-4">{title}</h2>
                <p className="leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export default Card;