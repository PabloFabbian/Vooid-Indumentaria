import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CartIcon = () => {
    const { getCartItemsCount, openCart } = useCart();
    const itemCount = getCartItemsCount();

    return (
        <div
            className="flex flex-nowrap cursor-pointer"
            onClick={openCart}
        >
            <img
                src="/Cart.png"
                className="md:h-6 2xl:h-7 transition duration-300 hover:opacity-80"
                alt="Carrito"
            />
            {itemCount > 0 && (
                <span
                    id="carrito-count"
                    className="ml-2 bg-stone-800 text-teal-500 animate-bounce-in"
                    style={{
                        fontWeight: 'bold',
                        padding: '0.1em 0.6em',
                        borderRadius: '50%',
                        fontSize: '0.875rem'
                    }}
                >
                    {itemCount > 9 ? '9+' : itemCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;