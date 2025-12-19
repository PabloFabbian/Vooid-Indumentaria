// src/components/checkout/PaymentSuccessPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import {
    Check, Mail, Printer, ShoppingBag, Package, Truck,
    Clock, Home, Shield, CreditCard, Headphones
} from 'lucide-react';
import {
    generateOrderNumber,
    generateTransactionId,
    formatCurrency
} from './PaymentModal/PaymentUtils';

const PaymentSuccessPage = () => {
    const { clearCart } = useCart();
    const location = useLocation();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const getSavedOrder = () => {
        try {
            const saved = localStorage.getItem('vooid_last_order');
            return saved ? JSON.parse(saved) : null;
        } catch (error) {
            console.error('Error al obtener orden guardada:', error);
            return null;
        }
    };

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

    const createFallbackOrder = (customerData = {}) => {
        const items = [
            {
                id: 'fallback-001',
                name: 'Producto de ejemplo',
                image: 'https://via.placeholder.com/150x150/2e1c2b/ffffff?text=Vooid',
                selectedColor: 'Negro',
                selectedSize: 'M',
                quantity: 1,
                price: 16500
            }
        ];

        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 50000 ? 0 : 1500;

        return {
            orderNumber: generateOrderNumber(),
            transactionId: generateTransactionId(),
            customer: {
                firstName: customerData.firstName || 'Cliente',
                lastName: customerData.lastName || 'Vooid',
                email: customerData.email || 'ejemplo@email.com',
                phone: customerData.phone || '+54 9 11 1234-5678',
                address: customerData.address || 'Dirección no especificada',
                city: customerData.city || 'Buenos Aires',
                zipCode: customerData.zipCode || '1000'
            },
            items,
            itemCount: items.reduce((acc, item) => acc + item.quantity, 0),
            subtotal,
            shipping,
            total: subtotal + shipping,
            date: new Date().toISOString(),
            status: 'confirmed'
        };
    };

    const normalizeItems = (items) => {
        if (!items || !Array.isArray(items)) return [];

        return items.map(item => ({
            id: item.id || `item-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || 'Producto',
            image: normalizeImagePath(item.image),
            selectedColor: item.selectedColor || item.color || 'Negro',
            selectedSize: item.selectedSize || item.size || 'M',
            quantity: item.quantity || 1,
            price: item.price || 0,
            subtotal: (item.price || 0) * (item.quantity || 1)
        }));
    };

    const loadOrderData = () => {
        const savedOrder = getSavedOrder();
        const savedFormData = localStorage.getItem('checkout_form_data');

        let orderData;

        if (savedOrder && savedOrder.items && savedOrder.items.length > 0) {
            orderData = {
                ...savedOrder,
                items: normalizeItems(savedOrder.items)
            };
        } else {
            let customerData = {};
            if (savedFormData) {
                try {
                    customerData = JSON.parse(savedFormData);
                } catch (error) {
                    console.error('Error parsing form data:', error);
                }
            }

            const searchParams = new URLSearchParams(location.search);
            const paymentId = searchParams.get('payment_id');
            const status = searchParams.get('status') || 'approved';

            orderData = createFallbackOrder(customerData);
            if (paymentId) orderData.paymentId = paymentId;
            orderData.status = status;

            localStorage.setItem('vooid_last_order', JSON.stringify(orderData));
        }

        setOrderDetails(orderData);
    };

    const cleanupCheckout = () => {
        setTimeout(() => {
            clearCart();
            localStorage.removeItem('checkout_form_data');
        }, 500);
    };

    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        const { orderNumber, date, items, total } = orderDetails;

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Comprobante Vooid - ${orderNumber}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
                    .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
                    .order-info { margin: 20px 0; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    th, td { padding: 12px 8px; text-align: left; border-bottom: 1px solid #ddd; }
                    th { background: #f5f5f5; font-weight: bold; }
                    .total { font-size: 18px; font-weight: bold; margin-top: 30px; text-align: right; }
                    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Vooid Store</h1>
                    <h2>Comprobante de Compra</h2>
                </div>
                
                <div class="order-info">
                    <p><strong>Orden:</strong> ${orderNumber}</p>
                    <p><strong>Fecha:</strong> ${new Date(date).toLocaleDateString('es-AR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}</p>
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Color/Talle</th>
                            <th>Cantidad</th>
                            <th>Precio Unit.</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(items || []).map(item => `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.selectedColor || 'N/A'}, ${item.selectedSize || 'N/A'}</td>
                                <td>${item.quantity}</td>
                                <td>${formatCurrency(item.price)}</td>
                                <td>${formatCurrency(item.price * item.quantity)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <div class="total">
                    <p>Total: ${formatCurrency(total || 0)}</p>
                </div>
                
                <div class="footer">
                    <p>Vooid Store - Todos los derechos reservados</p>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => printWindow.print(), 250);
    };

    useEffect(() => {
        loadOrderData();
        cleanupCheckout();

        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const OrderHeader = () => (
        <div className="text-center my-10">
            <div className="w-24 h-24 mx-auto bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
                <Check className="w-12 h-12 text-green-400" strokeWidth={2} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                ¡Compra Confirmada!
            </h1>
            <p className="text-white/70 mb-4 max-w-2xl mx-auto">
                Tu pedido ha sido procesado exitosamente.
            </p>
            {orderDetails && (
                <div className="inline-flex flex-wrap gap-4 justify-center mb-6">
                    <div className="px-4 py-2 bg-white/5 border border-white/20">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Orden</p>
                        <p className="text-white font-mono font-bold text-sm">{orderDetails.orderNumber}</p>
                    </div>
                    <div className="px-4 py-2 bg-white/5 border border-white/20">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Fecha</p>
                        <p className="text-white font-medium">
                            {new Date(orderDetails.date).toLocaleDateString('es-AR', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })}
                        </p>
                    </div>
                    <div className="px-4 py-2 bg-white/5 border border-white/20">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Items</p>
                        <p className="text-white font-bold">{orderDetails.itemCount || 0}</p>
                    </div>
                </div>
            )}
        </div>
    );

    const ProductList = () => {
        const items = orderDetails?.items || [];

        if (items.length === 0) {
            return (
                <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                    <div className="text-center py-8">
                        <Package className="w-12 h-12 text-white/40 mx-auto mb-3" />
                        <p className="text-white/60">No se encontraron productos en el pedido.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Package className="w-6 h-6 text-white" />
                    <h2 className="text-xl font-bold text-white">Productos</h2>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="flex gap-4 p-4 bg-white/5 border border-white/10">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover flex-shrink-0 rounded"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/150x150/2e1c2b/ffffff?text=Vooid';
                                }}
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-white font-medium truncate">{item.name}</h3>
                                    <p className="text-white font-bold whitespace-nowrap">
                                        {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>
                                <p className="text-white/50 text-sm mt-1">
                                    Color: {item.selectedColor} | Talle: {item.selectedSize}
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-white/60 text-sm">
                                        Cantidad: {item.quantity}
                                    </p>
                                    <p className="text-white/70 text-sm">
                                        {formatCurrency(item.price)} c/u
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-6 mt-6 space-y-3">
                    <div className="flex justify-between">
                        <span className="text-white/60">Subtotal</span>
                        <span className="text-white font-medium">
                            {formatCurrency(orderDetails.subtotal)}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white/60">Envío</span>
                        <span className="text-white font-medium">
                            {orderDetails.shipping === 0 ? (
                                <span className="text-green-400 font-bold">GRATIS</span>
                            ) : (
                                formatCurrency(orderDetails.shipping)
                            )}
                        </span>
                    </div>
                    <div className="border-t border-white/20 pt-3">
                        <div className="flex justify-between">
                            <span className="text-white font-bold text-lg">Total</span>
                            <span className="text-2xl font-black text-white">
                                {formatCurrency(orderDetails.total)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const OrderTimeline = () => {
        const steps = [
            { step: 'Pago Confirmado', status: 'completed', time: 'Ahora', desc: 'Pago procesado exitosamente.' },
            { step: 'Procesando Pedido', status: 'current', time: 'Próximas 24hs', desc: 'Preparamos tus productos.' },
            { step: 'Preparando Envío', status: 'pending', time: '24-48hs', desc: 'Empaquetado y etiquetado.' },
            { step: 'En Camino', status: 'pending', time: '3-5 días', desc: 'Tu pedido será despachado.' },
            { step: 'Entregado', status: 'pending', time: '5-7 días', desc: 'Recibirás notificación.' }
        ];

        return (
            <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-white" />
                    <h2 className="text-xl font-bold text-white">Seguimiento del Pedido</h2>
                </div>

                <div className="space-y-6">
                    {steps.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center 
                                    ${item.status === 'completed' ? 'border-green-500 bg-green-500/20' :
                                        item.status === 'current' ? 'border-blue-500 bg-blue-500/20' :
                                            'border-white/20'}`}>
                                    {item.status === 'completed' && <Check className="w-5 h-5 text-green-400" />}
                                    {item.status === 'current' && <div className="w-3 h-3 bg-blue-400 rounded-full"></div>}
                                    {item.status === 'pending' && <div className="w-3 h-3 bg-white/30 rounded-full"></div>}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`flex-1 w-0.5 my-2 
                                        ${item.status === 'completed' ? 'bg-green-500' : 'bg-white/20'}`}></div>
                                )}
                            </div>
                            <div className="flex-1 pb-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className={`font-medium 
                                            ${item.status === 'current' ? 'text-white' : 'text-white/70'}`}>
                                            {item.step}
                                        </h3>
                                        <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                                    </div>
                                    <span className="text-white/50 text-sm">{item.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const ActionButtons = () => (
        <div className="space-y-4">
            <Link
                to="/products"
                className="block w-full py-3.5 bg-white text-[#2e1c2b] font-bold text-center hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
            >
                <ShoppingBag className="w-5 h-5" />
                <span>Seguir Comprando</span>
            </Link>

            <button
                onClick={handlePrint}
                className="w-full py-3.5 border border-white/30 text-white text-center hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
            >
                <Printer className="w-5 h-5" />
                <span>Imprimir Comprobante</span>
            </button>

            <Link
                to="/"
                className="block w-full py-3.5 border border-white/20 text-white/70 text-center hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
            >
                <Home className="w-5 h-5" />
                <span>Volver al Inicio</span>
            </Link>
        </div>
    );

    const SupportInfo = () => (
        <div className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-6">
            <h3 className="text-white font-medium mb-4">Soporte y Ayuda</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-blue-400" />
                    <div>
                        <p className="text-white text-sm font-medium">Soporte al Cliente</p>
                        <a href="mailto:soporte@vooid.com" className="text-blue-400 text-sm hover:text-blue-300">
                            soporte@vooid.com
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <p className="text-white/70 text-sm">Garantía de 30 días</p>
                </div>
                <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    <p className="text-white/70 text-sm">Pago 100% seguro</p>
                </div>
            </div>
        </div>
    );

    if (loading || !orderDetails) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#2e1c2b] to-[#110911] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white">Cargando confirmación...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#2e1c2b] to-[#110911] py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <OrderHeader />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <ProductList />
                        <OrderTimeline />
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-b from-blue-500/10 to-blue-500/5 border border-blue-500/20 p-6">
                            <div className="flex items-start gap-3 mb-4">
                                <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-white font-medium mb-2">Confirmación por Email</h3>
                                    <p className="text-white/70 text-sm mb-3">
                                        Hemos enviado los detalles al correo registrado.
                                    </p>
                                    <div className="flex items-center gap-2 text-blue-300 text-sm">
                                        <Truck className="w-4 h-4" />
                                        <span>Recibirás el tracking de envío por email</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ActionButtons />
                        <SupportInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;