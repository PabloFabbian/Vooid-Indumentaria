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
            {/* Overlay con profundidad */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#110911]/80 to-[#2e1c2b]/70 backdrop-blur-sm animate-fadeIn"
                onClick={closeCart}
            />

            {/* Drawer - Elegante con toques VooidShop */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-[#0a0908] via-[#1a0f1a] to-[#2e1c2b]/90 shadow-2xl border-l border-white/10 animate-slide-in-right">
                <div className="flex flex-col h-full">
                    {/* Header - Con toques morados sutiles */}
                    <div className="p-6 border-b border-white/10 bg-gradient-to-r from-black/95 via-[#110911]/95 to-[#1a0f1a]/95">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/5 to-purple-500/5 border border-white/10 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">Tu Carrito</h2>
                                    <p className="text-white/60 text-sm mt-0.5">
                                        {getCartItemsCount()} {getCartItemsCount() === 1 ? 'producto' : 'productos'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={closeCart}
                                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Items - CON SCROLL para pantallas ajustadas */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center py-8 md:py-12">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/5 to-purple-500/10 border border-white/10 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-3">Carrito vacío</h3>
                                    <p className="text-white/50 text-sm max-w-xs mx-auto mb-6">
                                        Agregá productos para comenzar tu compra
                                    </p>
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
                    </div>

                    {/* Footer - Siempre visible, colores sutiles VooidShop */}
                    <div className="border-t border-white/10 bg-gradient-to-t from-black via-[#110911] to-[#1a0f1a]/95">
                        <div className="p-6 space-y-4">
                            {/* Mostrar resumen solo si hay items */}
                            {cartItems.length > 0 ? (
                                <>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/70 text-sm">Subtotal</span>
                                            <span className="text-white font-medium">{formatPrice(getCartTotal())}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/70 text-sm">Envío</span>
                                            <span className={`font-medium ${shippingCost === 0 ? 'text-white' : 'text-white'}`}>
                                                {shippingCost === 0 ? 'Gratis' : formatPrice(shippingCost)}
                                            </span>
                                        </div>
                                        <div className="pt-3 border-t border-white/10">
                                            <div className="flex justify-between items-center">
                                                <span className="text-white font-bold">Total</span>
                                                <span className="text-xl font-bold text-white">{formatPrice(total)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Botón principal - Con toque VooidShop */}
                                    <Link
                                        to="/checkout"
                                        onClick={closeCart}
                                        className="block w-full py-3.5 bg-white text-black font-bold rounded-lg text-center hover:bg-gray-100 transition-all duration-300 active:scale-98 hover:shadow-lg hover:shadow-purple-500/10"
                                    >
                                        Proceder al pago
                                    </Link>
                                </>
                            ) : (
                                // Espacio ocupable cuando el carrito está vacío
                                <div className="h-4"></div>
                            )}

                            {/* Botones de acción - Siempre visibles */}
                            <div className="space-y-3">
                                {/* Ver mis pedidos */}
                                <Link
                                    to="/orders"
                                    onClick={closeCart}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    <span>Ver mis pedidos</span>
                                </Link>

                                {/* Botones inferiores condicionales */}
                                {cartItems.length > 0 ? (
                                    <div className="flex gap-3">
                                        <Link
                                            to="/cart"
                                            onClick={closeCart}
                                            className="flex-1 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg text-center hover:bg-white/5 transition-colors"
                                        >
                                            Ver carrito completo
                                        </Link>
                                        <button
                                            onClick={clearCart}
                                            className="flex-1 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors hover:border-red-500/30"
                                        >
                                            Vaciar carrito
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        to="/products"
                                        onClick={closeCart}
                                        className="block w-full py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-medium rounded-lg text-center hover:bg-gradient-to-r hover:from-white/20 hover:to-purple-500/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Explorar productos
                                    </Link>
                                )}
                            </div>

                            {/* Footer informativo - Mínimo y elegante */}
                            <div className="pt-3 border-t border-white/5">
                                <p className="text-xs text-white/30 text-center">
                                    Pagos seguros • Envíos nacionales • Cambios sin cargo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;