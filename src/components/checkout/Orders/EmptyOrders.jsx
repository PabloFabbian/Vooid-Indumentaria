import React from 'react';
import { Link } from 'react-router-dom';

const EmptyOrders = ({ filter }) => {
    const getMessage = () => {
        switch (filter) {
            case 'pending':
                return 'No tenés pedidos pendientes';
            case 'completed':
                return 'No tenés pedidos completados';
            case 'cancelled':
                return 'No tenés pedidos cancelados';
            default:
                return 'No tenés pedidos registrados';
        }
    };

    return (
        <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{getMessage()}</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
                {filter === 'all'
                    ? 'Realizá tu primera compra y podrás ver el detalle de todos tus pedidos aquí'
                    : 'Los pedidos con este estado aparecerán aquí'
                }
            </p>
            <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2e1c2b] font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Ir a la tienda
            </Link>
        </div>
    );
};

export default EmptyOrders;