import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenus from '../NavBar2/NavBar2';
import { NavigationMenu } from "@/components/ui/navigation-menu";

function NavBar() {
    return (
        <header className="text-gray-400 bg-black body-font fixed top-0 w-full z-10">
            <div className="flex flex-wrap ml-0 mx-auto p-3 items-center justify-center md:justify-between md:px-10 relative">
                <NavigationMenu className="order-3 lg:order-1 lg:w-1/4 flex md:justify-left items-center text-s md:ml-auto text-stone-100 mb-3 lg:ml-0 md:mb-0">
                    <Link to="/" className="mr-6 cursor-pointer hover:text-teal-500 transition duration-200">Inicio</Link>
                    <DropdownMenus />
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Contacto</a>
                </NavigationMenu>

                <div className="lg:hidden absolute inset-0 flex justify-end items-center pr-3">
                    <div className="flex items-center">
                        <a className="mr-4">Vooid</a>
                        <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                        <a className="ml-4 flex items-center">
                            <img
                                src="/Cart.png"
                                className="cursor-pointer h-7 mt-0 xl:mt-0 lg:mt-0 md:mt-0 transition duration-300"
                                alt="Carrito"
                            />
                            <span id="carrito-count" className='bg-stone-800 text-teal-500 md:mt-0 ml-2 mr-0'>0</span>
                        </a>
                    </div>
                </div>
                
                <div className="absolute inset-0 flex justify-center items-center">
                    <a className="flex justify-center items-center font-medium text-stone-100">
                        <h1 className="mr-4">Vooid</h1>
                        <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                        <h1 className="ml-4">Indum.</h1>
                    </a>
                </div>
                
                <div className="order-2 lg:order-3 w-1/6 lg:w-1/4 inline-flex justify-end items-center ml-3 sm:ml-8 lg:ml-0 mr-4 sm:mr-0 sm:mt-0 mb-2 lg:mb-0 md:ml-0 hidden lg:inline-flex">
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