import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { formatCurrency, copyToClipboard, bankAccounts, generateOrderNumber, showSuccess } from './PaymentUtils';

const TransferStep = ({ onClose, onBack, orderData }) => {
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [orderNumber] = useState(generateOrderNumber());

    const handleBackgroundClick = (e) => {
        if (e.target.id === 'transfer-modal-bg') {
            onClose();
        }
    };

    const handleConfirmOrder = () => {
        showSuccess('¡Pedido registrado como pendiente de pago!');
        setOrderConfirmed(true);
    };

    const instructions = [
        {
            text: 'Realizá la transferencia por el monto exacto',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            text: 'Usá el CBU o Alias de cualquiera de nuestras cuentas',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            )
        },
        {
            text: 'Guardá el número de operación/comprobante',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            text: 'Hacé click en "Confirmar pedido" una vez transferido',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <motion.div
                id="transfer-modal-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={handleBackgroundClick}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
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
                                    <h2 className="text-xl font-bold text-white">Transferencia Bancaria</h2>
                                    <p className="text-white/60 text-sm">Pago por transferencia</p>
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
                        {!orderConfirmed ? (
                            <>
                                {/* Monto destacado */}
                                <div className="mb-6 p-6 bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-lg">
                                    <div className="text-center">
                                        <p className="text-blue-400 text-sm font-medium mb-2">Monto a transferir</p>
                                        <p className="text-3xl font-black text-white">{formatCurrency(orderData?.total)}</p>
                                        <div className="mt-3 flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <p className="text-blue-300 text-xs font-medium">
                                                Transferí el monto exacto
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cuentas bancarias */}
                                <div className="mb-6">
                                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                        </svg>
                                        Datos bancarios
                                    </h3>

                                    <div className="space-y-4">
                                        {bankAccounts.map((account) => (
                                            <div key={account.id} className="border border-white/20 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div>
                                                        <h4 className="text-white font-bold">{account.bank}</h4>
                                                        <span className="text-blue-300 text-xs">{account.type}</span>
                                                    </div>
                                                    {account.recommended && (
                                                        <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold rounded">
                                                            RECOMENDADO
                                                        </span>
                                                    )}
                                                </div>

                                                {/* CBU */}
                                                <div className="mb-3">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <label className="text-white/60 text-xs">CBU / CVU</label>
                                                        <button
                                                            onClick={() => copyToClipboard(account.cbu, 'CBU')}
                                                            className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 transition-colors"
                                                        >
                                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                            </svg>
                                                            Copiar
                                                        </button>
                                                    </div>
                                                    <div className="p-3 bg-black/50 border border-white/10 rounded">
                                                        <p className="text-white font-mono text-sm select-all">{account.cbu}</p>
                                                    </div>
                                                </div>

                                                {/* Alias */}
                                                <div className="mb-3">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <label className="text-white/60 text-xs">Alias</label>
                                                        <button
                                                            onClick={() => copyToClipboard(account.alias, 'Alias')}
                                                            className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 transition-colors"
                                                        >
                                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                            </svg>
                                                            Copiar
                                                        </button>
                                                    </div>
                                                    <div className="p-3 bg-black/50 border border-white/10 rounded">
                                                        <p className="text-white font-mono text-sm select-all">{account.alias}</p>
                                                    </div>
                                                </div>

                                                {/* Titular y CUIT */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="text-white/60 text-xs block mb-1">Titular</label>
                                                        <div className="p-2 bg-black/50 border border-white/10 rounded">
                                                            <p className="text-white text-sm">{account.holder}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="text-white/60 text-xs block mb-1">CUIT</label>
                                                        <div className="p-2 bg-black/50 border border-white/10 rounded">
                                                            <p className="text-white text-sm font-mono">{account.cuit}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Instrucciones */}
                                <div className="mb-6">
                                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        Instrucciones
                                    </h3>
                                    <div className="space-y-3">
                                        {instructions.map((step, index) => (
                                            <div key={index} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                                <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-blue-300 font-bold">{index + 1}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-white/80 text-sm leading-relaxed">{step.text}</p>
                                                </div>
                                                <div className="text-blue-400 flex-shrink-0">
                                                    {step.icon}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Advertencia */}
                                <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <div>
                                            <p className="text-yellow-300 font-medium mb-1">Importante</p>
                                            <p className="text-yellow-100/80 text-sm">
                                                Tu pedido se procesará dentro de las 24-48hs posteriores a la acreditación del pago.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Botones */}
                                <div className="space-y-3">
                                    <button
                                        onClick={handleConfirmOrder}
                                        className="w-full py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Ya transferí, confirmar pedido
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
                            </>
                        ) : (
                            <>
                                {/* Confirmación exitosa */}
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 mx-auto bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">¡Pedido Registrado!</h3>
                                    <p className="text-white/60 mb-6">Número: {orderNumber}</p>

                                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg mb-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-white/60">Estado:</span>
                                                <span className="text-yellow-400 font-bold">Pendiente de pago</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white/60">Monto:</span>
                                                <span className="text-white font-bold">{formatCurrency(orderData?.total)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white/60">Fecha:</span>
                                                <span className="text-white">{new Date().toLocaleDateString('es-AR')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Próximos pasos */}
                                    <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                        <div className="flex items-start gap-3 mb-3">
                                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-blue-300 font-medium">Próximos pasos:</p>
                                        </div>
                                        <ul className="text-blue-200/80 text-sm space-y-2 text-left pl-8">
                                            <li className="flex items-start gap-2">
                                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                                Recibirás un email de confirmación
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                                Procesaremos tu pedido en 24-48hs
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                                Contactanos si tenés dudas sobre la transferencia
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Botones finales */}
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => window.location.href = '/orders'}
                                            className="w-full py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300"
                                        >
                                            Ver mis pedidos
                                        </button>
                                        <button
                                            onClick={onClose}
                                            className="w-full py-3 border border-white/30 text-white hover:bg-white/5 transition-all duration-300"
                                        >
                                            Volver al inicio
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            </motion.div>

            <Toaster position="top-center" />
        </>
    );
};

export default TransferStep;