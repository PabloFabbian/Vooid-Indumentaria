import React from 'react';

const testimonials = [
    {image: 'path/to/image1.jpg', comment: 'Me gusta la variedad de diseños disponibles. La entrega fue rápida y el producto llegó en perfectas condiciones.', rating: 4,},
    {image: 'path/to/image2.jpg', comment: 'Excelente calidad, superó mis expectativas. Definitivamente volveré a comprar.', rating: 5,},
    {image: 'path/to/image3.jpg', comment: 'El servicio al cliente fue excepcional, estoy muy satisfecho.', rating: 3,},
    {image: 'path/to/image4.jpg', comment: 'Productos innovadores y entrega rápida, muy recomendados.', rating: 4,},
    {image: 'path/to/image5.jpg', comment: 'Gran experiencia de compra, volveré sin duda.', rating: 5,},
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
        <div className="relative w-72 h-96 rounded-lg overflow-hidden shadow-lg -mt-16 mb-10">
            <img src={testimonial.image} alt="Testimonial" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                <p className="text-white mb-2 text-center">{testimonial.comment}</p>
                <StarRating rating={testimonial.rating} />
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="bg-gradient-to-b from-[#B3BBC8] to-[#C0C2C8] flex flex-wrap gap-4 justify-center">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
    );
};

export default Testimonials;