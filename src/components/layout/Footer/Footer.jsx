import React from "react";

function MyFooter() {
  return (
    <footer className="body-font bg-gradient-to-b from-[#110911] to-black border-t border-white/10">
      <div className="container mx-auto px-5 py-12 w-[90%]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo y marca */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl"></div>
              <img
                src="/Logo2.webp"
                className="relative h-14 w-14 border border-white/20 p-1"
                alt="Void Indum."
              />
            </div>
            <div>
              <span className="text-lg font-bold text-white uppercase tracking-tight">
                Vooid Indumentaria
              </span>
              <p className="text-xs text-gray-500 mt-1">Calidad y estilo único</p>
            </div>
          </div>

          {/* Links de navegación */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Remeras</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Hoodies</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Accesorios</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Envíos</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Seguinos</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                <svg fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Vooid Indumentaria. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;