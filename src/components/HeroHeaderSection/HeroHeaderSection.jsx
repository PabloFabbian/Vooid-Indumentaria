import React, { useEffect, useRef } from 'react';
import 'animate.css';
import '../../index.css';

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
        <div className="bg-cover bg-center h-screen flex items-center filter relative mt-16" style={{backgroundImage: "url('Plainbg.webp')"}}>
            <div ref={parallaxRef} className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center md:full -mt-60 lg:-mt-[9rem] md:ml-0 md:items-center md:text-center mb-16 md:mb-0">
                    <h1 className="animate__animated animate__fadeInDown shadow-behind font-bold text-zinc-200 leading-tight lg:text-6xl text-4xl text-pretty pt-0 mt-10">
                        Descubrí los Últimos Diseños de
                        <br />Indumentaria Oversize
                    </h1>
                    <p className="animate__animated animate__fadeIn animate__delay-1s mt-4 lg:mt-80 mb-16 leading-relaxed text-zinc-200 text-pretty">
                        Compra ahora diseños exclusivos o personalizados que te hagan único.
                        <br className="hidden lg:inline-block"/>Calidad, color y estampados que se ajustan a tu estilo.
                    </p>
                    <div className="animate__animated animate__fadeIn animate__delay-2s flex justify-center lg:-mt-6 mt-64">
                        <button className="inline-flex text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out">Shop</button>
                        <button className="inline-flex text-indigo-500 bg-white hover:bg-slate-300 border-0 py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out ml-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHeaderSection;