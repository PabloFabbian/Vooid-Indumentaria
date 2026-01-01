import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice } from '../../../utils/formatters';
import { getOrders } from '../../../services/orderService';
import OrderCard from './OrderCard';
import EmptyOrders from './EmptyOrders';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // 'all', 'pending', 'completed', 'cancelled'

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = () => {
        setLoading(true);
        const allOrders = getOrders();
        setOrders(allOrders);
        setLoading(false);
    };

    const filteredOrders = orders.filter(order => {
        if (filter === 'all') return true;
        return order.status === filter;
    });

    const getStatusCount = (status) => {
        return orders.filter(order => order.status === status).length;
    };

    const statusFilters = [
        { id: 'all', label: 'Todos', count: orders.length },
        { id: 'pending', label: 'Pendientes', count: getStatusCount('pending') },
        { id: 'completed', label: 'Completados', count: getStatusCount('completed') },
        { id: 'cancelled', label: 'Cancelados', count: getStatusCount('cancelled') }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#110911] to-[#2e1c2b] text-white">
            {/* Header */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold">Mis Pedidos</h1>
                            <p className="text-white/60 mt-2">
                                {orders.length === 0
                                    ? 'No tenés pedidos aún'
                                    : `Tenés ${orders.length} pedido${orders.length !== 1 ? 's' : ''}`
                                }
                            </p>
                        </div>
                        <Link
                            to="/shop"
                            className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors rounded-lg font-medium inline-flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Seguir comprando
                        </Link>
                    </div>
                </div>
            </div>

            {/* Filtros */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-wrap gap-2">
                    {statusFilters.map((filterItem) => (
                        <button
                            key={filterItem.id}
                            onClick={() => setFilter(filterItem.id)}
                            className={`px-4 py-2 rounded-lg border transition-all ${filter === filterItem.id
                                ? 'bg-white text-[#2e1c2b] border-white'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                                }`}
                        >
                            {filterItem.label}
                            {filterItem.count > 0 && (
                                <span className={`ml-2 px-1.5 py-0.5 text-xs rounded ${filter === filterItem.id
                                    ? 'bg-[#2e1c2b]/20 text-[#2e1c2b]'
                                    : 'bg-white/20'
                                    }`}>
                                    {filterItem.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Contenido principal */}
            <div className="container mx-auto px-4 pb-20">
                {loading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
                        <p className="mt-4 text-white/60">Cargando pedidos...</p>
                    </div>
                ) : filteredOrders.length === 0 ? (
                    <EmptyOrders filter={filter} />
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        {filteredOrders.map((order) => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default OrdersPage;