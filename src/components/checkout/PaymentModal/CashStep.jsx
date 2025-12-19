// src/components/checkout/PaymentModal/CashStep.jsx
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

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative bg-gradient-to-b from-[#2d1b2a] to-[#110911] border border-white/10 max-w-2xl w-full"
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button onClick={onBack} className="text-white/60 hover:text-white">←</button>
                        <div>
                            <h2 className="text-xl font-bold text-white">Pago en Efectivo</h2>
                            <p className="text-white/60 text-sm">Rapipago / Pago Fácil</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
                </div>

                <div className="p-6">
                    {!couponGenerated ? (
                        <>
                            {/* Monto */}
                            <div className="mb-6 p-6 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30">
                                <div className="text-center">
                                    <p className="text-purple-400 text-sm mb-2">Monto a pagar</p>
                                    <p className="text-3xl font-black text-white">{formatCurrency(orderData?.total)}</p>
                                </div>
                            </div>

                            {/* Instrucciones */}
                            <div className="mb-6">
                                <h3 className="text-white font-bold mb-3">¿Cómo funciona?</h3>
                                <div className="space-y-3">
                                    {[
                                        'Generá tu cupón de pago único',
                                        'Acercate a cualquier Rapipago o Pago Fácil',
                                        'Presentá el cupón y aboná el monto indicado',
                                        'Tu pedido se procesará automáticamente'
                                    ].map((step, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10">
                                            <div className="w-8 h-8 bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                                                <span className="text-purple-300 font-bold">{index + 1}</span>
                                            </div>
                                            <p className="text-white text-sm">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Botón generar */}
                            <button
                                onClick={handleGenerate}
                                className="w-full py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300"
                            >
                                Generar Cupón de Pago
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Cupón generado */}
                            <div className="print-section">
                                <div className="border-2 border-dashed border-white/30 p-6 bg-white/5 mb-6">
                                    <div className="text-center mb-4">
                                        <p className="text-purple-300 text-sm font-bold mb-2">CUPÓN DE PAGO</p>
                                        {/* Código de barras simulado */}
                                        <div className="flex justify-center gap-1 mb-4">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="bg-white" style={{ width: '3px', height: '40px' }}></div>
                                            ))}
                                        </div>
                                        <p className="text-2xl font-mono font-bold text-white mb-2">{coupon}</p>
                                        <p className="text-white/50 text-xs">Presentá este cupón en cualquier punto de pago</p>
                                    </div>

                                    <div className="border-t border-white/20 pt-4 space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-white/60">Monto:</span>
                                            <span className="text-white font-bold">{formatCurrency(orderData?.total)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-white/60">Vence:</span>
                                            <span className="text-white">{expiration.formatted}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botones */}
                            <div className="space-y-3 no-print">
                                <button
                                    onClick={handlePrint}
                                    className="w-full py-3 border border-white/30 text-white hover:bg-white/5 transition-all duration-300"
                                >
                                    🖨️ Imprimir Cupón
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    className="w-full py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300"
                                >
                                    ✅ Confirmar Pedido
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default CashStep;