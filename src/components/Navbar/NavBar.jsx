import './NavBar.css';
import React from 'react';
import NavigationMenuDemo from '../../components/NavBar2/NavBar2';
import { NavigationMenu } from "@/components/ui/navigation-menu";

function NavBar() {
    return (
        <header className="text-gray-400 bg-black body-font static">
            <div className="flex flex-wrap ml-0 mx-auto p-3 items-center justify-center md:justify-between md:px-28">
                <NavigationMenu className="order-3 lg:order-1 lg:w-1/4 flex md:justify-left items-center text-s md:ml-auto text-stone-100 mb-3 lg:ml-0 md:mb-0">
                    <a className="mr-6 cursor-pointer hover:text-teal-500 transition duration-200">Inicio</a>
                    <NavigationMenuDemo />
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Quiénes somos</a>
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Contacto</a>
                </NavigationMenu>

                <a className="order-1 lg:order-2 w-1/2 lg:w-1/4 inline-flex justify-center items-center font-medium text-stone-100 mb-2 md:mb-0 ml-24 md:ml-0 ">
                    <h1 className="mr-4">Vooid</h1>
                    <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                    <h1 className="ml-4">Indum.</h1>
                </a>
                
                <div className="order-2 lg:order-3 w-1/6 lg:w-1/4 inline-flex justify-end items-center ml-3 sm:ml-8 lg:ml-0 mr-4 sm:mr-0 sm:mt-0 mb-2 lg:mb-0 md:ml-0">
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