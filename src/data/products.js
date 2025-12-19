// src/data/products.js
export const productsData = [
    {
        id: 1,
        image: "/Design4.png",
        type: "Black",
        name: "SEOUL T-Shirt",
        price: 16000,
        availability: "En Stock",
        color: "Negro",
        details: {
            title: "SEOUL T-Shirt",
            description: [
                "100% Algodón peinado premium",
                "Gramaje: 180 g/m²",
                "Corte oversize regular fit",
                "Estampado serigráfico de alta durabilidad",
                "Cuello rib con costuras reforzadas",
                "Lavado industrial para suavidad",
                "Hecho en Argentina"
            ]
        }
    },
    {
        id: 2,
        image: "/Design5.png",
        type: "Hoodie",
        name: "Vivre La Vie Graphic T-Shirt",
        price: 21150,
        availability: "Pre Order",
        color: "Blanco",
        details: {
            title: "Vivre La Vie Graphic T-Shirt",
            description: [
                "Mezcla Algodón/Poliéster (80/20)",
                "Gramaje: 200 g/m²",
                "Corte boxy fit oversize",
                "Estampado DTF a todo color",
                "Mangas drop shoulder",
                "Acabado brushed interior",
                "Pre-shrunk para mantener talla"
            ]
        }
    },
    {
        id: 3,
        image: "/Design6.png",
        type: "White",
        name: "Plain Beige T-Shirt",
        price: 12000,
        availability: "Sin Stock",
        color: "Crema",
        details: {
            title: "Plain Beige T-Shirt",
            description: [
                "100% Algodón orgánico",
                "Gramaje: 160 g/m²",
                "Corte slim oversize",
                "Color sólido sin estampados",
                "Costuras francesas en hombros",
                "Cuello tubular de doble capa",
                "Tejido jersey suave"
            ]
        }
    },
    {
        id: 4,
        image: "/Design7.png",
        type: "Black",
        name: "Realistic T-Shirt",
        price: 18400,
        availability: "En Stock",
        color: "Crema",
        details: {
            title: "Realistic T-Shirt",
            description: [
                "Mezcla Algodón/Bamboo (70/30)",
                "Gramaje: 190 g/m²",
                "Corte relaxed fit",
                "Estampado fotográfico HD",
                "Mangas tipo baseball",
                "Propiedades antibacterianas",
                "Secado rápido"
            ]
        }
    },
    {
        id: 5,
        image: "/Design8.png",
        type: "Red",
        name: "BONELESS T-Shirt",
        price: 16000,
        availability: "Pre Order",
        color: "Verde",
        details: {
            title: "BONELESS T-Shirt",
            description: [
                "100% Algodón ring-spun",
                "Gramaje: 210 g/m²",
                "Corte oversized cropped",
                "Estampado puff print 3D",
                "Rib en cuello y puños",
                "Lavado stone wash",
                "Coloración reactiva"
            ]
        }
    },
    {
        id: 6,
        image: "/Design9.png",
        type: "Cream",
        name: "Brooklyn T-Shirt",
        price: 21150,
        availability: "En Stock",
        color: "Beige",
        details: {
            title: "Brooklyn T-Shirt",
            description: [
                "Mezcla Algodón/Lino (85/15)",
                "Gramaje: 175 g/m²",
                "Corte regular oversize",
                "Estampado vintage wash",
                "Cuello redondo reforzado",
                "Transpirable y fresco",
                "Ideal para climas cálidos"
            ]
        }
    },
    {
        id: 7,
        image: "/Design1.png",
        type: "Black",
        name: "Solstice Hoodie",
        price: 12000,
        availability: "Sin Stock",
        color: "Gris",
        details: {
            title: "Solstice Hoodie",
            description: [
                "80% Algodón / 20% Poliéster",
                "Gramaje: 320 g/m²",
                "Forro brushed fleece",
                "Capucha ajustable con cordón",
                "Bolsillo canguro",
                "Rib en puños y cintura",
                "Lavado garment-dyed"
            ]
        }
    },
    {
        id: 8,
        image: "/Design2.png",
        type: "Drip",
        name: "Neptune Hoodie",
        price: 18400,
        availability: "En Stock",
        color: "Negro",
        details: {
            title: "Neptune Hoodie",
            description: [
                "French Terry 100% Algodón",
                "Gramaje: 350 g/m²",
                "Forro loopback suave",
                "Capucha oversized con parche",
                "Bolsillos laterales",
                "Costuras overlock reforzadas",
                "Acabado enzyme wash"
            ]
        }
    },
    {
        id: 9,
        image: "/Design3.png",
        type: "Hoodie",
        name: "Ferrari Hoodie",
        price: 16500,
        availability: "Pre Order",
        color: "Blanco",
        details: {
            title: "Ferrari Hoodie",
            description: [
                "Mezcla Algodón/Modal (70/30)",
                "Gramaje: 300 g/m²",
                "Forro thermal brushed",
                "Capucha con ajuste drawstring",
                "Cierre frontal completo con cremallera",
                "Bolsillos con cierre",
                "Lavado acid wash especial"
            ]
        }
    }
];

export const productCareDetails = [
    { icon: "check", text: "Lavar a 30°C" },
    { icon: "check", text: "No usar secadora" },
    { icon: "check", text: "Planchar a baja temp" },
    { icon: "check", text: "Lavar del revés" }
];

export const additionalInfo = [
    { text: "Envío gratis +$50.000" },
    { text: "Cambios sin cargo" },
    { text: "Hasta 12 cuotas s/interés" }
];

export const availableColors = [
    "Negro",
    "Gris Oscuro",
    "Gris Militar",
    "Verde Oliva",
    "Azul Marino"
];

export const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const sizeGuide = {
    XS: "44-46",
    S: "46-48",
    M: "48-50",
    L: "50-52",
    XL: "52-54",
    XXL: "54-56"
};