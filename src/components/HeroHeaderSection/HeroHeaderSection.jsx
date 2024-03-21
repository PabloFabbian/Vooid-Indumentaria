import React, { useEffect, useRef } from 'react';
import 'animate.css';

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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-cover bg-center h-screen flex items-center filter relative opacity-90" style={{backgroundImage: "url('Plainbg2.webp')"}}>
            <div ref={parallaxRef} className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center md:full mt-30 lg:-mt-20 md:ml-0 md:items-center md:text-center mb-16 md:mb-0">
                    <h1 className="animate__animated animate__fadeInDown shadow-behind mb-4 font-bold text-zinc-100 leading-tight text-6xl mb-20">
                        Descubrí los Últimos Diseños de
                        <br />Indumentaria Oversize
                    </h1>
                    <p className="animate__animated animate__fadeIn animate__delay-1s mt-36 mb-8 leading-relaxed text-white text-pretty">
                        Compra ahora diseños exclusivos o personalizados que te hagan único.
                        <br className="hidden lg:inline-block"/>Calidad, color y estampados que se ajustan a tu estilo.
                    </p>
                    <div className="animate__animated animate__fadeIn animate__delay-2s flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out">Shop</button>
                        <button className="inline-flex text-indigo-500 bg-white hover:bg-slate-300 border-0 py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out ml-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHeaderSection;