import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AboutDropdown = () => {
    const [isAboutOpen, setAboutOpen] = useState(false);
    const aboutTimerRef = useRef(null);
    const navigate = useNavigate();

    const handleAboutPointerEnter = () => {
        clearTimeout(aboutTimerRef.current);
        setAboutOpen(true);
    };

    const handleAboutPointerLeave = () => {
        aboutTimerRef.current = setTimeout(() => {
            setAboutOpen(false);
        }, 200);
    };

    // ACTUALIZADO: Navegación a URL limpia
    const handleLearnMore = () => {
        navigate("/info/nosotros"); // Cambiado de /shop-info?section=about-us
        setAboutOpen(false);
    };

    return (
        <NavigationMenu.Root>
            <NavigationMenu.List
                className="transition duration-200"
                style={{ listStyleType: "none" }}
            >
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                        className="group flex select-none items-center justify-between px-3 py-2 leading-none text-white outline-none hover:text-teal-500"
                        onPointerEnter={handleAboutPointerEnter}
                        onPointerLeave={handleAboutPointerLeave}
                    >
                        <span className="md:text-[0.8rem] 2xl:text-base">Quiénes Somos</span>
                        <motion.div
                            animate={{ rotate: isAboutOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown
                                className="relative ml-1 h-3 w-3 text-white transition-colors group-hover:text-teal-500"
                                aria-hidden
                            />
                        </motion.div>
                    </NavigationMenu.Trigger>

                    <AnimatePresence>
                        {isAboutOpen && (
                            <NavigationMenu.Content
                                className="absolute md:-left-44 2xl:-left-7 md:top-12 2xl:top-16 w-full rounded-lg bg-black hover:cursor-pointer sm:w-auto"
                                onPointerEnter={handleAboutPointerEnter}
                                onPointerLeave={handleAboutPointerLeave}
                                asChild
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -200 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="rounded-lg"
                                >
                                    <div className="bg-[#0a0908] p-[22px] sm:w-[320px]">
                                        {/* Header */}
                                        <div className="mb-5 pb-4 border-b border-white/10">
                                            <h3 className="text-[18px] font-medium text-white mb-[7px]">
                                                Vooid
                                            </h3>
                                            <p className="text-[14px] leading-[1.3] text-gray-400">
                                                Estilo que define tu identidad
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[14px] leading-[1.5] text-stone-200 mb-4">
                                            Marca de streetwear argentina que combina diseño contemporáneo con calidad premium.
                                        </p>

                                        {/* Quick values */}
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 p-2 rounded-[6px] bg-neutral-900/50 border border-white/5 hover:bg-neutral-800/50 transition-colors duration-200">
                                                <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-[13px] text-stone-200">Calidad premium garantizada</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 rounded-[6px] bg-neutral-900/50 border border-white/5 hover:bg-neutral-800/50 transition-colors duration-200">
                                                <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-[13px] text-stone-200">Diseños exclusivos y únicos</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 rounded-[6px] bg-neutral-900/50 border border-white/5 hover:bg-neutral-800/50 transition-colors duration-200">
                                                <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-[13px] text-stone-200">100% producción local</span>
                                            </div>
                                        </div>

                                        {/* CTA Button - ACTUALIZADO */}
                                        <button
                                            onClick={handleLearnMore}
                                            className="w-full rounded-[6px] bg-gradient-to-b from-black to-[#2e1c2b] p-3 text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-300/10 flex items-center justify-center gap-2 group"
                                        >
                                            <span className="text-[15px] font-medium">Conocer más</span>
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            </NavigationMenu.Content>
                        )}
                    </AnimatePresence>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

export default AboutDropdown;