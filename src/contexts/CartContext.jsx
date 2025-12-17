// src/contexts/CartContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Cargar del localStorage al iniciar
    useEffect(() => {
        const savedCart = localStorage.getItem('vooid_cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                console.log('Cart loaded from localStorage:', parsedCart);
                setCartItems(parsedCart);
            } catch (error) {
                console.error('Error al cargar el carrito:', error);
            }
        }
    }, []);

    // Guardar en localStorage cuando cambia
    useEffect(() => {
        console.log('Cart updated, saving to localStorage:', cartItems);
        localStorage.setItem('vooid_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product) => {
        console.log('Adding to cart:', product);
        setCartItems(prev => {
            const existingItemIndex = prev.findIndex(item =>
                item.id === product.id &&
                item.selectedColor === product.selectedColor &&
                item.selectedSize === product.selectedSize
            );

            if (existingItemIndex !== -1) {
                const newItems = [...prev];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + product.quantity
                };
                console.log('Item already in cart, updating quantity:', newItems);
                return newItems;
            } else {
                const newItems = [...prev, product];
                console.log('New item added to cart:', newItems);
                return newItems;
            }
        });
    }, []);

    const removeFromCart = useCallback((itemId, color, size) => {
        console.log('Removing from cart:', itemId, color, size);
        setCartItems(prev =>
            prev.filter(item =>
                !(item.id === itemId &&
                    item.selectedColor === color &&
                    item.selectedSize === size)
            )
        );
    }, []);

    const updateQuantity = useCallback((itemId, color, size, newQuantity) => {
        if (newQuantity < 1) return;
        console.log('Updating quantity:', itemId, newQuantity);

        setCartItems(prev =>
            prev.map(item =>
                item.id === itemId &&
                    item.selectedColor === color &&
                    item.selectedSize === size
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    }, []);

    const clearCart = useCallback(() => {
        console.log('Clearing cart');
        setCartItems([]);
    }, []);

    const getCartTotal = useCallback(() => {
        const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        console.log('Calculating cart total:', total);
        return total;
    }, [cartItems]);

    const getCartItemsCount = useCallback(() => {
        const count = cartItems.reduce((count, item) => count + item.quantity, 0);
        console.log('Calculating cart items count:', count);
        return count;
    }, [cartItems]);

    const toggleCart = useCallback(() => {
        console.log('Toggling cart, current state:', isCartOpen);
        setIsCartOpen(prev => !prev);
    }, [isCartOpen]);

    const openCart = useCallback(() => {
        console.log('Opening cart');
        setIsCartOpen(true);
    }, []);

    const closeCart = useCallback(() => {
        console.log('Closing cart');
        setIsCartOpen(false);
    }, []);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartItemsCount,
            isCartOpen,
            toggleCart,
            openCart,
            closeCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de CartProvider');
    }
    return context;
};