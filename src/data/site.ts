export const siteInfo = {
    name: "Cherokees Parrilla",
    title: "Cherokees Parrilla | Hamburguesas, Asados y Antojos en Belén",
    description: "Disfruta carnes, costillas BBQ, patacones y burgers artesanales con sabor, calidad y porciones que sí valen la pena en Medellín.",
    location: {
        address: "Cl. 9 #84 - 18, Medellín, Belén, Antioquia",
        city: "Medellín",
        country: "Colombia",
        mapUrl: "https://maps.google.com/?q=Cherokees+Parrilla+Medellin+Belen" // Placeholder de ubicación
    },
    contact: {
        phone: "300 426 0202",
        whatsapp: "573004260202",
        whatsappLink: "https://wa.me/573004260202?text=Hola,%20quiero%20hacer%20un%20pedido.",
    },
    schedule: "Lunes a Domingo de 12:00 p. m. a 10:00 p. m.",
    social: {
        instagram: "https://instagram.com/cherokeesparrilla",
        facebook: "https://facebook.com/cherokeesparrilla",
        linktree: "https://linktr.ee/cherokeesparrilla",
        rappi: "https://www.rappi.com.co/restaurantes/cherokees-parrilla"
    },
    services: [
        "Consumo en el lugar",
        "Retiros en la puerta",
        "Entrega sin contacto",
        "Domicilios"
    ]
};

export const featuredProducts = [
    {
        id: 1,
        name: "Cherokees Burger",
        description: "La clásica de la casa, 150g de res artesanal, queso mozzarella, tocineta ahumada y vegetales frescos.",
        price: "$20.000",
        image: "/images/product-cherokees-burger.jpg",
        badge: "Popular"
    },
    {
        id: 2,
        name: "Premium Cherokees",
        description: "Doble carne madurada, doble queso cheddar, aros de cebolla crocantes y nuestra salsa especial BBQ.",
        price: "$28.000",
        image: "/images/product-premium.jpg",
        badge: "Recomendado"
    },
    {
        id: 3,
        name: "5 Quesos",
        description: "Explosión de sabor con mezcla de 5 quesos fundidos sobre nuestra jugosa carne artesanal.",
        price: "$25.000",
        image: "/images/product-5-quesos.jpg",
    },
    {
        id: 4,
        name: "Costillas BBQ",
        description: "Costillas de cerdo tiernas bañadas en salsa BBQ de la casa, acompañadas de papas a la francesa.",
        price: "$35.000",
        image: "/images/product-costillas.jpg",
        badge: "¡Favorito!"
    },
    {
        id: 5,
        name: "Patacón Mixto",
        description: "Base de plátano crujiente, carne desmechada, pollo, queso fundido, hogao y guacamole.",
        price: "$22.000",
        image: "/images/product-patacon-mixto.jpg",
    },
    {
        id: 6,
        name: "Salchipapas Cherokees",
        description: "Generosa porción de papas, salchicha premium, queso fundido, tocineta y ripio de papa.",
        price: "$18.000",
        image: "/images/product-salchipapas.jpg",
    }
];

export const menuCategories = [
    {
        name: "Hamburguesas",
        items: ["Cherokees Burger", "Premium Cherokees", "5 Quesos", "Clásica"]
    },
    {
        name: "Patacones",
        items: ["Patacón Mixto", "Patacón de Res", "Patacón de Pollo"]
    },
    {
        name: "Variedades",
        items: ["Costillas BBQ", "Salchipapas Cherokees", "Maicitos Cherokees", "Ensalada Cherokees"]
    },
    {
        name: "Bebidas",
        items: ["Gaseosas", "Limonadas", "Jugos Naturales", "Cervezas Nacionales"]
    }
];

export const reasonsToChooseUs = [
    { title: "Calidad Premium", desc: "Carnes e ingredientes seleccionados de la más alta calidad.", icon: "star" },
    { title: "Sabor Artesanal", desc: "Recetas únicas y preparaciones hechas en casa con pasión.", icon: "fire" },
    { title: "Porciones Generosas", desc: "Comida abundante para que quedes completamente satisfecho.", icon: "food" },
    { title: "Atención Rápida", desc: "Servicio ágil en el local y tiempos cortos en domicilios.", icon: "clock" },
];

export const testimonials = [
    { name: "Juan C.", role: "Local Guide", text: "Excelente atención al cliente y la presentación de la comida es brutal. Las costillas son de locos.", rating: 5 },
    { name: "Maria Fernanda", role: "Cliente Frecuente", text: "El sabor de las hamburguesas es increíble. La carne es muy jugosa y el tamaño es perfecto. Totalmente recomendado en Belén.", rating: 5 },
    { name: "Andrés M.", role: "Cliente", text: "Muy buena relación de calidad y precio. Los patacones mixtos son inmensos y tienen un sabor casero delicioso.", rating: 4 },
];
