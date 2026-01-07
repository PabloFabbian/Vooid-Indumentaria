import React from "react";
import { motion } from "framer-motion";

const HeroHeaderSection = () => {
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
    <div className="relative flex h-dvh items-center">
      {/* Contenedor del video SEPARADO */}
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover brightness-[0.8]"
        >
          <source src="./snow-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Contenido principal - ESTE ESTÁ ENCIMA DEL OVERLAY */}
      <div className="container mx-auto px-4 md:-mt-0 2xl:-mt-10 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0">
          {/* Título - Más profesional */}
          <motion.h1
            className="text-pretty text-3xl font-bold leading-tight text-white sm:text-4xl 2xl:text-5xl mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <span className="block">COLECCIÓN INVIERNO 2025</span>
            <span className="block text-xl font-light tracking-widest text-white/80 md:mt-1 2xl:mt-4">
              INDUMENTARIA OVERSIZE PREMIUM
            </span>
          </motion.h1>

          {/* Logo centrado sin parallax */}
          <motion.div
            className="relative my-8 group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <img
              src="/Vooid-logo.png"
              alt="Vooid Logo"
              className="relative h-48 w-auto 2xl:h-64 filter brightness-110 contrast-110"
            />
          </motion.div>

          {/* Párrafo - Texto más profesional */}
          <motion.p
            className="leading-6 2xl:leading-8 text-pretty text-white text-md font-medium mb-12 max-w-2xl mx-auto 2xl:text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInDelayedVariant}
          >
            <span className="block md:mb-0 2xl:mb-2">Diseños exclusivos en colaboración con artistas urbanos.</span>
            <span className="block text-white/90">
              Materiales técnicos • Garantía de calidad • Edición limitada
            </span>
          </motion.p>

          {/* Botones - Más elegantes */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row sm:justify-center gap-4 lg:-mt-6"
            initial="hidden"
            animate="visible"
            variants={fadeInButtonVariant}
          >
            {/* Botón Shop - Estilo premium */}
            <motion.button
              className="group inline-flex items-center bg-white text-black rounded-lg border-0 md:text-base 2xl:text-lg font-semibold transition-all duration-300 px-8 py-3 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                VER COLECCIÓN
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 432.695 432.695"
                >
                  <path d="M384.297,83.285c-0.172-4.014-3.476-7.179-7.493-7.179h-62.747V60.543c0-33.383-27.159-60.542-60.542-60.542c-12.119,0-23.408,3.593-32.884,9.749C211.152,3.593,199.862,0,187.742,0c-16.164,0-31.366,6.3-42.802,17.735c-11.439,11.428-17.74,26.63-17.74,42.807v15.563H55.89c-4.018,0-7.321,3.166-7.493,7.179l-14.618,341.59c-0.087,2.043,0.663,4.033,2.078,5.509c1.414,1.476,3.37,2.311,5.415,2.311h74.319c0.005,0,0.01,0.001,0.014,0.001h275.817c2.045,0,4.001-0.835,5.415-2.311c1.415-1.477,2.165-3.467,2.078-5.51L384.297,83.285z" />
                </svg>
              </span>
            </motion.button>

            {/* Botón Conocer - Borde elegante */}
            <motion.button
              className="group inline-flex items-center bg-transparent rounded-lg border border-white/40 md:text-base 2xl:text-lg font-semibold text-white transition-all duration-300 px-8 py-3 hover:bg-white/10 hover:border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                LOOKBOOK
                <span className="text-xl font-bold ml-2 group-hover:rotate-90 transition-transform">+</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Línea decorativa sutil */}
          <motion.div
            className="mt-16 h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>
      </div>

      {/* Marca de agua sutil */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 z-10">
        <span className="text-xs tracking-widest text-white/40 font-light">
          VOOID™ • WINTER 2025
        </span>
      </div>
    </div>
  );
};

export default HeroHeaderSection;