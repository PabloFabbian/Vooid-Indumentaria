import './NavBar.css';
import React from 'react';
import NavigationMenuDemo from '../../components/NavBar2/NavBar2';
import { NavigationMenu } from "@/components/ui/navigation-menu";

function NavBar() {
    return (
        <header className="text-gray-400 bg-black body-font static">
            <div className="flex flex-wrap ml-0 mx-auto p-3 items-center justify-center md:px-10">
                <NavigationMenu className="flex lg:order-1 lg:w-2/5 items-center text-s md:ml-auto text-stone-100 mb-3 lg:ml-0 md:mb-0 order-3 md:justify-left">
                    <a className="mr-6 cursor-pointer hover:text-teal-500 transition duration-200">Inicio</a>
                    <NavigationMenuDemo />
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Cómo comprar</a>
                    <a className="cursor-pointer hover:text-teal-500 transition duration-200">Quiénes somos</a>
                </NavigationMenu>

                <a className="flex justify-center lg:order-2 items-center lg:w-1/5 title-font font-medium text-stone-100 lg:items-center md:justify-center mb-2 md:mb-0 ml-24 md:ml-0 order-1">
                    <h1 className="mr-4">Vooid</h1>
                    <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                    <h1 className="ml-4">Indum.</h1>
                </a>
                
                <div className="lg:w-2/5 inline-flex justify-center lg:order-3 md:justify-end ml-3 sm:ml-8 lg:ml-0 mr-4 sm:mr-0 sm:mt-0 mb-2 md:ml-0 order-2 justify-right">
                    <img
                        src="/Cart.png"
                        className="cursor-pointer h-7 mt-0 xl:mt-0 lg:mt-0 md:mt-0 transition duration-300"
                        alt="Carrito"
                    />
                    <span id="carrito-count" className='bg-stone-800 text-teal-500 md:mt-0 ml-2 mr-0'>0</span>
                </div>
            </div>
        </header>
    );
}

export default NavBar;