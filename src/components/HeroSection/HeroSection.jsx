import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../../index.css";

const HeroHeaderSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const parallaxSpeed = 0.12;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${yPos * parallaxSpeed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInDelayedVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
  };

  const fadeInButtonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } }
  };

  return (
    <div className="relative mt-16 flex h-screen items-center filter">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover opacity-85"
      >
        <source src="./snow-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 drop-shadow-2xl">
          {/* Título con animación de entrada */}
          <motion.h1
            className="text-pretty text-3xl font-bold leading-tight text-[#EFE9F3] sm:text-4xl lg:text-6xl"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            Descubrí los Últimos Diseños de
            <br />
            Indumentaria Oversize
          </motion.h1>

          {/* Imagen de logo */}
          <motion.img
            src="/Vooid-logo.png"
            ref={parallaxRef}
            alt="Vooid Logo"
            className="my-8 h-48 w-auto sm:h-64 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Párrafo con animación */}
          <motion.p
            className="leading-8 text-pretty text-[#EFE9F3] text-lg font-semibold mb-12 mt-4 drop-shadow-2xl sm:text-xl"
            initial="hidden"
            animate="visible"
            variants={fadeInDelayedVariant}
          >
            Compra ahora diseños exclusivos o personalizados que te hagan único.
            <br className="hidden lg:inline-block" />
            Calidad, color y estampados que se ajustan a tu estilo.
          </motion.p>

          {/* Botones con animación */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row sm:justify-center lg:-mt-6"
            initial="hidden"
            animate="visible"
            variants={fadeInButtonVariant}
          >
            <button className="inline-flex items-center bg-transparent rounded-xl border-[1.75px] text-lg font-semibold text-[#EFE9F3] transition duration-300 ease-in-out px-6 py-2 drop-shadow-2xl hover:scale-110 mb-4 sm:mb-0 sm:mr-4">
              Shop&nbsp;
              <svg
                className="w-6 h-6"
                fill="currentColor"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 432.695 432.695"
                stroke="currentColor"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M384.297,83.285c-0.172-4.014-3.476-7.179-7.493-7.179h-62.747V60.543c0-33.383-27.159-60.542-60.542-60.542c-12.119,0-23.408,3.593-32.884,9.749C211.152,3.593,199.862,0,187.742,0c-16.164,0-31.366,6.3-42.802,17.735c-11.439,11.428-17.74,26.63-17.74,42.807v15.563H55.89c-4.018,0-7.321,3.166-7.493,7.179l-14.618,341.59c-0.087,2.043,0.663,4.033,2.078,5.509c1.414,1.476,3.37,2.311,5.415,2.311h74.319c0.005,0,0.01,0.001,0.014,0.001h275.817c2.045,0,4.001-0.835,5.415-2.311c1.415-1.477,2.165-3.467,2.078-5.51L384.297,83.285z M253.515,15.002c25.111,0,45.541,20.43,45.541,45.541v15.561h-50.771V60.542c0-15.555-5.901-29.755-15.576-40.489C238.95,16.833,246.021,15.002,253.515,15.002z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button className="inline-flex bg-transparent rounded-xl border-[1.75px] text-lg font-semibold text-[#EFE9F3] transition duration-300 ease-in-out px-6 py-2 drop-shadow-2xl hover:scale-110">
              Conocer <span className="text-2xl font-bold -mt-[0.205rem]">&nbsp;+</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeaderSection;