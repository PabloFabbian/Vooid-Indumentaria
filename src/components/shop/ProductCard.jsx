import React from 'react';

const ProductCard = ({ product, onClick, formatPrice }) => {
    return (
        <li className="relative group">
            <div
                className="block overflow-hidden cursor-pointer relative"
                onClick={() => onClick(product)}
            >
                <div className="relative border border-white/10 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 2xl:h-[450px] bg-gradient-to-br from-[#1E1D22] to-[#3E3A35] ${product.availability === "Sin Stock" ? "brightness-75 filter blur-[3px]" : ""}`}
                    />

                    {product.availability === "Pre Order" && (
                        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 border border-white/30 uppercase tracking-wide">
                            Pre Order
                        </div>
                    )}

                    {product.availability === "En Stock" && (
                        <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full"></div>
                    )}

                    {product.availability === "Sin Stock" && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white font-semibold text-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            Agotado
                        </div>
                    )}
                </div>

                <div className="relative bg-transparent pt-3">
                    <h3 className="text-sm 2xl:text-base text-white font-medium mb-1">
                        {product.name}
                    </h3>
                    <p className="text-sm 2xl:text-lg font-semibold text-white">
                        {formatPrice(product.price)}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;