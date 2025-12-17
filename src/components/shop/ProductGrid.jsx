import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductClick, formatPrice }) => {
    return (
        <ul className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={onProductClick}
                    formatPrice={formatPrice}
                />
            ))}
        </ul>
    );
};

export default ProductGrid;