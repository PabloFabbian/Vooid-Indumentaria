import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatters';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
    });

    const shippingCost = getCartTotal() > 50000 ? 0 : 1500;
    const total = getCartTotal() + shippingCost;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de procesamiento de pago
        console.log('Procesando pago con:', formData);

        // Simular éxito de pago
        setTimeout(() => {
            clearCart();
            window.location.href = '/payment/success';
        }, 1000);
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Carrito vacío</h2>
                    <Link
                        to="/products"
                        className="inline-block px-6 py-3 bg-white text-[#2e1c2b] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Volver a productos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                    Finalizar Compra
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Formulario */}
                    <div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
                            <h2 className="text-xl font-bold text-white mb-6">Datos de envío</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Nombre completo *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-white/70 mb-2">Teléfono *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-white/70 mb-2">Dirección *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Ciudad *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Código Postal *</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                            required
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Resumen */}
                    <div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-6">
                            <h2 className="text-xl font-bold text-white mb-6">Resumen del pedido</h2>

                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex justify-between items-center">
                                        <div>
                                            <p className="text-white text-sm">{item.name} × {item.quantity}</p>
                                            <p className="text-white/60 text-xs">{item.selectedColor} - Talle {item.selectedSize}</p>
                                        </div>
                                        <p className="text-white font-medium">{formatPrice(item.price * item.quantity)}</p>
                                    </div>
                                ))}

                                <div className="pt-4 border-t border-white/10 space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-white/70">Subtotal</span>
                                        <span className="text-white">{formatPrice(getCartTotal())}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/70">Envío</span>
                                        <span className="text-white">
                                            {shippingCost === 0 ? 'Gratis' : formatPrice(shippingCost)}
                                        </span>
                                    </div>
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="flex justify-between">
                                            <span className="text-white font-bold text-lg">Total</span>
                                            <span className="text-2xl font-bold text-white">{formatPrice(total)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full py-3.5 bg-gradient-to-r from-white to-gray-200 text-[#2e1c2b] font-bold rounded-lg hover:from-gray-200 hover:to-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                            >
                                Confirmar y pagar
                            </button>

                            <Link
                                to="/cart"
                                className="block w-full py-3.5 mt-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-lg text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                Volver al carrito
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;