import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatters';
import { Link } from 'react-router-dom';
import PaymentModal from './PaymentModal/PaymentModal';
import { Lock, Package, RefreshCw } from 'lucide-react';
import {
    generateOrderNumber,
    generateTransactionId,
    sanitizeFormData,
    isValidEmail
} from './PaymentModal/PaymentUtils';

const CheckoutPage = () => {
    const { cartItems, getCartTotal } = useCart();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
    });
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const shippingCost = getCartTotal() > 50000 ? 0 : 1500;
    const total = getCartTotal() + shippingCost;

    const normalizeImagePath = (image) => {
        if (!image) return 'https://via.placeholder.com/150x150/2e1c2b/ffffff?text=Vooid';

        if (image.startsWith('http://') || image.startsWith('https://')) {
            return image;
        }

        if (image.startsWith('./')) {
            return image.replace('./', '/');
        }

        if (image.startsWith('Design')) {
            return `/${image}`;
        }

        return image;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let processedValue = value;

        if (name === 'firstName' || name === 'lastName') {
            processedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        } else if (name === 'phone') {
            processedValue = value.replace(/[^\d]/g, '');
        } else if (name === 'zipCode') {
            processedValue = value.replace(/[^\d]/g, '').slice(0, 8);
        } else if (name === 'email') {
            processedValue = value.toLowerCase();
        }

        setFormData(prev => ({
            ...prev,
            [name]: processedValue
        }));

        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'El nombre es requerido';
        } else if (formData.firstName.trim().length < 2) {
            errors.firstName = 'El nombre debe tener al menos 2 caracteres';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'El apellido es requerido';
        } else if (formData.lastName.trim().length < 2) {
            errors.lastName = 'El apellido debe tener al menos 2 caracteres';
        }

        if (!formData.email.trim()) {
            errors.email = 'El email es requerido';
        } else if (!isValidEmail(formData.email)) {
            errors.email = 'Email inválido';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'El teléfono es requerido';
        } else if (formData.phone.replace(/\D/g, '').length < 8) {
            errors.phone = 'Teléfono inválido (mínimo 8 dígitos)';
        }

        if (!formData.address.trim()) {
            errors.address = 'La dirección es requerida';
        } else if (formData.address.trim().length < 5) {
            errors.address = 'Dirección demasiado corta';
        }

        if (!formData.city.trim()) {
            errors.city = 'La ciudad es requerida';
        }

        if (!formData.zipCode.trim()) {
            errors.zipCode = 'El código postal es requerido';
        } else if (formData.zipCode.replace(/\D/g, '').length < 4) {
            errors.zipCode = 'Código postal inválido (mínimo 4 dígitos)';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const prepareOrderData = () => {
        const sanitizedData = sanitizeFormData(formData);
        const orderNumber = generateOrderNumber();
        const transactionId = generateTransactionId();

        return {
            orderNumber,
            transactionId,
            customer: sanitizedData,
            items: cartItems.map(item => ({
                id: item.id,
                name: item.name,
                image: normalizeImagePath(item.image),
                selectedColor: item.selectedColor || 'Negro',
                selectedSize: item.selectedSize || 'M',
                quantity: item.quantity,
                price: item.price,
                subtotal: item.price * item.quantity
            })),
            itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
            subtotal: getCartTotal(),
            shipping: shippingCost,
            total: total,
            date: new Date().toISOString(),
            status: 'pending'
        };
    };

    const saveOrderData = (orderData) => {
        localStorage.setItem('vooid_last_order', JSON.stringify(orderData));
        localStorage.setItem('vooid_order_number', orderData.orderNumber);
        localStorage.setItem('vooid_transaction_id', orderData.transactionId);
        localStorage.setItem('checkout_form_data', JSON.stringify(orderData.customer));
        sessionStorage.setItem('current_order_data', JSON.stringify(orderData));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                const orderData = prepareOrderData();
                saveOrderData(orderData);

                await new Promise(resolve => setTimeout(resolve, 300));
                setIsPaymentModalOpen(true);

            } catch (error) {
                console.error('❌ Error al procesar el pedido:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const clearCheckoutData = () => {
        localStorage.removeItem('vooid_previous_order');
        localStorage.removeItem('vooid_pending_payment');
    };

    useEffect(() => {
        clearCheckoutData();
    }, []);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-[#2e1c2b] to-[#110911] flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="mb-4 inline-block">
                        <div className="w-20 h-20 mx-auto border-2 border-white/20 flex items-center justify-center">
                            <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
                        Carrito Vacío
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">
                        No hay productos en tu carrito de compras
                    </p>
                    <Link
                        to="/products"
                        className="inline-block px-6 py-3 bg-white text-[#2e1c2b] font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Explorar Productos
                    </Link>
                </div>
            </div>
        );
    }

    const orderData = {
        customer: formData,
        items: cartItems,
        itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
        subtotal: getCartTotal(),
        shipping: shippingCost,
        total: total
    };

    return (
        <>
            <div className="bg-gradient-to-b from-[#2e1c2b] to-[#110911] py-8">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="inline-block mb-2">
                                    <div className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/20">
                                        <span className="text-[10px] font-semibold tracking-widest text-gray-300 uppercase">
                                            Checkout
                                        </span>
                                    </div>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                                    Finalizar Compra
                                </h1>
                            </div>

                            <div className="hidden md:flex items-center gap-4">
                                {[
                                    { number: 1, label: 'Datos', active: true },
                                    { number: 2, label: 'Revisión', active: false },
                                    { number: 3, label: 'Pago', active: false }
                                ].map((step, index) => (
                                    <React.Fragment key={step.number}>
                                        <div className="flex flex-col items-center">
                                            <div className={`w-10 h-10 border-2 flex items-center justify-center mb-1.5 transition-all duration-300 ${step.active
                                                ? 'border-white bg-white text-[#2e1c2b]'
                                                : 'border-white/30 text-white/30'
                                                }`}>
                                                <span className="font-bold">{step.number}</span>
                                            </div>
                                            <span className={`text-[10px] font-medium uppercase tracking-wider ${step.active ? 'text-white' : 'text-white/30'
                                                }`}>
                                                {step.label}
                                            </span>
                                        </div>
                                        {index < 2 && (
                                            <div className="w-12 h-0.5 bg-white/20 mb-6"></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="w-20 h-0.5 bg-white/40"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-7">
                            <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                                <div className="mb-6">
                                    <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-1.5">
                                        Información de envío
                                    </h2>
                                    <div className="w-14 h-0.5 bg-white/40"></div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="group">
                                            <label className="block text-[10px] text-gray-400 font-medium mb-2.5 uppercase tracking-wider">
                                                Nombre *
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className={`w-full px-3.5 py-2.5 text-sm bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 ${formErrors.firstName ? 'border-red-500/50' : 'border-white/20'
                                                    }`}
                                                placeholder="Juan"
                                                maxLength="50"
                                            />
                                            {formErrors.firstName && (
                                                <p className="text-red-400 text-xs mt-1">{formErrors.firstName}</p>
                                            )}
                                        </div>
                                        <div className="group">
                                            <label className="block text-[10px] text-gray-400 font-medium mb-2.5 uppercase tracking-wider">
                                                Apellido *
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className={`w-full px-3.5 py-2.5 text-sm bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 ${formErrors.lastName ? 'border-red-500/50' : 'border-white/20'
                                                    }`}
                                                placeholder="Pérez"
                                                maxLength="50"
                                            />
                                            {formErrors.lastName && (
                                                <p className="text-red-400 text-xs mt-1">{formErrors.lastName}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] text-gray-400 font-medium mb-2.5 uppercase tracking-wider">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-3.5 py-2.5 text-sm bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 ${formErrors.email ? 'border-red-500/50' : 'border-white/20'
                                                }`}
                                            placeholder="tu@email.com"
                                        />
                                        {formErrors.email && (
                                            <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                                        )}
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] text-gray-400 font-medium mb-2.5 uppercase tracking-wider">
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-3.5 py-2.5 text-sm bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 ${formErrors.phone ? 'border-red-500/50' : 'border-white/20'
                                                }`}
                                            placeholder="1134567890"
                                            maxLength="15"
                                        />
                                        {formErrors.phone && (
                                            <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
                                        )}
                                        <p className="text-white/40 text-[10px] mt-1.5 uppercase tracking-wide">
                                            Solo números, sin espacios ni guiones
                                        </p>
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] text-gray-400 font-medium mb-2.5 uppercase tracking-wider">
                                            Dirección *
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className={`w-full px-3.5 py-2.5 text-sm bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 ${formErrors.address ? 'border-red-500/50' : 'border-white/20'
                                                }`}
                                            placeholder="Av. Corrientes 1234"
                                        />
                                        {formErrors.address && (
                                            <p className="text-red-400 text-xs mt-1">{formErrors.address}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="group">
                                            <label className="block text-[10px] text-gray-400 font-medium mb-2.5 uppercase tracking-wider">
                                                Ciudad *
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className={`w-full px-3.5 py-2.5 text-sm bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 ${formErrors.city ? 'border-red-500/50' : 'border-white/20'
                                                    }`}
                                                placeholder="Buenos Aires"
                                            />
                                            {formErrors.city && (
                                                <p className="text-red-400 text-xs mt-1">{formErrors.city}</p>
                                            )}
                                        </div>
                                        <div className="group">
                                            <label className="block text-[10px] text-gray-400 font-medium mb-2.5 uppercase tracking-wider">
                                                Código Postal *
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className={`w-full px-3.5 py-2.5 text-sm bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 ${formErrors.zipCode ? 'border-red-500/50' : 'border-white/20'
                                                    }`}
                                                placeholder="1414"
                                                maxLength="8"
                                            />
                                            {formErrors.zipCode && (
                                                <p className="text-red-400 text-xs mt-1">{formErrors.zipCode}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-5 p-3.5 bg-white/5 border border-white/10">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <p className="text-xs text-white/80 leading-relaxed">
                                                    Recibirás un email de confirmación con los detalles de tu pedido y opciones de pago.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                                <div className="mb-6">
                                    <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-1.5">
                                        Tu Pedido
                                    </h2>
                                    <div className="w-14 h-0.5 bg-white/40"></div>
                                </div>

                                <div className="space-y-4 mb-6 max-h-[240px] overflow-y-auto pr-2">
                                    {cartItems.map((item) => (
                                        <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="group">
                                            <div className="flex gap-3.5">
                                                <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 overflow-hidden">
                                                    <img
                                                        src={normalizeImagePath(item.image)}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://via.placeholder.com/150x150/2e1c2b/ffffff?text=Vooid';
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-white font-medium text-sm mb-1 truncate">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-white/50 text-xs mb-1.5">
                                                        {item.selectedColor} • {item.selectedSize} • ×{item.quantity}
                                                    </p>
                                                    <p className="text-white font-bold text-sm">
                                                        {formatPrice(item.price * item.quantity)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-px bg-white/10 mb-5"></div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60 text-xs uppercase tracking-wider">Subtotal</span>
                                        <span className="text-white font-medium text-sm">{formatPrice(getCartTotal())}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60 text-xs uppercase tracking-wider">Envío</span>
                                        <span className="text-white font-medium text-sm">
                                            {shippingCost === 0 ? (
                                                <span className="text-green-400 font-bold text-xs">GRATIS</span>
                                            ) : (
                                                formatPrice(shippingCost)
                                            )}
                                        </span>
                                    </div>

                                    {getCartTotal() < 50000 && (
                                        <div className="p-2.5 bg-white/5 border border-white/10">
                                            <p className="text-[10px] text-white/70">
                                                💡 Te faltan {formatPrice(50000 - getCartTotal())} para envío gratis
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="h-0.5 bg-white/20 mb-5"></div>

                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-white font-bold text-lg uppercase tracking-wider">Total</span>
                                    <span className="text-2xl font-black text-white">{formatPrice(total)}</span>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className={`w-full py-3.5 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 group ${isSubmitting
                                            ? 'bg-white/50 text-[#2e1c2b]/70 cursor-not-allowed'
                                            : 'bg-white text-[#2e1c2b] hover:bg-gray-100 hover:scale-[1.02]'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-[#2e1c2b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Procesando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Continuar al pago</span>
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    <Link
                                        to="/cart"
                                        className="block w-full py-3.5 bg-transparent border border-white/30 text-white font-medium text-sm uppercase tracking-wider text-center hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                                    >
                                        Volver al carrito
                                    </Link>
                                </div>

                                <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                                    {[
                                        { icon: 'Lock', text: 'Pago 100% seguro' },
                                        { icon: 'Package', text: 'Envíos a todo el país' },
                                        { icon: 'RefreshCw', text: 'Cambios sin cargo' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2.5">
                                            {item.icon === 'Lock' && <Lock className="w-3 h-3 text-white/60" />}
                                            {item.icon === 'Package' && <Package className="w-3 h-3 text-white/60" />}
                                            {item.icon === 'RefreshCw' && <RefreshCw className="w-3 h-3 text-white/60" />}
                                            <span className="text-[10px] text-white/60 uppercase tracking-wide">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-wider">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Tu pedido será procesado inmediatamente</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                orderData={orderData}
            />

            <style>{`
                .overflow-y-auto::-webkit-scrollbar {
                    width: 4px;
                }
                .overflow-y-auto::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                }
                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </>
    );
};

export default CheckoutPage;