import React from 'react';

const testimonials = [
    {image: '/vooid-model4.jpeg', comment: 'La calidad es excelente, superó mis expectativas. Definitivamente voy a volver a comprar.', rating: 4,},
    {image: '/vooid-model3.jpg', comment: 'Tienen un servicio al cliente excepcional, quedé muy satisfecho.', rating: 4,},
    {image: '/vooid-model5.jpg', comment: 'Me gusta la variedad de diseños disponibles. La entrega fue rápida y el producto llegó en perfectas condiciones.', rating: 5,},
    {image: '/vooid-model1.jpg', comment: 'Comodísimos los buzos y excelente el corte, muy recomendados.', rating: 4,},
    {image: '/vooid-model2.jpeg', comment: 'Quería confirmarlo en persona, AMÉ la calidad de las prendas, seguro vuelva a pedir esta semana.', rating: 5,},
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex justify-center">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={index < rating ? '#F1C644' : '#D4D4D4'}
                    style={{ borderRadius: '4px', marginRight: '2px' }}
                >
                    <polygon points="10,1 12.09,7.36 19.18,7.36 13.54,11.57 15.64,17.91 10,13.73 4.36,17.91 6.46,11.57 0.82,7.36 7.91,7.36" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="relative w-72 h-96 rounded-lg overflow-hidden shadow-lg -mt-16">
            <img src={testimonial.image} alt="Testimonial" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                <p className="md:text-sm 2xl:text-base text-white mb-2 text-center">{testimonial.comment}</p>
                <StarRating rating={testimonial.rating} />
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="bg-gradient-to-b from-[#B3BBC8] to-[#A79EAC]">
            <div className="flex gap-4 justify-center md:scale-90 2xl:scale-100">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;