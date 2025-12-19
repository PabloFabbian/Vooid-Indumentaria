// src/components/checkout/PaymentSuccess/OrderSummary.jsx
import React from 'react';
import { Package, Truck, Clock, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { formatCurrency, copyToClipboard } from '../PaymentModal/PaymentUtils';

const OrderSummary = ({ order }) => {
    if (!order) return null;

    const handleCopyOrderNumber = () => {
        if (order.orderNumber) {
            copyToClipboard(order.orderNumber, 'Número de orden');
        }
    };

    const handleCopyTransactionId = () => {
        if (order.transactionId) {
            copyToClipboard(order.transactionId, 'ID de transacción');
        }
    };

    return (
        <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-white" />
                <h2 className="text-xl font-bold text-white">Detalles del Pedido</h2>
            </div>

            {/* Información del pedido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Número de Orden */}
                <div className="p-4 bg-white/5 border border-white/10 group">
                    <div className="flex justify-between items-start mb-1">
                        <p className="text-white/60 text-sm">Número de Orden</p>
                        <button
                            onClick={handleCopyOrderNumber}
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded"
                            title="Copiar número de orden"
                        >
                            <Copy className="w-3 h-3 text-white/60 hover:text-white" />
                        </button>
                    </div>
                    <p className="text-white font-mono font-bold text-sm">{order.orderNumber || 'VOOID-000000-00000-XXXX'}</p>
                    <p className="text-white/50 text-xs mt-1">Usa este número para seguimiento</p>
                </div>

                {/* ID de Transacción */}
                {order.transactionId && (
                    <div className="p-4 bg-white/5 border border-white/10 group">
                        <div className="flex justify-between items-start mb-1">
                            <p className="text-white/60 text-sm">ID de Transacción</p>
                            <button
                                onClick={handleCopyTransactionId}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded"
                                title="Copiar ID de transacción"
                            >
                                <Copy className="w-3 h-3 text-white/60 hover:text-white" />
                            </button>
                        </div>
                        <p className="text-white font-mono font-bold text-sm">{order.transactionId}</p>
                        <p className="text-white/50 text-xs mt-1">Para consultas de pago</p>
                    </div>
                )}

                {/* Fecha */}
                <div className="p-4 bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm mb-1">Fecha</p>
                    <p className="text-white font-medium">
                        {order.date
                            ? new Date(order.date).toLocaleDateString('es-AR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })
                            : new Date().toLocaleDateString('es-AR')
                        }
                    </p>
                    <p className="text-white/50 text-xs mt-1">
                        {order.date
                            ? new Date(order.date).toLocaleTimeString('es-AR', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })
                            : ''
                        }
                    </p>
                </div>

                {/* Estado */}
                <div className="p-4 bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm mb-1">Estado</p>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium">
                            {order.status === 'pending' ? 'Pendiente de pago' :
                                order.status === 'confirmed' ? 'Confirmado' :
                                    order.status || 'Confirmado'}
                        </span>
                    </div>
                    {order.expiresAt && (
                        <p className="text-white/50 text-xs mt-2">
                            ⏳ Vence: {new Date(order.expiresAt).toLocaleDateString('es-AR')}
                        </p>
                    )}
                </div>
            </div>

            {/* Información de envío */}
            <div className="mb-6">
                <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-white" />
                    Información de Envío
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10">
                        <p className="text-white/60 text-sm mb-1">Destinatario</p>
                        <p className="text-white font-medium">
                            {order.customer?.firstName} {order.customer?.lastName}
                        </p>
                        <p className="text-white/70 text-sm">{order.customer?.email}</p>
                        <p className="text-white/70 text-sm">{order.customer?.phone}</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10">
                        <p className="text-white/60 text-sm mb-1">Dirección de envío</p>
                        <p className="text-white font-medium">{order.customer?.address}</p>
                        <p className="text-white/70 text-sm">
                            {order.customer?.city}, CP: {order.customer?.zipCode}
                        </p>
                    </div>
                </div>
            </div>

            {/* Timeline del pedido */}
            <div className="mb-6">
                <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-white" />
                    Progreso del Pedido
                </h3>
                <div className="space-y-4">
                    {[
                        {
                            step: 'Pago confirmado',
                            status: order.status === 'confirmed' ? 'completed' : 'pending',
                            time: 'Inmediato',
                            description: 'Tu pago ha sido procesado exitosamente'
                        },
                        {
                            step: 'Procesando pedido',
                            status: order.status === 'confirmed' ? 'current' : 'pending',
                            time: 'Próximas 24hs',
                            description: 'Preparamos tu pedido para el envío'
                        },
                        {
                            step: 'Preparando envío',
                            status: 'pending',
                            time: '24-48hs',
                            description: 'Empacamos tu pedido con cuidado'
                        },
                        {
                            step: 'En camino',
                            status: 'pending',
                            time: '3-5 días',
                            description: 'Tu pedido está en transporte'
                        },
                        {
                            step: 'Entregado',
                            status: 'pending',
                            time: '5-7 días',
                            description: '¡Tu pedido ha llegado!'
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${item.status === 'completed' ? 'border-green-500 bg-green-500/20' : item.status === 'current' ? 'border-blue-500 bg-blue-500/20' : 'border-white/20'}`}>
                                {item.status === 'completed' && (
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                )}
                                {item.status === 'current' && (
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                )}
                                {item.status === 'pending' && (
                                    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className={`font-medium ${item.status === 'current' ? 'text-white' : item.status === 'completed' ? 'text-white/90' : 'text-white/70'}`}>
                                            {item.step}
                                        </p>
                                        <p className="text-white/50 text-sm">{item.description}</p>
                                    </div>
                                    <span className={`text-sm ${item.status === 'current' ? 'text-blue-400' : 'text-white/50'}`}>
                                        {item.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Resumen de productos */}
            {order.items && order.items.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                    <h3 className="text-white font-medium mb-4">Productos</h3>
                    <div className="space-y-3">
                        {order.items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10">
                                <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-medium text-sm">{item.name}</p>
                                    <p className="text-white/50 text-xs">
                                        {item.color} • {item.size} • ×{item.quantity}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-bold text-sm">{formatCurrency(item.subtotal)}</p>
                                    <p className="text-white/50 text-xs">{formatCurrency(item.price)} c/u</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Totales */}
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-white/60 text-sm">Subtotal</span>
                            <span className="text-white font-medium">{formatCurrency(order.subtotal || 0)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/60 text-sm">Envío</span>
                            <span className="text-white font-medium">
                                {order.shipping === 0 ? 'GRATIS' : formatCurrency(order.shipping || 0)}
                            </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-white/20">
                            <span className="text-white font-bold">Total</span>
                            <span className="text-white font-bold text-lg">{formatCurrency(order.total || 0)}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Nota importante */}
            <div className="mt-6 p-4 bg-white/5 border border-white/10">
                <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 text-xs">!</span>
                    </div>
                    <div>
                        <p className="text-white font-medium text-sm mb-1">
                            Guarda esta información
                        </p>
                        <p className="text-white/70 text-sm">
                            Tu número de orden <strong className="text-white">{order.orderNumber?.split('-')[0]}</strong> y
                            el ID de transacción son necesarios para cualquier consulta sobre tu compra.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;