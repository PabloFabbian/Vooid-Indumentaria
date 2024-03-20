import React, { useEffect, useRef } from 'react';

const HeroHeaderSection = () => {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;
            const parallaxSpeed = 0.2; // Ajusta la velocidad del efecto parallax según prefieras
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
        <div className="bg-cover bg-center h-screen flex items-center filter relative" style={{backgroundImage: "url('Voidless-bg.webp')"}}>
            <div ref={parallaxRef} className="container mx-auto px-4 md:ml-0">
                <div className="flex flex-col items-left text-center md:w-4/6 mt-36 lg:-mt-14 lg:ml-24 md:ml-20 md:items-start md:text-left mb-16 md:mb-0">
                    <h1 className="shadow-behind mb-4 font-bold text-zinc-100 leading-tight text-5xl md:text-6xl">
                        Descubrí los Últimos Diseños
                        <br />de Indumentaria
                        <br />Oversize
                    </h1>
                    <p className="mb-8 leading-relaxed text-white text-pretty">
                        Compra ahora diseños exclusivos o personalizados que te hagan único.
                        <br className="hidden lg:inline-block"/>Calidad, color y estampados que se ajustan a tu estilo.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out">Shop</button>
                        <button className="inline-flex text-indigo-500 bg-white hover:bg-slate-300 border-0 py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out ml-4">Learn More</button>
                    </div>
                </div>
                {/* Usa la imagen importada para el efecto parallax */}
                <img src="./public/Void.png" className="absolute -mt-40 top-10 right-0 bottom-0 left-0 m-auto md:-top-20 md:-right-60 md:z-0 w-80 md:w-auto md:h-auto object-cover md:-mr-10 md:-mt-10" alt="Parallax Image" />
            </div>
        </div>
    );
}

export default HeroHeaderSection;