import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

const ShopDropdown = () => {
    const [isShopOpen, setShopOpen] = useState(false);
    const shopTimerRef = useRef(null);
    const navigate = useNavigate();

    const handleShopPointerEnter = () => {
        clearTimeout(shopTimerRef.current);
        setShopOpen(true);
    };

    const handleShopPointerLeave = () => {
        shopTimerRef.current = setTimeout(() => {
            setShopOpen(false);
        }, 200);
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
                        onPointerEnter={handleShopPointerEnter}
                        onPointerLeave={handleShopPointerLeave}
                    >
                        <span className="md:text-[0.8rem] 2xl:text-base">Shop</span>
                        <motion.div
                            animate={{ rotate: isShopOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown
                                className="relative ml-1 h-3 w-3 text-white transition-colors group-hover:text-teal-500"
                                aria-hidden
                            />
                        </motion.div>
                    </NavigationMenu.Trigger>

                    <AnimatePresence>
                        {isShopOpen && (
                            <NavigationMenu.Content
                                className="absolute md:-left-[22rem] 2xl:-left-[21.5rem] md:top-12 2xl:top-16 w-full rounded-lg bg-[#0a0908] hover:cursor-pointer sm:w-auto"
                                onPointerEnter={handleShopPointerEnter}
                                onPointerLeave={handleShopPointerLeave}
                                asChild
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 200 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="rounded-lg"
                                >
                                    <ul className="m-0 grid list-none gap-x-[10px] bg-[#0a0908] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                                        <li className="row-span-3 grid duration-300 hover:scale-105 hover:cursor-pointer">
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b from-black to-[#2e1c2b] p-[25px] text-white no-underline outline-none transition-shadow focus:shadow-violet7 hover:shadow-lg hover:shadow-pink-400/10"
                                                onClick={() => navigate("/products")}
                                            >
                                                <img
                                                    src="/Logo3.webp"
                                                    className="w-70"
                                                    alt="Vooid Shop Logo"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "https://via.placeholder.com/200x100/1e293b/ffffff?text=VOID";
                                                    }}
                                                />
                                                <div className="mb-[7px] mt-4 text-center text-[18px] font-medium leading-[1.2] dark:text-white">
                                                    Vooid Shop
                                                </div>
                                                <p className="text-center text-[14px] leading-[1.3] text-gray-400">
                                                    Estilo único para cada ocasión.
                                                </p>
                                            </a>
                                        </li>
                                        <ListItem onClick={() => navigate("/info/como-comprar")} title="Como Comprar">
                                            Explora el cómo realizar compras rápidas y seguras aquí.
                                        </ListItem>
                                        <ListItem onClick={() => navigate("/info/guia-talles")} title="Guía de Talles">
                                            Conoce nuestra guía para encontrar tus medidas ideales.
                                        </ListItem>
                                        <ListItem onClick={() => navigate("/info/faq")} title="Preguntas Frecuentes">
                                            Encuentra soluciones a preguntas frecuentes sobre nuestros productos.
                                        </ListItem>
                                    </ul>
                                </motion.div>
                            </NavigationMenu.Content>
                        )}
                    </AnimatePresence>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

const ListItem = React.forwardRef(
    ({ className, children, title, ...props }, forwardedRef) => (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    className={classNames(
                        "block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-neutral-800 hover:shadow-md focus:shadow-[0_0_0_2px] focus:shadow-violet7",
                        className
                    )}
                    {...props}
                    ref={forwardedRef}
                >
                    <div className="mb-[5px] font-medium leading-[1.2] text-teal-500">
                        {title}
                    </div>
                    <p className="leading-[1.4] text-stone-200">{children}</p>
                </a>
            </NavigationMenu.Link>
        </li>
    )
);

export default ShopDropdown;