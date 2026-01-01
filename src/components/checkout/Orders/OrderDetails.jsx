import React from 'react';
import { formatPrice } from '../../../utils/formatters';

const OrderDetails = ({ order }) => {
    return (
        <div className="p-6 bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Productos */}
                <div>
                    <h4 className="font-bold mb-4">Productos del pedido</h4>
                    <div className="space-y-3">
                        {order.items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                                    ) : (
                                        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">{item.name}</p>
                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                        <span>Cantidad: {item.quantity}</span>
                                        {item.selectedColor && (
                                            <span className="flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.selectedColor }} />
                                                {item.selectedColor}
                                            </span>
                                        )}
                                        {item.selectedSize && (
                                            <span>Talle: {item.selectedSize}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="font-bold">
                                    {formatPrice(item.price * item.quantity)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Información del pedido */}
                <div className="space-y-6">
                    {/* Datos del cliente */}
                    <div>
                        <h4 className="font-bold mb-4">Datos de envío</h4>
                        <div className="space-y-2 text-white/80">
                            <p><span className="text-white/60">Nombre:</span> {order.customer.name}</p>
                            <p><span className="text-white/60">Email:</span> {order.customer.email}</p>
                            <p><span className="text-white/60">Teléfono:</span> {order.customer.phone}</p>
                            <p><span className="text-white/60">Dirección:</span> {order.customer.address}</p>
                        </div>
                    </div>

                    {/* Resumen de pago */}
                    <div className="border-t border-white/10 pt-6">
                        <h4 className="font-bold mb-4">Resumen de pago</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-white/60">Subtotal:</span>
                                <span>{formatPrice(order.subtotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/60">Envío:</span>
                                <span>{order.shipping === 0 ? 'Gratis' : formatPrice(order.shipping)}</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-white/10 font-bold">
                                <span>Total:</span>
                                <span>{formatPrice(order.total)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Notas */}
                    {order.notes && (
                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <h5 className="font-bold text-blue-300 mb-2">Notas del pedido</h5>
                            <p className="text-blue-200/80">{order.notes}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;