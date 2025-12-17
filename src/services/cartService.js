export const cartService = {
    calculateTotal: (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    calculateItemTotal: (price, quantity) => price * quantity,

    getCartItemsCount: (items) => {
        return items.reduce((count, item) => count + item.quantity, 0);
    },

    findItemInCart: (cart, product) => {
        return cart.find(item =>
            item.id === product.id &&
            item.selectedColor === product.selectedColor &&
            item.selectedSize === product.selectedSize
        );
    },

    validateCart: (cart) => {
        const errors = [];

        cart.forEach(item => {
            if (item.quantity < 1) {
                errors.push(`La cantidad para "${item.name}" debe ser al menos 1`);
            }

            if (!item.selectedColor || !item.selectedSize) {
                errors.push(`"${item.name}" necesita color y talle seleccionados`);
            }
        });

        return {
            isValid: errors.length === 0,
            errors
        };
    }
};