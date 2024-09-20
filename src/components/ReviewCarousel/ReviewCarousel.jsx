import React, { useState, useEffect } from "react";

const ReviewCarousel = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [timerTemporarilyPaused, setTimerTemporarilyPaused] = useState(false);

  const reviewsData = [
    {
      imageUrl: "Franco_Vogel.jpg",
      name: "Franco Vogel",
      comment:
        "¡Excelente calidad! Me encanta la textura y el ajuste de la remera. Definitivamente la recomendaría.",
      stars: 5,
    },
    {
      imageUrl: "Juan_Suner.jpg",
      name: "Juan Suñer",
      comment:
        "Buena calidad pero el color es un poco diferente al de la imagen. Aun así, estoy satisfecho con mi compra.",
      stars: 4,
    },
    {
      imageUrl: "Lolo_Rozo.jpg",
      name: "Lolo Rozdolski",
      comment:
        "Me gusta la variedad de diseños disponibles. La entrega fue rápida y el producto llegó en perfectas condiciones.",
      stars: 5,
    },
  ];

  const handleNextReview = () =>
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);

  const handlePrevReview = () =>
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1,
    );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timerPaused) {
        handleNextReview();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [timerPaused]);

  const openInstagramStories = () => {
    const instagramUrl =
      "https://www.instagram.com/stories/highlights/17848445040146756/?hl=es-la";
    window.open(instagramUrl, "_blank");
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
    <div className="duration-400 relative flex h-80 w-full transform items-center justify-center overflow-y-auto p-4 transition ease-in-out hover:-translate-y-1 sm:h-auto sm:w-1/2 md:h-auto md:w-1/2">
      <div className="rounded-lg bg-gray-800 p-6">
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={handlePrevReview}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className="relative text-gray-300 hover:text-white focus:outline-none"
          >
            &lt;
            {isHovered1 && (
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white opacity-20"></div>
            )}
          </button>
          <div className="flex items-center">
            <a href="#" onClick={openInstagramStories} target="_blank">
              <img
                src={reviewsData[currentReviewIndex].imageUrl}
                alt={`Avatar de ${reviewsData[currentReviewIndex].name}`}
                className="mr-4 h-12 w-12 cursor-pointer rounded-full"
              />
            </a>
            <div>
              <h2 className="text-lg font-semibold text-white md:text-xl">
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
                  ),
                )}
              </div>
            </div>
          </div>
          <button
            onClick={handleNextReview}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            className="relative text-gray-300 hover:text-white focus:outline-none"
          >
            &gt;
            {isHovered2 && (
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white opacity-20"></div>
            )}
          </button>
        </div>
        <p className="text-center text-gray-300">
          {reviewsData[currentReviewIndex].comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCarousel;
