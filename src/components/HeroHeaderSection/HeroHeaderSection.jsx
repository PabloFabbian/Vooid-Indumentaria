import React, { useEffect, useRef } from "react";
import "animate.css";
import "../../index.css";

const HeroHeaderSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const parallaxSpeed = 0.1; // Ajusta la velocidad del efecto parallax según prefieras
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${yPos * parallaxSpeed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative mt-16 flex h-screen items-center bg-cover bg-center filter"
      style={{ backgroundImage: "url('Plainbg.webp')" }}
    >
      <div ref={parallaxRef} className="container mx-auto px-4">
        <div className="md:full -mt-60 mb-16 flex flex-col items-center text-center md:mb-0 md:ml-0 md:items-center md:text-center lg:-mt-[9rem]">
          <h1 className="animate__animated animate__fadeInDown shadow-behind mt-10 text-pretty pt-0 text-4xl font-bold leading-tight text-zinc-200 lg:text-6xl">
            Descubrí los Últimos Diseños de
            <br />
            Indumentaria Oversize
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s mb-16 mt-4 text-pretty leading-relaxed text-zinc-200 lg:mt-80">
            Compra ahora diseños exclusivos o personalizados que te hagan único.
            <br className="hidden lg:inline-block" />
            Calidad, color y estampados que se ajustan a tu estilo.
          </p>
          <div className="animate__animated animate__fadeIn animate__delay-2s mt-64 flex justify-center lg:-mt-6">
            <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white transition duration-300 ease-in-out hover:bg-indigo-600 focus:outline-none">
              Shop
            </button>
            <button className="ml-4 inline-flex rounded border-0 bg-white px-6 py-2 text-lg text-indigo-500 transition duration-300 ease-in-out hover:bg-slate-300 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeaderSection;
