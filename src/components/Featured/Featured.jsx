import React from "react";
import Card from "../../components/Card/Card";
import "./transition.css";

const cardData = [
  {
    imageUrl: "Card1.webp",
    title: "Materiales de calidad, confort duradero.",
    description:
      "Nuestras remeras son cómodas y duraderas, hechas con materiales premium.",
  },
  {
    imageUrl: "Card2.webp",
    title: "Los tonos brillantes que muestran tu estilo.",
    description:
      "Podes elegir entre una amplia gama de colores vivos para tu personalidad única.",
  },
];

function Featured() {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 pb-0 pt-12  md:py-12">
        <div className="mb-10 flex w-full flex-col text-center">
          <p className="mb-5 text-sm">Único</p>
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-4xl">
            — Descubrí Calidad y Variedad en la&nbsp; —<br /> Indumentaria Vooid
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            En Vooid, ofrecemos una amplia gama de remeras de alta calidad en
            varios colores e impresiones.
            <br />
            Encuentra el diseño perfecto para tu estilo único.
          </p>
        </div>
        <div className="flex justify-center text-center md:-m-4 md:pb-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
