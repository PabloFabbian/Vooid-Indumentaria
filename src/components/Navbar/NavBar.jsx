import './NavBar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenus from '../NavBar2/NavBar2';
import { NavigationMenu } from "@/components/ui/navigation-menu";

function NavBar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    return (
        <header className="text-gray-400 bg-black body-font fixed top-0 w-full z-10 py-2">
            <div className="relative px-3 py-3 flex items-center justify-between h-16">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center w-full relative">
                    <div className="flex items-center space-x-6 absolute left-0">
                        <NavigationMenu className="flex items-center text-stone-100 ml-6">
                            <Link to="/" className="cursor-pointer hover:text-teal-500 transition duration-200 mr-4">Inicio</Link>
                            <DropdownMenus />
                            <Link className="cursor-pointer hover:text-teal-500 transition duration-200">Contacto</Link>
                        </NavigationMenu>
                    </div>

                    <div className="absolute inset-x-0 flex justify-center items-center">
                        <a className="flex items-center font-medium text-stone-100">
                            <h1 className="mr-4">Vooid</h1>
                            <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                            <h1 className="ml-4">Indum.</h1>
                        </a>
                    </div>

                    <div className="flex items-center space-x-2 absolute right-0 mr-6">
                        <img
                            src="/Cart.png"
                            className="cursor-pointer h-7 transition duration-300"
                            alt="Carrito"
                        />
                        <span id="carrito-count" className='bg-stone-800 text-teal-500 ml-2'>0</span>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden flex items-center justify-between w-full">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    <div className="absolute inset-x-0 flex justify-center">
                        <Link to="/" className="flex items-center">
                            <h1 className="mr-3 font-semibold text-gray-200">Vooid</h1>
                            <img src="/Logo2.webp" className="h-12" alt="Logo" />
                            <h1 className="ml-3 font-semibold text-gray-200">Indum.</h1>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img
                            src="/Cart.png"
                            className="cursor-pointer h-7 transition duration-300"
                            alt="Carrito"
                        />
                        <span id="carrito-count" className='bg-stone-800 text-teal-500 ml-2'>0</span>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`fixed inset-0 z-20 bg-black bg-opacity-80 flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
                >
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute top-4 right-4 text-white text-2xl z-30 p-2"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <NavigationMenu className="flex flex-col items-center text-stone-100">
                        <Link to="/" className="block px-4 py-2 text-xl hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
                        <DropdownMenus />
                        <Link className="block px-4 py-2 text-xl hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
}

export default NavBar;