import React, { useState, useEffect } from 'react';

const ReviewCarousel = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [timerPaused, setTimerPaused] = useState(false);
    const [timerTemporarilyPaused, setTimerTemporarilyPaused] = useState(false);

    const reviewsData = [
        { imageUrl: 'Franco_Vogel.jpg', name: 'Franco Vogel', comment: '¡Excelente calidad! Me encanta la textura y el ajuste de la remera. Definitivamente la recomendaría.', stars: 5 },
        { imageUrl: 'Juan_Suner.jpg', name: 'Juan Suñer', comment: 'Buena calidad pero el color es un poco diferente al de la imagen. Aun así, estoy satisfecho con mi compra.', stars: 4 },
        { imageUrl: 'Lolo_Rozo.jpg', name: 'Lolo Rozdolski', comment: 'Me gusta la variedad de diseños disponibles. La entrega fue rápida y el producto llegó en perfectas condiciones.', stars: 5 }
    ];

    const handleNextReview = () => setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);

    const handlePrevReview = () => setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1));

    useEffect(() => {
        const interval = setInterval(() => {
            if (!timerPaused) {
                handleNextReview();
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [timerPaused]);

    const openInstagramStories = () => {
        const instagramUrl = 'https://www.instagram.com/stories/highlights/17848445040146756/?hl=es-la';
        window.open(instagramUrl, '_blank');
    };

    const handleMouseEnter = (buttonNumber) => {
        if (buttonNumber === 1 || buttonNumber === 2) {
            setIsHovered1(true);
            setTimerTemporarilyPaused(true);
        } else if (buttonNumber === 3 || buttonNumber === 4) {
            setIsHovered2(true);
            setTimerTemporarilyPaused(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered1(false);
        setIsHovered2(false);
        setTimerTemporarilyPaused(false);
    };

    useEffect(() => {
        setTimerPaused(timerTemporarilyPaused);
    }, [timerTemporarilyPaused]);

    return (
        <div className="p-4 w-full md:w-1/2 sm:w-1/2 h-80 md:h-auto sm:h-auto transition duration-400 ease-in-out transform hover:-translate-y-1 flex justify-center items-center relative overflow-y-auto">
            <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={handlePrevReview}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                        className="text-gray-300 hover:text-white focus:outline-none relative"
                    >
                        &lt;
                        {isHovered1 && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white opacity-20"></div>}
                    </button>
                    <div className="flex items-center">
                        <a href="#" onClick={openInstagramStories} target="_blank">
                            <img
                                src={reviewsData[currentReviewIndex].imageUrl}
                                alt={`Avatar de ${reviewsData[currentReviewIndex].name}`}
                                className="w-12 h-12 rounded-full mr-4 cursor-pointer"
                            />
                        </a>
                        <div>
                            <h2 className="text-lg md:text-xl text-white font-semibold">
                                {reviewsData[currentReviewIndex].name}
                            </h2>
                            <div className="flex items-center text-yellow-400">
                                {Array.from(
                                    Array(reviewsData[currentReviewIndex].stars),
                                    (_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 14l9-5-9-5-9 5 9 5z"
                                            />
                                        </svg>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleNextReview}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                        className="text-gray-300 hover:text-white focus:outline-none relative"
                    >
                        &gt;
                        {isHovered2 && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white opacity-20"></div>}
                    </button>
                </div>
                <p className="text-gray-300 text-center">{reviewsData[currentReviewIndex].comment}</p>
            </div>
        </div>
    );
};

export default ReviewCarousel;