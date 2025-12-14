import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import ShopDropdown from "./ShopDropdown"
import AboutDropdown from "./AboutDropdown"

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="body-font fixed top-0 z-10 w-full bg-black py-2 text-gray-400">
      <div className="relative flex md:h-10 2xl:h-16 items-center justify-between px-3 py-3">
        {/* Desktop Navigation */}
        <div className="relative hidden w-full items-center md:flex">
          <div className="absolute left-0 flex items-center">
            <NavigationMenu className="ml-6 flex md:text-sm 2xl:text-base items-center text-stone-100 space-x-10">
              <Link
                to="/"
                className="mr-4 cursor-pointer transition duration-200 hover:text-teal-500"
              >
                Inicio
              </Link>
              <Link className="cursor-pointer transition duration-200 hover:text-teal-500">
                Contacto
              </Link>
              <AboutDropdown />
            </NavigationMenu>
          </div>

          <div className="absolute inset-x-0 flex items-center justify-center">
            <a className="flex md:text-sm 2xl:text-base items-center font-medium text-stone-100">
              <h1 className="mr-2 2xl:mr-4">Vooid</h1>
              <img src="/Logo2.webp" className="md:h-10 2xl:h-12" alt="Void Indum." />
              <h1 className="ml-2 2xl:ml-4">Indum.</h1>
            </a>
          </div>

          <div className="absolute right-0 mr-6 flex items-center space-x-6">
            <ShopDropdown />
            <div className="flex flex-nowrap">
              <img
                src="/Cart.png"
                className="h-7 cursor-pointer transition duration-300"
                alt="Carrito"
              />
              <span
                id="carrito-count"
                className="ml-2 bg-stone-800 text-teal-500"
              >
                0
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
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
              className="h-7 cursor-pointer transition duration-300"
              alt="Carrito"
            />
            <span
              id="carrito-count"
              className="ml-2 bg-stone-800 text-teal-500"
            >
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`fixed inset-0 z-20 flex flex-col items-center justify-center overflow-hidden bg-black bg-opacity-80 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute right-4 top-4 z-30 p-2 text-2xl text-white"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <NavigationMenu className="flex flex-col items-center text-stone-100">
            <Link
              to="/"
              className="block px-4 py-2 text-xl hover:text-teal-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              className="block px-4 py-2 text-xl hover:text-teal-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

export default NavBar;