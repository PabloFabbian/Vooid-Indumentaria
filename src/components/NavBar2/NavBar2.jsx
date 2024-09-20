import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

const DropdownMenus = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const shopTimerRef = useRef(null);
  const aboutTimerRef = useRef(null);
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
    <NavigationMenu.Root>
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] p-1 shadow-blackA4">
        <NavigationMenu.Item
          className="mr-0 transition duration-200"
          style={{ listStyleType: "none" }}
        >
          <NavigationMenu.Trigger
            className="group flex select-none items-center justify-between px-3 py-2 leading-none text-white outline-none hover:text-teal-500"
            onPointerEnter={handleShopPointerEnter}
            onPointerLeave={handleShopPointerLeave}
          >
            <span className="text-xl sm:text-base">Shop</span>{" "}
            <CaretDownIcon
              className={classNames(
                "duration-[250] relative text-white transition-transform ease-in group-hover:rotate-180 group-hover:text-teal-500",
                {
                  "group-hover:rotate-180 group-hover:text-teal-500":
                    !isShopOpen,
                },
              )}
              aria-hidden
            />
          </NavigationMenu.Trigger>
          {isShopOpen && (
            <NavigationMenu.Content
              className="absolute left-0 top-0 z-10 mt-12 w-full animate-enterFromLeft rounded-lg border border-gray-500 bg-black sm:w-auto"
              onPointerEnter={handleShopPointerEnter}
              onPointerLeave={handleShopPointerLeave}
            >
              <ul className="m-0 grid list-none gap-x-[10px] bg-black p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid duration-300 hover:scale-105 hover:cursor-pointer">
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b from-black to-indigo9 p-[25px] text-white no-underline outline-none focus:shadow-violet7"
                    onClick={() => navigate("/vooidshop")}
                  >
                    <img src="./Logo3.webp" className="w-70" alt="Logo" />
                    <div className="mb-[7px] mt-4 text-center text-[18px] font-medium leading-[1.2] dark:text-white">
                      Vooid Shop
                    </div>
                    <p className="text-center text-[14px] leading-[1.3] text-mauve4 dark:text-gray-400">
                      Estilo único para cada ocasión.
                    </p>
                  </a>
                </li>
                <ListItem href="#" title="Como Comprar">
                  Explora el cómo realizar compras rápidas y seguras aquí.
                </ListItem>
                <ListItem href="#" title="Guía de Talles">
                  Conoce nuestra guía para encontrar tus medidas ideales.
                </ListItem>
                <ListItem href="#" title="Preguntas Frecuentes">
                  Encuentra soluciones a preguntas frecuentes sobre nuestros
                  productos.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          )}
        </NavigationMenu.Item>

        <NavigationMenu.Item
          className="mr-4 transition duration-200"
          style={{ listStyleType: "none" }}
        >
          <NavigationMenu.Trigger
            className="group flex select-none items-center justify-between px-3 py-2 leading-none text-white outline-none hover:text-teal-500"
            onPointerEnter={handleAboutPointerEnter}
            onPointerLeave={handleAboutPointerLeave}
          >
            <span className="text-xl sm:text-base">Quiénes Somos</span>{" "}
            <CaretDownIcon
              className={classNames(
                "duration-[250] relative text-white transition-transform ease-in group-hover:rotate-180 group-hover:text-teal-500",
                {
                  "group-hover:rotate-180 group-hover:text-teal-500":
                    !isAboutOpen,
                },
              )}
              aria-hidden
            />
          </NavigationMenu.Trigger>
          {isAboutOpen && (
            <NavigationMenu.Content
              className="absolute left-0 top-0 z-10 mt-12 w-full animate-enterFromRight rounded-lg border border-gray-500 bg-black hover:cursor-pointer hover:opacity-90 sm:w-auto"
              onPointerEnter={handleAboutPointerEnter}
              onPointerLeave={handleAboutPointerLeave}
            >
              <div className="m-0 grid p-6 text-white sm:w-[500px]">
                <h1 className="mb-2 text-xl font-semibold text-teal-500">
                  Acerca de Nosotros
                </h1>
                <p className="text-pretty text-sm">
                  Somos una empresa dedicada a ofrecerte productos de calidad y
                  un servicio excepcional. Conoce más sobre nuestra historia y
                  valores.
                </p>
              </div>
            </NavigationMenu.Content>
          )}
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="duration-[250] top-full z-[1] flex h-[10px] animate-fadeIn items-end justify-center overflow-hidden transition">
          <div className="relative top-[25%] h-[12px] w-[12px] rotate-[45deg] rounded-tl-[2px] border border-white bg-black" />
        </NavigationMenu.Indicator>
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
            "block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-neutral-800 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className,
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
  ),
);

export default DropdownMenus;
