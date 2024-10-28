import React from 'react';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    const handleBackgroundClick = (e) => {
        if (e.target.id === 'modal-background') {
        onClose();
        }
    };

    return (
        <div
        id="modal-background"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
        onClick={handleBackgroundClick}
        >
        <div className="relative bg-[#2A2A2A] rounded-lg max-w-3xl w-full p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={onClose}
            >
            &times;
            </button>
            <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-6">
                <h2 className="text-2xl text-white font-bold">{product.name}</h2>
                <p className="text-white mt-4">{product.type}</p>
                <p className="text-gray-300 mt-4">{product.availability}</p>
                <p className="text-xl text-yellow-400 font-semibold mt-6">
                {product.price.toLocaleString("es-AR")} ARS
                </p>
                <div className="mt-6">
                <label className="text-white">Color:</label>
                <select className="w-full mt-2 p-2 rounded-md bg-gray-800 text-white">
                    <option>{product.color}</option>
                </select>
                </div>
                <button className="mt-8 w-full bg-yellow-400 text-black py-2 px-4 rounded-md">
                Añadir al carrito
                </button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ProductModal;