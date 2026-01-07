import React from 'react';
import { Link } from 'react-router-dom';

const CartNotification = ({ product, onBuyNow, onContinueShopping, onClose, formatPrice, cartItemsCount }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center md:[zoom:0.8] 2xl:[zoom:1]">
            {/* Fondo con blur */}
            <div
                className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Contenido de la notificación */}
            <div className="relative bg-gradient-to-br from-[#2e1c2b] to-[#110911] border border-white/20 p-8 md:p-10 max-w-md w-[90%] rounded-xl shadow-2xl animate-slideUp z-10">
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors hover:bg-white/5 rounded-full z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Icono de confirmación */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        {/* Anillo animado */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-20"></div>
                    </div>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white text-center mb-3 tracking-tight">
                    ¡Añadido al carrito!
                </h3>
                <p className="text-white/70 text-sm text-center mb-6">
                    Producto añadido correctamente
                </p>

                {/* Información del producto */}
                {product && (
                    <div className="flex items-center gap-4 mb-8 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="relative flex-shrink-0">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-20 h-20 object-cover rounded-lg border border-white/20"
                            />
                            {/* Badge de cantidad */}
                            {product.quantity > 1 && (
                                <div className="absolute -top-2 -right-2 bg-white text-[#2e1c2b] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                                    ×{product.quantity}
                                </div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm mb-1">{product.name}</p>
                            <p className="text-white/80 font-semibold text-lg mb-1">{formatPrice(product.price)}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded">
                                    {product.selectedColor}
                                </span>
                                <span className="text-xs text-white/60">•</span>
                                <span className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded">
                                    Talle: {product.selectedSize}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Botones de acción */}
                <div className="space-y-3 mb-6">
                    <Link
                        to="/checkout"
                        onClick={onBuyNow}
                        className="block w-full py-3.5 bg-gradient-to-r from-white to-gray-200 text-[#2e1c2b] font-bold rounded-lg hover:from-gray-200 hover:to-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-center shadow-lg hover:shadow-xl"
                    >
                        Comprar ahora
                    </Link>

                    <button
                        onClick={onContinueShopping}
                        className="w-full py-3.5 bg-transparent border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                    >
                        Seguir mirando
                    </button>
                </div>

                {/* Link al carrito */}
                <div className="text-center pt-6 border-t border-white/10">
                    <Link
                        to="/cart"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-300 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Ver carrito ({cartItemsCount})
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartNotification;