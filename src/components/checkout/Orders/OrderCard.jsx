import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formatPrice } from '../../../utils/formatters';
import OrderDetails from './OrderDetails';

const OrderCard = ({ order }) => {
    const [showDetails, setShowDetails] = useState(false);

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'pending':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'cancelled':
                return 'bg-red-500/20 text-red-400 border-red-500/30';
            default:
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed':
                return 'Completado';
            case 'pending':
                return 'Pendiente de pago';
            case 'cancelled':
                return 'Cancelado';
            default:
                return status;
        }
    };

    const getPaymentMethodText = (method) => {
        switch (method) {
            case 'transfer':
                return 'Transferencia bancaria';
            case 'cash':
                return 'Efectivo';
            case 'mercadopago':
                return 'Mercado Pago';
            default:
                return method;
        }
    };

    return (
        <>
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                {/* Header del pedido */}
                <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-bold">Pedido #{order.id}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                                    {getStatusText(order.status)}
                                </span>
                            </div>
                            <div className="text-white/60 text-sm space-y-1">
                                <p className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {new Date(order.date).toLocaleDateString('es-AR', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                                <p className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    {getPaymentMethodText(order.paymentMethod)}
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-2xl font-bold">{formatPrice(order.total)}</div>
                            <p className="text-white/60 text-sm mt-1">
                                {order.items.length} {order.items.length === 1 ? 'producto' : 'productos'}
                            </p>
                        </div>
                    </div>

                    {/* Items preview */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium">Productos:</h4>
                            <span className="text-white/60 text-sm">
                                {order.items.slice(0, 3).map(item => item.name).join(', ')}
                                {order.items.length > 3 && ` y ${order.items.length - 3} más`}
                            </span>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors rounded-lg font-medium flex items-center gap-2"
                        >
                            <svg className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
                        </button>

                        {order.status === 'pending' && (
                            <button className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/30 transition-colors rounded-lg font-medium">
                                Pago pendiente
                            </button>
                        )}
                    </div>
                </div>

                {/* Detalles expandibles */}
                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-white/10"
                    >
                        <OrderDetails order={order} />
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default OrderCard;