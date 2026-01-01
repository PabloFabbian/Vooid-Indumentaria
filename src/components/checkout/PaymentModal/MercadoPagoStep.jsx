import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { formatCurrency } from './PaymentUtils';

const MercadoPagoStep = ({ onClose, onBack, orderData }) => {
    const [loading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState('card');

    const handleBackgroundClick = (e) => {
        if (e.target.id === 'mercadopago-modal-bg') {
            onClose();
        }
    };

    const handlePayment = () => {
        setLoading(true);
        // Simular procesamiento de pago
        setTimeout(() => {
            setLoading(false);
            toast.success('Redirigiendo a Mercado Pago...', {
                duration: 2000,
            });
            // Aquí iría la redirección a Mercado Pago
            setTimeout(() => {
                window.location.href = '/payment/success';
            }, 500);
        }, 1500);
    };

    const paymentOptions = [
        {
            id: 'card',
            title: 'Tarjeta de Crédito/Débito',
            description: 'Visa, Mastercard, Amex',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 10h20" />
                </svg>
            ),
            badge: 'Rápido',
            color: 'from-green-500/20 to-green-500/5',
            borderColor: 'border-green-500/30'
        },
        {
            id: 'installments',
            title: 'Hasta 12 Cuotas',
            description: 'Sin interés con bancos seleccionados',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
                </svg>
            ),
            badge: 'Popular',
            color: 'from-blue-500/20 to-blue-500/5',
            borderColor: 'border-blue-500/30'
        },
        {
            id: 'wallet',
            title: 'Mercado Pago',
            description: 'Pago desde tu cuenta',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            badge: 'Sin comisión',
            color: 'from-purple-500/20 to-purple-500/5',
            borderColor: 'border-purple-500/30'
        }
    ];

    const benefits = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            text: 'Inmediato',
            color: 'text-green-400'
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            text: 'Seguro',
            color: 'text-blue-400'
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            text: 'Protegido',
            color: 'text-purple-400'
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            text: 'App móvil',
            color: 'text-cyan-400'
        }
    ];

    return (
        <motion.div
            id="mercadopago-modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleBackgroundClick}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-gradient-to-b from-[#2d1b2a] to-[#110911] border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-[#2d1b2a] p-6 border-b border-white/10 z-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={onBack}
                                className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <div>
                                <h2 className="text-xl font-bold text-white">Mercado Pago</h2>
                                <p className="text-white/60 text-sm">Pago seguro online</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    {/* Monto destacado */}
                    <div className="mb-6 p-6 bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30">
                        <div className="text-center">
                            <p className="text-green-400 text-sm font-medium mb-2">Total a pagar</p>
                            <p className="text-3xl font-black text-white">{formatCurrency(orderData?.total)}</p>
                            <div className="mt-3 flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-green-300 text-xs font-medium">
                                    Conexión SSL encriptada 256-bit
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Opciones de pago */}
                    <div className="mb-6">
                        <h3 className="text-white font-bold mb-4">Elige cómo pagar</h3>
                        <div className="space-y-3">
                            {paymentOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setSelectedOption(option.id)}
                                    className={`w-full p-4 border text-left transition-all duration-300 ${selectedOption === option.id
                                        ? `${option.borderColor} ${option.color}`
                                        : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-white/60">
                                                {option.icon}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-white font-medium">{option.title}</h4>
                                                    <span className="px-2 py-0.5 bg-white/10 border border-white/20 text-xs font-bold">
                                                        {option.badge}
                                                    </span>
                                                </div>
                                                <p className="text-white/60 text-sm">{option.description}</p>
                                            </div>
                                        </div>
                                        <div className={`w-5 h-5 border-2 flex items-center justify-center ${selectedOption === option.id
                                            ? 'border-green-500 bg-green-500'
                                            : 'border-white/40'
                                            }`}>
                                            {selectedOption === option.id && (
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Beneficios */}
                    <div className="mb-6">
                        <h3 className="text-white font-bold mb-3">Beneficios de pagar con Mercado Pago</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                    <div className={item.color}>
                                        {item.icon}
                                    </div>
                                    <span className={`text-xs font-medium ${item.color}`}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Información importante */}
                    <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="text-blue-300 font-medium mb-1">Serás redirigido a Mercado Pago</p>
                                <p className="text-blue-200/80 text-sm">
                                    Completá tus datos en la plataforma segura de Mercado Pago.
                                    Vooid no almacena información de tu tarjeta.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="space-y-3">
                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#2e1c2b]"></div>
                                    <span>Procesando...</span>
                                </>
                            ) : (
                                'Pagar con Mercado Pago'
                            )}
                        </button>
                        <button
                            onClick={onBack}
                            className="w-full py-3 border border-white/30 text-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver a métodos de pago
                        </button>
                    </div>

                    {/* Logos de seguridad */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex flex-col items-center p-2">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span className="text-[8px] text-white/50 mt-1 font-medium">SSL</span>
                            </div>
                            <div className="flex flex-col items-center p-2">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-[8px] text-white/50 mt-1 font-medium">Secure</span>
                            </div>
                            <div className="flex flex-col items-center p-2">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-[8px] text-white/50 mt-1 font-medium">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MercadoPagoStep;