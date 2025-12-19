import React, { useState } from 'react';
import MercadoPagoCheckout from './MercadoPagoStep';
import TransferCheckout from './TransferStep';
import CashCheckout from './CashStep';

const PaymentModal = ({ isOpen, onClose, orderData }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    if (!isOpen) return null;

    const handleBackgroundClick = (e) => {
        if (e.target.id === 'payment-modal-background') {
            onClose();
        }
    };

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };

    const handleBack = () => {
        setSelectedMethod(null);
    };

    // Si se seleccionó un método, mostrar su componente
    if (selectedMethod === 'mercadopago') {
        return <MercadoPagoCheckout isOpen={isOpen} onClose={onClose} onBack={handleBack} orderData={orderData} />;
    }
    if (selectedMethod === 'transfer') {
        return <TransferCheckout isOpen={isOpen} onClose={onClose} onBack={handleBack} orderData={orderData} />;
    }
    if (selectedMethod === 'cash') {
        return <CashCheckout isOpen={isOpen} onClose={onClose} onBack={handleBack} orderData={orderData} />;
    }

    const paymentMethods = [
        {
            id: 'mercadopago',
            name: 'Mercado Pago',
            description: 'Tarjetas, débito o crédito',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 9h20" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="5" y="12" width="6" height="3" rx="0.5" fill="currentColor" />
                </svg>
            ),
            badge: 'Más usado',
            badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30'
        },
        {
            id: 'transfer',
            name: 'Transferencia',
            description: 'Bancaria o virtual',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9h18M3 15h18M8 9V6a2 2 0 012-2h4a2 2 0 012 2v3M8 15v3a2 2 0 002 2h4a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            badge: 'Sin comisión',
            badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
        },
        {
            id: 'cash',
            name: 'Efectivo',
            description: 'Rapipago / Pago Fácil',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M18 12h2M4 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            badge: 'Disponible 24/7',
            badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
        }
    ];

    return (
        <div
            id="payment-modal-background"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn p-4"
            onClick={handleBackgroundClick}
        >
            <div
                className="relative bg-gradient-to-b from-[#2d1b2a] to-[#110911] max-w-3xl w-full border border-white/10 animate-scaleIn overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Gradiente decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent pointer-events-none"></div>

                {/* Botón cerrar */}
                <button
                    className="absolute top-6 right-6 z-10 w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                    onClick={onClose}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative p-8 md:p-10">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-block mb-3">
                            <div className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/20">
                                <span className="text-[10px] font-semibold tracking-widest text-gray-300 uppercase">
                                    Paso 3 de 3
                                </span>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-3">
                            Método de Pago
                        </h2>
                        <div className="w-20 h-0.5 bg-white/40 mb-4"></div>
                        <p className="text-sm text-gray-400">
                            Elegí cómo querés pagar tu pedido
                        </p>
                    </div>

                    {/* Payment Methods Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {paymentMethods.map((method) => (
                            <button
                                key={method.id}
                                onClick={() => handleMethodSelect(method.id)}
                                className="group relative bg-white/5 border border-white/20 p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                            >
                                {/* Badge superior */}
                                {method.badge && (
                                    <div className={`absolute top-3 right-3 px-2 py-0.5 border text-[9px] font-bold uppercase tracking-wider ${method.badgeColor}`}>
                                        {method.badge}
                                    </div>
                                )}

                                {/* Efecto hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative">
                                    {/* Icono */}
                                    <div className="text-white/60 group-hover:text-white transition-colors duration-300 mb-4">
                                        {method.icon}
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-white font-bold text-lg uppercase tracking-tight mb-2 group-hover:text-white transition-colors">
                                        {method.name}
                                    </h3>

                                    {/* Descripción */}
                                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors mb-4">
                                        {method.description}
                                    </p>

                                    {/* Arrow icon */}
                                    <div className="flex items-center justify-end">
                                        <svg
                                            className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Info de seguridad */}
                    <div className="p-4 bg-white/5 border border-white/10">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                                <p className="text-sm text-white/90 font-medium mb-1">
                                    Pago 100% seguro y protegido
                                </p>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    Todas las transacciones están encriptadas y protegidas por nuestros sistemas de seguridad.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            {[
                                { icon: '🔒', text: 'SSL Seguro' },
                                { icon: '✓', text: 'Verificado' },
                                { icon: '🛡️', text: 'Protegido' },
                                { icon: '⚡', text: 'Inmediato' }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-1">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-[10px] text-white/60 uppercase tracking-wide font-medium">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default PaymentModal;