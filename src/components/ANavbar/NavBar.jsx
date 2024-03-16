import React from 'react'

function NavBar() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="ml-10 mx-auto flex flex-wrap p-4 items-center justify-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-s md:ml-auto ">
                    <a className="mr-8 cursor-pointer hover:text-white">Inicio</a>
                    <a className="mr-8 cursor-pointer hover:text-white">Shop</a>
                    <a className="mr-8 cursor-pointer hover:text-white">Como comprar</a>
                    <a className="mr-8 cursor-pointer hover:text-white">Quienes Somos</a>
                </nav>
                <a className="flex justify-center items-center order-first lg:order-none lg:w-1/5 title-font font-medium text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                    <h1 className="mr-4">Vooid</h1>
                    <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                    <h1 className="ml-4">Indum.</h1>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <img src="/Cart.png" className="h-7 mr-10 mt-4 xl:mt-0 lg:mt-0 md:mt-0" alt="Carrito" />
                </div>
            </div>
        </header>
    )
}

export default NavBar