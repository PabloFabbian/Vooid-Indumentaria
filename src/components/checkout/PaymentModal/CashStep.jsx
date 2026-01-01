import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formatCurrency, generateCoupon, getExpirationDate } from './PaymentUtils';

const CashStep = ({ onClose, onBack, orderData }) => {
    const [couponGenerated, setCouponGenerated] = useState(false);
    const [coupon] = useState(generateCoupon());
    const expiration = getExpirationDate(3);

    const handleGenerate = () => {
        setCouponGenerated(true);
    };

    const handlePrint = () => {
        window.print();
    };

    const handleConfirm = () => {
        window.location.href = '/payment/success';
    };

    const steps = [
        {
            text: 'Generá tu cupón de pago único',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            text: 'Acercate a cualquier Rapipago o Pago Fácil',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            text: 'Presentá el cupón y aboná el monto indicado',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            text: 'Tu pedido se procesará automáticamente',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative bg-gradient-to-b from-[#2d1b2a] to-[#110911] border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
                                <h2 className="text-xl font-bold text-white">Pago en Efectivo</h2>
                                <p className="text-white/60 text-sm">Rapipago / Pago Fácil</p>
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
                    {!couponGenerated ? (
                        <>
                            {/* Monto */}
                            <div className="mb-6 p-6 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30">
                                <div className="text-center">
                                    <p className="text-purple-400 text-sm font-medium mb-2">Monto a pagar</p>
                                    <p className="text-3xl font-black text-white">{formatCurrency(orderData?.total)}</p>
                                </div>
                            </div>

                            {/* Instrucciones */}
                            <div className="mb-6">
                                <h3 className="text-white font-bold mb-4">¿Cómo funciona?</h3>
                                <div className="space-y-3">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-purple-300 font-bold text-lg">{index + 1}</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white text-sm leading-relaxed">{step.text}</p>
                                            </div>
                                            <div className="text-purple-400 flex-shrink-0">
                                                {step.icon}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Info adicional */}
                            <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-blue-300 font-medium mb-1">Disponible 24/7</p>
                                        <p className="text-blue-200/80 text-sm">
                                            Los puntos de pago están abiertos las 24 horas. Tu pedido se confirmará automáticamente al recibir el pago.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Botón generar */}
                            <button
                                onClick={handleGenerate}
                                className="w-full py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Generar Cupón de Pago
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Cupón generado */}
                            <div className="print-section">
                                <div className="border-2 border-dashed border-white/30 rounded-lg p-6 bg-white/5 mb-6">
                                    <div className="text-center mb-4">
                                        <div className="flex items-center justify-center gap-2 mb-3">
                                            <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <p className="text-purple-300 text-sm font-bold uppercase tracking-wider">Cupón de Pago</p>
                                        </div>

                                        {/* Código de barras simulado */}
                                        <div className="flex justify-center gap-1 mb-4 py-3 bg-white/10 rounded">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="bg-white" style={{ width: '3px', height: '40px' }}></div>
                                            ))}
                                        </div>

                                        <p className="text-2xl font-mono font-bold text-white mb-2">{coupon}</p>
                                        <p className="text-white/50 text-xs">Presentá este cupón en cualquier punto de pago</p>
                                    </div>

                                    <div className="border-t border-white/20 pt-4 space-y-3">
                                        <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                                            <span className="text-white/60 text-sm">Monto:</span>
                                            <span className="text-white font-bold text-lg">{formatCurrency(orderData?.total)}</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                                            <span className="text-white/60 text-sm">Vence:</span>
                                            <span className="text-white font-medium">{expiration.formatted}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Advertencia de vencimiento */}
                                <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg no-print">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <div>
                                            <p className="text-amber-300 font-medium mb-1">Importante</p>
                                            <p className="text-amber-200/80 text-sm">
                                                Este cupón vence el {expiration.formatted}. Después de esa fecha no podrás realizar el pago.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botones */}
                            <div className="space-y-3 no-print">
                                <button
                                    onClick={handlePrint}
                                    className="w-full py-3 border border-white/30 text-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                    Imprimir Cupón
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    className="w-full py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Confirmar Pedido
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </motion.div>

            <style>{`
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    .print-section {
                        page-break-inside: avoid;
                    }
                }
            `}</style>
        </div>
    );
};

export default CashStep;