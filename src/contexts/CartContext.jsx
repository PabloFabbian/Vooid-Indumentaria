// src/contexts/CartContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

// Función para normalizar rutas de imágenes
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

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const normalizeCartItem = (item) => {
        return {
            ...item,
            image: normalizeImagePath(item.image)
        };
    };

    useEffect(() => {
        const savedCart = localStorage.getItem('vooid_cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                const normalizedCart = parsedCart.map(normalizeCartItem);
                setCartItems(normalizedCart);
            } catch (error) {
                console.error('Error loading cart:', error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('vooid_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product) => {
        const normalizedProduct = normalizeCartItem(product);

        setCartItems(prev => {
            const existingItemIndex = prev.findIndex(item =>
                item.id === normalizedProduct.id &&
                item.selectedColor === normalizedProduct.selectedColor &&
                item.selectedSize === normalizedProduct.selectedSize
            );

            if (existingItemIndex !== -1) {
                const newItems = [...prev];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + normalizedProduct.quantity
                };
                return newItems;
            } else {
                return [...prev, normalizedProduct];
            }
        });
    }, []);

    const removeFromCart = useCallback((itemId, color, size) => {
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
        setCartItems([]);
    }, []);

    const getCartTotal = useCallback(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    const getCartItemsCount = useCallback(() => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    }, [cartItems]);

    const toggleCart = useCallback(() => {
        setIsCartOpen(prev => !prev);
    }, []);

    const openCart = useCallback(() => {
        setIsCartOpen(true);
    }, []);

    const closeCart = useCallback(() => {
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