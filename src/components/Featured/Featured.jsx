import React from "react";

function Featured() {
  return (
    <section className="bg-gradient-to-b from-[#A79EAC] to-[#4A354A] body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 pb-0 pt-12  md:py-12">
        <div className="mb-14 flex w-full flex-col text-center">
          <p className="mb-2 text-lg text-cyan-200">Único</p>
          <h1 className="mb-4 text-6xl font-bold tracking-wide text-cyan-50">
            — Calidad y Variedad en la —<br /> Indumentaria Vooid
          </h1>
          <p className="mx-auto text-base leading-relaxed text-cyan-200">
            En Vooid, ofrecemos una amplia gama de remeras de alta calidad en
            varios colores e impresiones.
            <br />
            Encuentra el diseño perfecto para tu estilo único.
          </p>
        </div>
        <div className="flex gap-20">
            {/* Mitad izquierda: Video */}
            <a 
                href="https://www.instagram.com/vooid.indumentaria/?hl=es-la" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-1/2 flex items-center justify-center relative group hover:cursor-pointer"
            >
                <video
                    className="w-full h-auto border border-white"
                    loop autoPlay muted
                    src="/clothing-video.mp4"
                >
                    Tu navegador no soporta la etiqueta de video.
                </video>
                <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 m-0.5 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-lg font-bold">Seguinos en Instagram</span>
                    <svg className="h-6 w-6 ml-1 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#FFFFFF" strokeWidth="2"></path>
                            <circle cx="16.5" cy="7.5" r="1.5" fill="#FFFFFF"></circle>
                            <circle cx="12" cy="12" r="3" stroke="#FFFFFF" strokeWidth="2"></circle>
                        </g>
                    </svg>
                </div>
            </a>

            {/* Mitad derecha: Secciones */}
            <div className="w-1/2 flex flex-col">
              {/* Primera sección */}
              <div className="flex-1 border-b border-cyan-200">
                <h2 className="text-[2.6rem] text-cyan-50 font-bold leading-[3.2rem]">Materiales de calidad y confort duradero.</h2>
                <p className="text-lg mt-2 text-cyan-200">Nuestras remeras son cómodas y duraderas, hechas con materiales premium.</p>
              </div>
                
              {/* Segunda sección */}
              <div className="flex-1 flex flex-col justify-end items-end">
                <h2 className="text-[2.6rem] text-cyan-50 font-bold text-right leading-[3.2rem]">Los tonos brillantes que muestran tu estilo.</h2>
                <p className="text-lg mt-2 text-cyan-200">Podes elegir entre una amplia gama de colores vivos para tu personalidad.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
