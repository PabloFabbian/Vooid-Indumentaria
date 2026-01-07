import React from "react";

function Featured() {
  return (
    <section className="bg-gradient-to-b from-[#050404] via-[#1a0f1a] to-[#2e1c2b] body-font text-gray-400">
      <div className="container mx-auto px-5 pb-0 md:pb-12 2xl:py-12 w-[90%]">
        <div className="mb-14 flex w-full flex-col text-center">
          <div className="inline-block md:mb-6 2xl:mb-4">
            <div className="px-4 py-1 bg-white/5 backdrop-blur-sm border border-white/20">
              <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                Experiencia Vooid
              </span>
            </div>
          </div>
          <h1 className="mb-2 md:text-3xl 2xl:text-4xl font-bold tracking-tight text-white">
            CALIDAD Y VARIEDAD
            <br />
            <span className="text-white/80">EN LA INDUMENTARIA VOOID</span>
          </h1>
          <div className="w-20 h-0.5 bg-white/40 mx-auto my-4"></div>
          <p className="mx-auto md:text-sm 2xl:text-base leading-relaxed text-white/60">
            Diseño urbano premium con materiales de alta calidad y confort duradero
          </p>
        </div>

        <div className="flex gap-8 md:gap-20">
          {/* Mitad izquierda: Video */}
          <div className="w-5/12 relative group">
            <a
              href="https://www.instagram.com/vooid.indumentaria/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden rounded-lg border border-white/20">
                <video
                  className="w-full h-auto"
                  loop
                  autoPlay
                  muted
                  src="/clothing-video.mp4"
                >
                  Tu navegador no soporta la etiqueta de video.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="px-6 py-3 mb-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg">
                    <span className="text-sm 2xl:text-lg font-bold text-white tracking-wide">SEGUINOS EN INSTAGRAM</span>
                  </div>
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="currentColor" strokeWidth="2"></path>
                    <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"></circle>
                    <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="2"></rect>
                  </svg>
                </div>
              </div>
            </a>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4"></div>
          </div>

          {/* Mitad derecha: Secciones */}
          <div className="w-1/2 flex flex-col justify-center">
            {/* Primera sección */}
            <div className="flex-1 pb-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                <div>
                  <h2 className="md:text-2xl 2xl:text-[2rem] text-white font-bold tracking-tight leading-relaxed">
                    MATERIALES PREMIUM Y CONFORT DURADERO
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 my-3"></div>
                  <p className="text-sm 2xl:text-base text-white/70">
                    Confección meticulosa con tejidos de alta calidad para máxima durabilidad
                  </p>
                </div>
              </div>
            </div>

            {/* Segunda sección */}
            <div className="flex-1">
              <div className="flex flex-col items-end">
                <div className="w-4/5 text-right">
                  <h2 className="md:text-2xl 2xl:text-[2rem] text-white font-bold tracking-tight leading-relaxed">
                    COLORES Y DISEÑOS EXCLUSIVOS
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 my-3 ml-auto"></div>
                  <p className="text-sm 2xl:text-base text-white/70">
                    Paleta única que expresa personalidad y estilo urbano contemporáneo
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