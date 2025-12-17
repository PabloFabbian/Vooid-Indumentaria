import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatters';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, getCartTotal, getCartItemsCount, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Tu carrito está vacío</h2>
                    <p className="text-white/70 mb-8">Agrega productos para comenzar tu compra</p>
                    <Link
                        to="/products"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-white to-gray-200 text-[#2e1c2b] font-semibold rounded-lg hover:from-gray-200 hover:to-white transition-all duration-300"
                    >
                        Ver productos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tu Carrito</h1>
                    <p className="text-white/70">{getCartItemsCount()} {getCartItemsCount() === 1 ? 'producto' : 'productos'}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Lista de productos */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item, index) => (
                            <CartItem
                                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                                item={item}
                                index={index}
                            />
                        ))}

                        <div className="flex justify-end">
                            <button
                                onClick={clearCart}
                                className="px-6 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 border border-white/20 rounded-lg transition-colors"
                            >
                                Vaciar carrito
                            </button>
                        </div>
                    </div>

                    {/* Resumen del pedido */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-6">
                            <h2 className="text-xl font-bold text-white mb-6">Resumen del pedido</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-white/70">Subtotal</span>
                                    <span className="text-white font-medium">{formatPrice(getCartTotal())}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Envío</span>
                                    <span className="text-white font-medium">
                                        {getCartTotal() > 50000 ? 'Gratis' : formatPrice(1500)}
                                    </span>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex justify-between">
                                        <span className="text-white font-bold">Total</span>
                                        <span className="text-2xl font-bold text-white">
                                            {formatPrice(getCartTotal() + (getCartTotal() > 50000 ? 0 : 1500))}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white/50 mt-2">
                                        {getCartTotal() < 50000 && `+${formatPrice(50000 - getCartTotal())} para envío gratis`}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Link
                                    to="/checkout"
                                    className="block w-full py-3.5 bg-gradient-to-r from-white to-gray-200 text-[#2e1c2b] font-bold rounded-lg text-center hover:from-gray-200 hover:to-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                                >
                                    Proceder al pago
                                </Link>

                                <Link
                                    to="/products"
                                    className="block w-full py-3.5 bg-transparent border-2 border-white/30 text-white font-medium rounded-lg text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                                >
                                    Seguir comprando
                                </Link>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-sm text-white/60 text-center">
                                    ¿Necesitas ayuda?{' '}
                                    <a href="/contact" className="text-white hover:underline">
                                        Contáctanos
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;