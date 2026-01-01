import { generateOrderNumber } from '../components/checkout/PaymentModal/PaymentUtils';

// Clave para localStorage
const ORDERS_KEY = 'vooid_orders';

// Estructura de un pedido
export const createOrder = (orderData, paymentMethod) => {
    return {
        id: generateOrderNumber(),
        date: new Date().toISOString(),
        customer: {
            name: orderData.name,
            email: orderData.email,
            phone: orderData.phone,
            address: orderData.address
        },
        items: orderData.items || [],
        subtotal: orderData.subtotal || 0,
        shipping: orderData.shipping || 0,
        total: orderData.total || 0,
        paymentMethod: paymentMethod,
        status: paymentMethod === 'transfer' ? 'pending' : 'completed',
        paymentStatus: paymentMethod === 'transfer' ? 'pending' : 'paid',
        notes: orderData.notes || ''
    };
};

// Guardar pedido
export const saveOrder = (order) => {
    try {
        const orders = getOrders();
        orders.unshift(order); // Agregar al inicio
        localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
        return order;
    } catch (error) {
        console.error('Error guardando pedido:', error);
        throw error;
    }
};

// Obtener todos los pedidos
export const getOrders = () => {
    try {
        const orders = localStorage.getItem(ORDERS_KEY);
        return orders ? JSON.parse(orders) : [];
    } catch (error) {
        console.error('Error obteniendo pedidos:', error);
        return [];
    }
};

// Obtener pedido por ID
export const getOrderById = (id) => {
    const orders = getOrders();
    return orders.find(order => order.id === id);
};

// Actualizar estado de pedido
export const updateOrderStatus = (id, status) => {
    try {
        const orders = getOrders();
        const index = orders.findIndex(order => order.id === id);
        if (index !== -1) {
            orders[index].status = status;
            localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
            return orders[index];
        }
        return null;
    } catch (error) {
        console.error('Error actualizando pedido:', error);
        throw error;
    }
};