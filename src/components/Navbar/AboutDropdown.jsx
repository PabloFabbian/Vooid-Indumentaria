import React, { useState, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
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
                <span className="md:text-sm 2xl:text-base">Quiénes Somos</span>{" "}
                <CaretDownIcon
                className={classNames(
                    "duration-200 relative text-white transition-transform ease-in group-hover:rotate-180 group-hover:text-teal-500",
                    {
                    "group-hover:rotate-180 group-hover:text-teal-500": !isAboutOpen,
                    }
                )}
                aria-hidden
                />
            </NavigationMenu.Trigger>
            
            {isAboutOpen && (
                <NavigationMenu.Content
                className="absolute left-0 top-0 p-1 w-full animate-enterFromRight rounded-lg bg-black hover:cursor-pointer sm:w-auto"
                onPointerEnter={handleAboutPointerEnter}
                onPointerLeave={handleAboutPointerLeave}
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
                </NavigationMenu.Content>
            )}
        </NavigationMenu.Item>
    );
};

export default AboutDropdown;