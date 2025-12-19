import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import SortBy from './Filters/SortBy';
import FilterSection from './Filters/FilterSection';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import ProductModal from './ProductModal';
import CartNotification from './CartNotification';
import ModalContainer from '../common/Modal/ModalContainer';
import { productsData } from '../../data/products';
import { formatPrice } from '../../utils/formatters';
import { Grid3x3, List, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const VooidShop = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);
  const [modalExiting, setModalExiting] = useState(false);
  const [cartEntering, setCartEntering] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const { addToCart: addToCartContext, getCartItemsCount } = useCart();

  const applyFilters = (filters) => {
    const { availability, priceRange, colors, categories } = filters;
    const filtered = productsData.filter((product) => {
      const availabilityMatch = availability.length === 0 || availability.includes(product.availability);
      const priceMatch = (!priceRange.min || product.price >= priceRange.min) && (!priceRange.max || product.price <= priceRange.max);
      const colorMatch = colors.length === 0 || colors.includes(product.color);
      const categoryMatch = categories.length === 0 || categories.includes(product.category);

      return availabilityMatch && priceMatch && colorMatch && categoryMatch;
    });
    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortOption) => {
    const sortedProducts = [...filteredProducts];
    switch (sortOption) {
      case 'nameAsc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'priceAsc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setModalExiting(false);
    setCartEntering(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setShowCartNotification(false);
    setModalExiting(false);
    setCartEntering(false);
  };

  const handleAddToCart = (product) => {
    addToCartContext(product);
    setLastAddedProduct(product);
    setModalExiting(true);

    setTimeout(() => {
      setCartEntering(true);
    }, 200);

    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedProduct(null);
      setShowCartNotification(true);
      setModalExiting(false);
    }, 400);
  };

  const handleBuyNow = () => {
    console.log("Redirigiendo a checkout con:", lastAddedProduct);
    setShowCartNotification(false);
    setCartEntering(false);
  };

  const handleContinueShopping = () => {
    setShowCartNotification(false);
    setCartEntering(false);
  };

  const handleCloseCartNotification = () => {
    setShowCartNotification(false);
    setCartEntering(false);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <section className="relative min-h-screen">
      {/* Fondo con textura */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f1a] via-[#2e1c2b] to-[#110911]"></div>

        {/* Patrón geométrico sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        ></div>

        {/* Efecto de mármol/dinámico */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '600px'
            }}
          ></div>
        </div>

        {/* Efecto de partículas animadas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
                animation: `float ${Math.random() * 20 + 10}s infinite alternate ease-in-out`
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        <div className="relative mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 w-[90%]">
          <header className="mb-12">
            <div className="inline-block mb-4">
              <div className="px-4 py-1 bg-white/5 backdrop-blur-sm border border-white/20">
                <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                  Colección
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-tight mb-4">
              Productos Vooid
            </h2>

            <div className="w-20 h-0.5 bg-white/40 mb-6"></div>

            <p className="max-w-2xl text-sm md:text-base text-gray-400">
              Variedad, calidad y estilo se fusionan en nuestra colección de productos,
              adaptada para satisfacer cada necesidad y elevar cada experiencia.
            </p>
          </header>

          <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            {/* COLUMNA IZQUIERDA: Filtros y Ordenar por */}
            <div className="hidden lg:block space-y-6">
              {/* "Ordenar por" ahora en la columna izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <SortBy onSortChange={handleSortChange} />
              </motion.div>

              {/* Filtros */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FilterSection
                  onFilterChange={applyFilters}
                  filteredProducts={filteredProducts.length}
                  allProducts={productsData}
                />
              </motion.div>
            </div>

            {/* COLUMNA DERECHA: Productos y controles */}
            <div className="lg:col-span-3">
              {/* Barra superior sólida solo con controles de vista */}
              <motion.div
                className="sticky top-4 z-20 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-2 shadow-2xl shadow-black/30">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Lado izquierdo: Información y botón móvil */}
                    <div className="flex items-center gap-4">
                      {/* Botón de filtros móvil */}
                      <button
                        onClick={toggleMobileFilters}
                        className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 hover:border-purple-500/50 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span className="text-sm font-medium">Filtros & Ordenar</span>
                      </button>

                      {/* Contador de productos (visible en desktop) */}
                      <div className="hidden sm:block pl-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse"></div>
                          <span className="text-sm text-white">
                            <span className="font-bold">{filteredProducts.length}</span> productos encontrados
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lado derecho: Solo controles de vista */}
                    <div className="flex items-center gap-4">
                      {/* Toggle de vista */}
                      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-1">
                        <motion.button
                          onClick={() => handleViewModeChange('grid')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${viewMode === 'grid' ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Grid3x3 className="w-5 h-5" />
                          <span className="text-sm font-medium hidden sm:inline">Grilla</span>
                        </motion.button>

                        <div className="w-px h-6 bg-white/20"></div>

                        <motion.button
                          onClick={() => handleViewModeChange('list')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${viewMode === 'list' ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-white border border-teal-500/30' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <List className="w-5 h-5" />
                          <span className="text-sm font-medium hidden sm:inline">Lista</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Información móvil */}
                  <div className="sm:hidden mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white">
                        <span className="font-bold">{filteredProducts.length}</span> productos
                      </div>
                      <div className="text-xs text-white/40">
                        {viewMode === 'grid' ? 'Grilla' : 'Lista'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Panel de filtros móviles (condicional) */}
              {showMobileFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden mb-6"
                >
                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Filtros y Ordenar</h3>
                      <button
                        onClick={toggleMobileFilters}
                        className="text-white/60 hover:text-white"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* "Ordenar por" en móvil */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-white mb-3">Ordenar por</h4>
                      <SortBy onSortChange={handleSortChange} />
                    </div>

                    {/* Filtros */}
                    <FilterSection
                      onFilterChange={applyFilters}
                      filteredProducts={filteredProducts.length}
                      allProducts={productsData}
                    />
                  </div>
                </motion.div>
              )}

              {/* Contenido principal (Grid o List) */}
              <div className="mt-4">
                {viewMode === 'grid' ? (
                  <ProductGrid
                    products={filteredProducts}
                    onProductClick={handleProductClick}
                    formatPrice={formatPrice}
                  />
                ) : (
                  <ProductList
                    products={filteredProducts}
                    onProductClick={handleProductClick}
                    formatPrice={formatPrice}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de producto */}
      {isModalOpen && (
        <ModalContainer onClose={handleCloseModal}>
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
            onAddToCart={handleAddToCart}
            isExiting={modalExiting}
          />
        </ModalContainer>
      )}

      {/* Notificación de carrito */}
      {showCartNotification && (
        <CartNotification
          product={lastAddedProduct}
          onBuyNow={handleBuyNow}
          onContinueShopping={handleContinueShopping}
          onClose={handleCloseCartNotification}
          formatPrice={formatPrice}
          cartItemsCount={getCartItemsCount()}
        />
      )}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
            opacity: 0.3;
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default VooidShop;