import React from "react";

function Featured() {
  return (
    <section className="bg-gradient-to-b from-[#A79EAC] to-[#4A354A] body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 pb-0 pt-12  md:py-12">
        <div className="mb-14 flex w-full flex-col text-center">
          <p className="mb-2 text-lg">Único</p>
          <h1 className="mb-4 text-6xl font-bold tracking-wide text-white">
            — Calidad y Variedad en la —<br /> Indumentaria Vooid
          </h1>
          <p className="mx-auto text-base leading-relaxed">
            En Vooid, ofrecemos una amplia gama de remeras de alta calidad en
            varios colores e impresiones.
            <br />
            Encuentra el diseño perfecto para tu estilo único.
          </p>
        </div>
        <div className="flex gap-20">
            {/* Mitad izquierda: Video */}
            <div className="w-1/2 flex items-center justify-center">
                <video
                    className="w-full h-auto border border-white"
                    controls
                    src="/clothing-video.mp4"
                >
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>

            {/* Mitad derecha: Secciones */}
            <div className="w-1/2 flex flex-col">
              {/* Primera sección */}
              <div className="flex-1 border-b border-gray-300">
                <h2 className="text-[2.6rem] font-bold leading-[3.2rem]">Materiales de calidad y confort duradero.</h2>
                <p className="text-lg mt-2">Nuestras remeras son cómodas y duraderas, hechas con materiales premium.</p>
              </div>
                
              {/* Segunda sección */}
              <div className="flex-1 flex flex-col justify-end items-end">
                <h2 className="text-[2.6rem] font-bold text-right leading-[3.2rem]">Los tonos brillantes que muestran tu estilo.</h2>
                <p className="text-lg mt-2">Podes elegir entre una amplia gama de colores vivos para tu personalidad.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
