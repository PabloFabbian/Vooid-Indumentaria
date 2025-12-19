// src/components/checkout/PaymentModal/PaymentUtils.js
import { toast } from 'sonner';

/**
 * Formatea un número como moneda argentina
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

/**
 * Genera un número de pedido único y profesional
 * Formato: VOOID-AÑOMESDÍA-SEGUNDOSDÍA-RANDOM4
 * Ejemplo: VOOID-251218-45231-X8K9
 */
export const generateOrderNumber = () => {
    const date = new Date();

    // Formato: VOOID-AÑOMESDÍA-SEGUNDOSDÍA-RANDOM4
    const year = date.getFullYear().toString().slice(-2); // 25 (últimos 2 dígitos)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 01-12
    const day = date.getDate().toString().padStart(2, '0'); // 01-31

    // Segundos desde la medianoche (0-86399)
    const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const secondsFromMidnight = Math.floor((date - startOfDay) / 1000);
    const timeCode = secondsFromMidnight.toString().padStart(5, '0'); // 00000-86399

    // Caracteres aleatorios (evitando caracteres confusos)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Sin 0, O, 1, I, l
    let randomCode = '';
    for (let i = 0; i < 4; i++) {
        randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `VOOID-${year}${month}${day}-${timeCode}-${randomCode}`;
};

/**
 * Genera un ID corto para items o referencias
 * @param {number} length - Longitud del ID (por defecto 8)
 * @returns {string} ID generado
 */
export const generateShortId = (length = 8) => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

/**
 * Genera un ID de transacción para Mercado Pago
 * Formato: MP-TIMESTAMP-RANDOM
 * Ejemplo: MP-lm9q7f-ABC123
 */
export const generateTransactionId = () => {
    const timestamp = Date.now().toString(36); // Base36 para más corto
    const random = Math.random().toString(36).substr(2, 6).toUpperCase();
    return `MP-${timestamp}-${random}`;
};

/**
 * Verifica si un order number es válido
 * @param {string} orderNumber - Número de pedido a validar
 * @returns {boolean} true si es válido
 */
export const isValidOrderNumber = (orderNumber) => {
    const pattern = /^VOOID-\d{6}-\d{5}-[A-Z2-9]{4}$/;
    return pattern.test(orderNumber);
};

/**
 * Obtiene fecha de expiración (días desde hoy)
 */
export const getExpirationDate = (days = 3) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return {
        date: date,
        formatted: date.toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }),
        timestamp: date.getTime()
    };
};

/**
 * Copia texto al portapapeles con notificación SONNER
 */
export const copyToClipboard = async (text, label = 'Texto') => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success(`${label} copiado al portapapeles`, {
            duration: 2000,
        });
        return true;
    } catch (err) {
        toast.error('Error al copiar', {
            duration: 2000,
        });
        return false;
    }
};

/**
 * Datos bancarios de la empresa
 */
export const bankAccounts = [
    {
        id: 'mercadopago',
        bank: 'Mercado Pago',
        type: 'Cuenta virtual',
        cbu: '0000003100031949349200',
        alias: 'vooid.mpago',
        holder: 'VOOD STORE S.A.',
        cuit: '30-12345678-9',
        recommended: false
    }
];

/**
 * Validación de email
 */
export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

/**
 * Simula un delay (para loading states)
 */
export const simulateDelay = (ms = 1000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Genera un cupón de pago (formato: XXXX-XXXX-XXXX)
 */
export const generateCoupon = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let coupon = '';
    for (let i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) coupon += '-';
        coupon += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return coupon;
};

/**
 * Valida un cupón de pago
 * @param {string} coupon - Cupón a validar
 * @returns {boolean} true si el formato es válido
 */
export const isValidCoupon = (coupon) => {
    const pattern = /^[A-Z2-9]{4}-[A-Z2-9]{4}-[A-Z2-9]{4}$/;
    return pattern.test(coupon);
};

/**
 * Notificación de éxito con Sonner
 */
export const showSuccess = (message) => {
    toast.success(message, {
        duration: 3000,
    });
};

/**
 * Notificación de error con Sonner
 */
export const showError = (message) => {
    toast.error(message, {
        duration: 3000,
    });
};

/**
 * Notificación de información con Sonner
 */
export const showInfo = (message) => {
    toast(message, {
        duration: 3000,
    });
};

/**
 * Sanitiza datos del formulario (elimina espacios, convierte a mayúsculas, etc.)
 */
export const sanitizeFormData = (formData) => {
    const sanitized = { ...formData };

    // Trim espacios en blanco
    Object.keys(sanitized).forEach(key => {
        if (typeof sanitized[key] === 'string') {
            sanitized[key] = sanitized[key].trim();
        }
    });

    // Convertir nombre y apellido a formato título
    if (sanitized.firstName) {
        sanitized.firstName = sanitized.firstName
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    if (sanitized.lastName) {
        sanitized.lastName = sanitized.lastName
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    // Convertir email a minúsculas
    if (sanitized.email) {
        sanitized.email = sanitized.email.toLowerCase();
    }

    return sanitized;
};

/**
 * Calcula el tiempo restante hasta una fecha de expiración
 * @param {Date|number} expirationDate - Fecha de expiración
 * @returns {object} Tiempo restante en días, horas, minutos
 */
export const getTimeRemaining = (expirationDate) => {
    const now = new Date().getTime();
    const target = expirationDate instanceof Date ?
        expirationDate.getTime() : expirationDate;
    const distance = target - now;

    if (distance < 0) {
        return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        expired: false,
        days,
        hours,
        minutes,
        seconds,
        totalSeconds: Math.floor(distance / 1000)
    };
};