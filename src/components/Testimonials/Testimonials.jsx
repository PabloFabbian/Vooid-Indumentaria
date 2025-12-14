import React from 'react';

const testimonials = [
    {
        name: 'María G.',
        location: 'Buenos Aires',
        comment: 'La calidad es excelente, superó mis expectativas. Definitivamente voy a volver a comprar.',
        rating: 4,
        date: 'Hace 2 semanas'
    },
    {
        name: 'Lucas R.',
        location: 'Córdoba',
        comment: 'Tienen un servicio al cliente excepcional, quedé muy satisfecho.',
        rating: 4,
        date: 'Hace 1 mes'
    },
    {
        name: 'Sofía M.',
        location: 'Rosario',
        comment: 'Me gusta la variedad de diseños disponibles. La entrega fue rápida y el producto llegó en perfectas condiciones.',
        rating: 5,
        date: 'Hace 3 semanas'
    },
    {
        name: 'Diego P.',
        location: 'Mendoza',
        comment: 'Comodísimos los buzos y excelente el corte, muy recomendados.',
        rating: 4,
        date: 'Hace 1 semana'
    },
    {
        name: 'Camila F.',
        location: 'La Plata',
        comment: 'Quería confirmarlo en persona, AMÉ la calidad de las prendas, seguro vuelva a pedir esta semana.',
        rating: 5,
        date: 'Hace 4 días'
    },
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill={index < rating ? '#FFD700' : '#D1D5DB'}
                    className="drop-shadow-sm"
                >
                    <polygon points="10,1 12.09,7.36 19.18,7.36 13.54,11.57 15.64,17.91 10,13.73 4.36,17.91 6.46,11.57 0.82,7.36 7.91,7.36" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    const initials = testimonial.name.split(' ').map(n => n[0]).join('');

    return (
        <div className="relative w-72 md:h-84 2xl:h-84 rounded-2xl overflow-hidden shadow-2xl -mt-16 group hover:scale-105 transition-transform duration-300">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-pink-50 opacity-90"></div>

            {/* Contenido */}
            <div className="relative h-full p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">{initials}</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            {testimonial.location}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 bg-white/60 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-xs text-gray-500 font-medium">{testimonial.date}</span>
                </div>

                {/* Comentario */}
                <div className="flex-1 mb-4">
                    <p className="text-gray-700 leading-relaxed text-sm italic">
                        "{testimonial.comment}"
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-200/50">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg px-3 py-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#10B981">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span className="text-xs text-green-700 font-semibold">Compra verificada</span>
                    </div>
                </div>
            </div>

            {/* Decoración */}
            <div className="absolute top-4 right-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-purple-500">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="bg-gradient-to-b from-[#babec6] to-[#050404] py-8">
            <div className="flex md:gap-8 2xl:gap-10 justify-center md:scale-90 2xl:scale-100">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;