// src/components/cart/CartDrawer.jsx
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatters';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const {
        cartItems,
        getCartTotal,
        getCartItemsCount,
        clearCart,
        isCartOpen,
        closeCart
    } = useCart();

    if (!isCartOpen) return null;

    const shippingCost = getCartTotal() > 50000 ? 0 : 1500;
    const total = getCartTotal() + shippingCost;

    return (
        <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
                onClick={closeCart}
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-[#2e1c2b] to-[#110911] shadow-2xl border-l border-white/10 animate-slide-in-right">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Tu Carrito</h2>
                            <button
                                onClick={closeCart}
                                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-white/60 text-sm mt-1">
                            {getCartItemsCount()} {getCartItemsCount() === 1 ? 'producto' : 'productos'}
                        </p>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-white/70">Tu carrito está vacío</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                                        item={item}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer - Solo mostrar si hay items */}
                    {cartItems.length > 0 && (
                        <div className="p-6 border-t border-white/10 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-white/70">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(getCartTotal())}</span>
                                </div>
                                <div className="flex justify-between text-white/70">
                                    <span>Envío</span>
                                    <span>{shippingCost === 0 ? 'Gratis' : formatPrice(shippingCost)}</span>
                                </div>
                                <div className="flex justify-between text-white font-bold pt-2 border-t border-white/10">
                                    <span>Total</span>
                                    <span>{formatPrice(total)}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Link
                                    to="/checkout"
                                    onClick={closeCart}
                                    className="block w-full py-3.5 bg-gradient-to-r from-white to-gray-200 text-[#2e1c2b] font-bold rounded-lg text-center hover:from-gray-200 hover:to-white transition-all duration-300"
                                >
                                    Proceder al pago
                                </Link>

                                <div className="flex gap-3">
                                    <Link
                                        to="/cart"
                                        onClick={closeCart}
                                        className="flex-1 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg text-center hover:bg-white/5 transition-colors"
                                    >
                                        Ver carrito completo
                                    </Link>

                                    <button
                                        onClick={clearCart}
                                        className="flex-1 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        Vaciar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;