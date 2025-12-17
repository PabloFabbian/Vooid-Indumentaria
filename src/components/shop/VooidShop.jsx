import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import SortBy from './Filters/SortBy';
import FilterSection from './Filters/FilterSection';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';
import CartNotification from './CartNotification';
import ModalContainer from '../common/Modal/ModalContainer';
import { productsData } from '../../data/products';
import { formatPrice } from '../../utils/formatters';

const VooidShop = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);
  const [modalExiting, setModalExiting] = useState(false);
  const [cartEntering, setCartEntering] = useState(false);

  const { addToCart: addToCartContext, getCartItemsCount } = useCart();

  const applyFilters = (filters) => {
    const { availability, priceRange, colors } = filters;
    const filtered = productsData.filter((product) => {
      const availabilityMatch = availability.length === 0 || availability.includes(product.availability);
      const priceMatch = (!priceRange.min || product.price >= priceRange.min) && (!priceRange.max || product.price <= priceRange.max);
      const colorMatch = colors.length === 0 || colors.includes(product.color);
      return availabilityMatch && priceMatch && colorMatch;
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
    // Añadir al contexto del carrito
    addToCartContext(product);

    // Configurar animación
    setLastAddedProduct(product);
    setModalExiting(true);

    // Iniciar transición
    setTimeout(() => {
      setCartEntering(true);
    }, 200);

    // Mostrar notificación después de la animación
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

  return (
    <section className="relative bg-gradient-to-b from-[#2e1c2b] to-[#110911]">
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

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border border-white/30 px-5 py-2 text-white transition hover:bg-white/5 hover:border-white/40 font-medium text-sm">
            <span>Filters & Sorting</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 rtl:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-6 lg:block">
            <SortBy onSortChange={handleSortChange} />
            <FilterSection onFilterChange={applyFilters} />
          </div>

          <div className="lg:col-span-3">
            <ProductGrid
              products={filteredProducts}
              onProductClick={handleProductClick}
              formatPrice={formatPrice}
            />
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
    </section>
  );
};

export default VooidShop;