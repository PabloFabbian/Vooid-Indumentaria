export const formatPrice = (price) => {
    if (typeof price !== 'number') return '$0';
    return `$${price.toLocaleString("es-AR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatOrderNumber = (num) => {
    return `VOID-${String(num).padStart(6, '0')}`;
};