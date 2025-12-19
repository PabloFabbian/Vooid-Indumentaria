import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductClick, formatPrice }) => {
    if (products.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                    <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No se encontraron productos</h3>
                <p className="text-white/60">Intenta con otros filtros o categorías</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={onProductClick}
                    formatPrice={formatPrice}
                />
            ))}
        </div>
    );
};

export default ProductGrid;