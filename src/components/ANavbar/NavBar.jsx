import React from 'react';

function NavBar() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font static">
            <div className="ml-0 md:ml-20 mx-auto flex flex-wrap p-4 items-center justify-center">
                <nav className="flex-nowrap lg:w-2/5 items-center text-s md:ml-auto text-stone-200">
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Inicio</a>
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Shop</a>
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Cómo comprar</a>
                    <a className="mr-0 cursor-pointer hover:text-teal-500 transition duration-200">Quiénes somos</a>
                </nav>
                <a className="flex justify-center items-center order-first lg:order-none lg:w-1/5 title-font font-medium text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                    <h1 className="mr-4">Vooid</h1>
                    <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                    <h1 className="ml-4">Indum.</h1>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <img src="/Cart.png" className="cursor-pointer h-7 mr-0 md:mr-20 mt-1 xl:mt-0 lg:mt-0 md:mt-0 transition duration-300" alt="Carrito" />
                </div>
            </div>
        </header>
    );
}

export default NavBar;