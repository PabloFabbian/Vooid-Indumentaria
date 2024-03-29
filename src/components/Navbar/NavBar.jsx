import './NavBar.css';

function NavBar() {
    return (
        <header className="text-gray-400 bg-black body-font static">
            <div className="ml-0 md:ml-10 mx-auto flex flex-wrap p-3 items-center justify-center">
                <nav className="flex-nowrap lg:w-2/5 items-center text-s md:ml-auto text-stone-100">
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Inicio</a>
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Shop</a>
                    <a className="mr-8 cursor-pointer hover:text-teal-500 transition duration-200">Cómo comprar</a>
                    <a className="mr-0 cursor-pointer hover:text-teal-500 transition duration-200">Quiénes somos</a>
                </nav>
                <a className="flex justify-center items-center order-first lg:order-none lg:w-1/5 title-font font-medium text-stone-100 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <h1 className="mr-4">Vooid</h1>
                    <img src="/Logo2.webp" className="h-12" alt="Void Indum." />
                    <h1 className="ml-4">Indum.</h1>
                </a>
                <div className="lg:w-2/5 inline-flex justify-center lg:justify-end ml-3 sm:ml-8 lg:ml-0 mr-4 sm:mr-0 mt-6 sm:mt-0">
                    <img
                        src="/Cart.png"
                        className="cursor-pointer h-7 mt-0 xl:mt-0 lg:mt-0 md:mt-0 transition duration-300"
                        alt="Carrito"
                    />
                    <span id="carrito-count" className='bg-stone-800 text-teal-500 md:mt-0 ml-2 mr-0 md:mr-10'>0</span>
                </div>
            </div>
        </header>
    );
}

export default NavBar;