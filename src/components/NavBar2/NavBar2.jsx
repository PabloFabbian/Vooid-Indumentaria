import React, { useState, useRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';

const DropdownMenus = () => {
    const [isShopOpen, setShopOpen] = useState(false);
    const [isAboutOpen, setAboutOpen] = useState(false);
    const shopTimerRef = useRef(null);
    const aboutTimerRef = useRef(null);

    const handleShopPointerEnter = () => {
        clearTimeout(shopTimerRef.current);
        setShopOpen(true);
    };

    const handleShopPointerLeave = () => {
        shopTimerRef.current = setTimeout(() => {
            setShopOpen(false);
        }, 200);
    };

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
        <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] p-1">
            <NavigationMenu.Item className="mr-0 transition duration-200" style={{ listStyleType: 'none' }}>
                <NavigationMenu.Trigger
                    className="text-white hover:text-teal-500 group flex select-none items-center justify-between px-3 py-2 leading-none outline-none"
                    onPointerEnter={handleShopPointerEnter}
                    onPointerLeave={handleShopPointerLeave}
                >
                    <span>Shop</span>{' '}
                    <CaretDownIcon
                        className={classNames("text-white relative transition-transform duration-[250] ease-in group-hover:rotate-180 group-hover:text-teal-500", {
                            "group-hover:rotate-180 group-hover:text-teal-500": !isShopOpen,
                        })}
                        aria-hidden
                    />
                </NavigationMenu.Trigger>
                {isShopOpen && (
                    <NavigationMenu.Content
                        className="animate-enterFromLeft absolute top-0 left-0 z-10 w-full sm:w-auto bg-black"
                        onPointerEnter={handleShopPointerEnter}
                        onPointerLeave={handleShopPointerLeave}
                    >
                        <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] bg-black">
                            <li className="row-span-3 grid duration-300 hover:scale-105">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-black to-indigo9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none text-white"
                                        href="/"
                                    >
                                        <img src='./Logo3.webp' className='w-70' alt="Logo" />
                                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] dark:text-white text-center">
                                            Vooid Shop  
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3] dark:text-gray-400 text-center">
                                            Estilo único para cada ocasión.
                                        </p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            <ListItem href="#" title="Como Comprar">
                                Explora el cómo realizar compras rápidas y seguras aquí.
                            </ListItem>
                            <ListItem href="#" title="Guía de Talles">
                                Conoce nuestra guía para encontrar tus medidas ideales.
                            </ListItem>
                            <ListItem href="#" title="Preguntas Frecuentes">
                                Encuentra soluciones a preguntas frecuentes sobre nuestros productos.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                )}
            </NavigationMenu.Item>

            <NavigationMenu.Item className="mr-4 transition duration-200" style={{ listStyleType: 'none' }}>
                <NavigationMenu.Trigger
                    className="text-white hover:text-teal-500 group flex select-none items-center justify-between px-3 py-2 leading-none outline-none"
                    onPointerEnter={handleAboutPointerEnter}
                    onPointerLeave={handleAboutPointerLeave}
                >
                    <span>Quiénes Somos</span>{' '}
                    <CaretDownIcon
                        className={classNames("text-white relative transition-transform duration-[250] ease-in group-hover:rotate-180 group-hover:text-teal-500", {
                            "group-hover:rotate-180 group-hover:text-teal-500": !isAboutOpen,
                        })}
                        aria-hidden
                    />
                </NavigationMenu.Trigger>
                {isAboutOpen && (
                    <NavigationMenu.Content
                        className="animate-enterFromRight absolute top-0 left-0 w-full sm:w-auto z-10 bg-black"
                        onPointerEnter={handleAboutPointerEnter}
                        onPointerLeave={handleAboutPointerLeave}
                    >
                        <div className="m-0 grid p-6 sm:w-[500px] text-white">
                            <h1 className="text-xl font-semibold mb-2 text-teal-500">Acerca de Nosotros</h1>
                            <p className="text-sm text-pretty">Somos una empresa dedicada a ofrecerte productos de calidad y un servicio excepcional. Conoce más sobre nuestra historia y valores.</p>
                        </div>
                    </NavigationMenu.Content>
                )}
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="animate-fadeIn top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition duration-[250]">
                <div className="relative top-[25%] h-[12px] w-[12px] rotate-[45deg] rounded-tl-[2px] bg-black border border-white" />
            </NavigationMenu.Indicator>
        </NavigationMenu.List>
    );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a
                className={classNames(
                    'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-neutral-800 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                <div className="text-teal-500 mb-[5px] font-medium leading-[1.2]">{title}</div>
                <p className="text-stone-200 leading-[1.4]">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));

export default DropdownMenus;