import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatters';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            updateQuantity(item.id, item.selectedColor, item.selectedSize, newQuantity);
        }
    };

    const handleRemove = () => {
        removeFromCart(item.id, item.selectedColor, item.selectedSize);
    };

    const itemTotal = item.price * item.quantity;

    return (
        <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            {/* Imagen */}
            <div className="flex-shrink-0">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg border border-white/20"
                />
            </div>

            {/* Información */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-white font-medium mb-1">{item.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-white/70 mb-3">
                            <span>Color: {item.selectedColor}</span>
                            <span>•</span>
                            <span>Talle: {item.selectedSize}</span>
                        </div>
                    </div>
                    <button
                        onClick={handleRemove}
                        className="text-white/40 hover:text-white transition-colors p-1"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-between items-center">
                    {/* Selector de cantidad */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleQuantityChange(item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-colors"
                            disabled={item.quantity <= 1}
                        >
                            <span className="text-white">−</span>
                        </button>
                        <span className="w-8 text-center text-white font-medium">{item.quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/20 rounded hover:bg-white/10 transition-colors"
                        >
                            <span className="text-white">+</span>
                        </button>
                    </div>

                    {/* Precio */}
                    <div className="text-right">
                        <p className="text-lg font-bold text-white">{formatPrice(itemTotal)}</p>
                        <p className="text-sm text-white/70">{formatPrice(item.price)} c/u</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;