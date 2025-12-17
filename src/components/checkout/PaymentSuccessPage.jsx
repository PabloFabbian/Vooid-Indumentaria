// src/components/checkout/PaymentSuccessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { formatOrderNumber } from '../../utils/formatters';

const PaymentSuccessPage = () => {
    // Esto sería dinámico, por ahora estático
    const orderNumber = formatOrderNumber(Math.floor(Math.random() * 1000000));

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12">
            <div className="max-w-md w-full text-center">
                {/* Icono de éxito */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">¡Pago exitoso!</h1>
                <p className="text-white/70 mb-2">
                    Tu pedido ha sido procesado correctamente
                </p>
                <p className="text-white/50 text-sm mb-8">
                    Número de orden: <span className="font-mono text-white">{orderNumber}</span>
                </p>

                <div className="space-y-4">
                    <p className="text-white/80 text-sm">
                        Te hemos enviado un email con los detalles de tu compra.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/products"
                            className="px-8 py-3 bg-gradient-to-r from-white to-gray-200 text-[#2e1c2b] font-semibold rounded-lg hover:from-gray-200 hover:to-white transition-all duration-300"
                        >
                            Seguir comprando
                        </Link>
                        <button
                            onClick={() => window.print()}
                            className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                        >
                            Imprimir recibo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;