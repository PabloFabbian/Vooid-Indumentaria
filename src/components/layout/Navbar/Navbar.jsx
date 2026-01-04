import "./Navbar.css";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavigationMenu } from "../../ui/navigation-menu";
import ShopDropdown from "./ShopDropdown";
import AboutDropdown from "./AboutDropdown";
import CartIcon from "../../cart/CartIcon";
import CartDrawer from "../../cart/CartDrawer";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen((prevState) => !prevState);

  // Función Maestra de Scroll Animado
  const animateScroll = (targetY) => {
    const startPosition = window.pageYOffset;
    const distance = targetY - startPosition;
    let startTime = null;
    const duration = 900; // Duración en ms

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const executeScroll = () => {
      if (targetId === "top") {
        animateScroll(0);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
          animateScroll(targetY);
        }
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(executeScroll, 500); // Delay para esperar carga de Home
    } else {
      executeScroll();
    }
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-black py-1 text-gray-400">
        <div className="relative flex md:h-12 2xl:h-16 items-center justify-between px-3 py-3">

          <div className="relative hidden w-full items-center md:flex">
            <div className="absolute left-0 flex items-center">
              <NavigationMenu className="ml-6 flex md:text-[0.8rem] 2xl:text-base items-center text-stone-100 md:space-x-6 2xl:space-x-10">
                {/* Botón Inicio con Scroll */}
                <button
                  onClick={(e) => handleNavClick(e, "top")}
                  className="mr-4 cursor-pointer transition duration-200 hover:text-teal-500 bg-transparent border-none p-0 text-inherit font-inherit"
                >
                  Inicio
                </button>

                {/* Botón Contacto con Scroll */}
                <button
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="cursor-pointer transition duration-200 hover:text-teal-500 bg-transparent border-none p-0 text-inherit font-inherit"
                >
                  Contacto
                </button>

                <AboutDropdown />
              </NavigationMenu>
            </div>

            <div className="absolute inset-x-0 flex items-center justify-center">
              <button
                onClick={(e) => handleNavClick(e, "top")}
                className="flex md:text-[0.8rem] 2xl:text-base items-center font-medium text-stone-100 hover:text-teal-500 transition-colors bg-transparent border-none"
              >
                <h1 className="mr-2 2xl:mr-4">Vooid</h1>
                <img src="/Logo2.webp" className="md:h-10 2xl:h-12" alt="Logo" />
                <h1 className="ml-2 2xl:ml-4">Indum.</h1>
              </button>
            </div>

            <div className="absolute right-0 mr-6 flex items-center space-x-6">
              <ShopDropdown />
              <CartIcon />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex w-full items-center justify-between md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <button onClick={(e) => handleNavClick(e, "top")} className="absolute inset-x-0 flex justify-center bg-transparent border-none">
              <div className="flex items-center">
                <h1 className="mr-3 font-semibold text-gray-200">Vooid</h1>
                <img src="/Logo2.webp" className="h-12" alt="Logo" />
                <h1 className="ml-3 font-semibold text-gray-200">Indum.</h1>
              </div>
            </button>

            <CartIcon />
          </div>

          {/* Menú Mobile Dropdown */}
          <div className={`fixed inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-90 transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`}>
            <button onClick={toggleMobileMenu} className="absolute right-4 top-4 text-white">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center space-y-8 text-stone-100">
              <button onClick={(e) => { handleNavClick(e, "top"); setMobileMenuOpen(false); }} className="text-2xl hover:text-teal-500 bg-transparent">Inicio</button>
              <Link to="/products" className="text-2xl hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>Productos</Link>
              <button onClick={(e) => { handleNavClick(e, "contact"); setMobileMenuOpen(false); }} className="text-2xl hover:text-teal-500 bg-transparent">Contacto</button>
              <AboutDropdown />
              <ShopDropdown />
            </div>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}

export default Navbar;