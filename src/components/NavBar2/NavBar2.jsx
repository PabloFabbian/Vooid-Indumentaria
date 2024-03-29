import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';

const NavigationMenuDemo = () => {
    return (
        <NavigationMenu.Item className="mr-4 transition duration-200" style={{ listStyleType: 'none' }}>
            <NavigationMenu.Trigger className="text-white hover:text-teal-500 group flex select-none items-center justify-between px-3 py-2 leading-none outline-none">
                <span>Shop</span>{' '}
                <CaretDownIcon
                    className="text-white relative transition-transform duration-200 ease-in group-hover:rotate-180 group-hover:text-teal-500"
                    aria-hidden
                />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] bg-black">
                    <li className="row-span-3 grid duration-300 hover:scale-105">
                        <NavigationMenu.Link asChild>
                            <a
                                className="focus:shadow-violet7 from-black to-indigo9 flex
                                h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none text-white"
                                href="/"
                            >
                                <img src='./Logo3.webp' className='w-70' />
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
        </NavigationMenu.Item>
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

export default NavigationMenuDemo;