import React, { useState, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

const AboutDropdown = () => {
    const [isAboutOpen, setAboutOpen] = useState(false);
    const aboutTimerRef = useRef(null);

    const handleAboutPointerEnter = () => {
        clearTimeout(aboutTimerRef.current);
        setAboutOpen(true);
    };

    const handleAboutPointerLeave = () => {
        aboutTimerRef.current = setTimeout(() => {
            setAboutOpen(false);
        }, 200);
    };

    return (
        <NavigationMenu.Item
            className="mr-4 transition duration-200"
            style={{ listStyleType: "none" }}
        >
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
                        className="absolute md:-left-7 2xl:-left-7 md:-top-4 2xl:top-0 p-1 w-full mt-16 rounded-lg bg-black hover:cursor-pointer sm:w-auto"
                        onPointerEnter={handleAboutPointerEnter}
                        onPointerLeave={handleAboutPointerLeave}
                        asChild
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -200 }} // Desde la izquierda
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -200 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="m-0 grid p-6 sm:w-[500px]">
                                <h1 className="mb-2 text-xl font-semibold text-teal-500">
                                    Acerca de Nosotros
                                </h1>
                                <p className="text-pretty text-sm text-white">
                                    Somos una empresa dedicada a ofrecerte productos de calidad y
                                    un servicio excepcional. Conoce más sobre nuestra historia y
                                    valores.
                                </p>
                            </div>
                        </motion.div>
                    </NavigationMenu.Content>
                )}
            </AnimatePresence>
        </NavigationMenu.Item>
    );
};

export default AboutDropdown;