import React from "react";

function Card({ imageUrl, title, description }) {
  return (
    <div className="w-full w-full transform p-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 sm:w-1/2 md:w-1/4">
      <div className="py-3 md:px-5">
        <img
          src={imageUrl}
          alt={`Imagen`}
          className="mb-6 inline-block rounded-lg"
        />
        <h2 className="title-font mb-4 text-xl font-medium text-white md:text-2xl">
          {title}
        </h2>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default Card;
