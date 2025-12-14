import React from "react";

function Featured() {
  return (
    <section className="bg-gradient-to-b from-[#050404] to-[#2e1c2b] body-font text-gray-400">
      <div className="container mx-auto px-5 pb-0 pt-12 md:py-12 w-[90%] mx-auto">
        <div className="mb-14 flex w-full flex-col text-center">
          <p className="mb-2 text-sm text-cyan-200">ÚNICO</p>
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-cyan-50">
            — CALIDAD Y VARIEDAD EN LA —
            <br /> INDUMENTARIA VOOID
          </h1>
          <div className="mx-auto w-24 h-0.5 bg-cyan-400 my-4"></div>
          <p className="mx-auto md:text-sm 2xl:text-base leading-relaxed text-cyan-200">
            En Vooid, ofrecemos una amplia gama de remeras de alta calidad en variados colores e impresiones.
          </p>
        </div>

        <div className="flex gap-20">
          {/* Mitad izquierda: Video */}
          <div className="w-5/12 relative group">
            <a
              href="https://www.instagram.com/vooid.indumentaria/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden border-2 border-cyan-500">
                <video
                  className="w-full h-auto"
                  loop
                  autoPlay
                  muted
                  src="/clothing-video.mp4"
                >
                  Tu navegador no soporta la etiqueta de video.
                </video>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="border-2 border-white px-6 py-3 mb-4 bg-black/80">
                    <span className="text-sm 2xl:text-lg font-bold tracking-wide">SEGUINOS EN INSTAGRAM</span>
                  </div>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#FFFFFF" strokeWidth="2"></path>
                    <circle cx="16.5" cy="7.5" r="1.5" fill="#FFFFFF"></circle>
                    <rect x="9" y="9" width="6" height="6" stroke="#FFFFFF" strokeWidth="2"></rect>
                  </svg>
                </div>
              </div>
            </a>
            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-transparent mt-2"></div>
          </div>

          {/* Mitad derecha: Secciones */}
          <div className="w-1/2 flex flex-col">
            {/* Primera sección */}
            <div className="flex-1 border-b-2 border-cyan-900 pb-8 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-16 bg-cyan-400 mr-4"></div>
                <div>
                  <h2 className="md:text-3xl 2xl:text-[2.3rem] text-cyan-50 font-bold tracking-tight leading-[3.2rem]">
                    MATERIALES DE CALIDAD Y CONFORT DURADERO.
                  </h2>
                  <div className="h-0.5 w-32 bg-cyan-600 my-3"></div>
                  <p className="text-sm 2xl:text-lg text-cyan-200">
                    Nuestras remeras son cómodas y duraderas, hechas con materiales premium.
                  </p>
                </div>
              </div>
            </div>

            {/* Segunda sección */}
            <div className="flex-1">
              <div className="flex flex-col items-end">
                <div className="w-3/4 text-right">
                  <h2 className="md:text-3xl 2xl:text-[2.3rem] text-cyan-50 font-bold tracking-tight leading-[3.2rem]">
                    LOS TONOS BRILLANTES QUE MUESTRAN TU ESTILO.
                  </h2>
                  <div className="h-0.5 w-32 bg-cyan-600 my-3 ml-auto"></div>
                  <p className="text-sm 2xl:text-lg text-cyan-200">
                    Podés elegir entre una amplia gama de colores vivos para tu personalidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;