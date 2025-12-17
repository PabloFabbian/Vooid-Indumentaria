import React, { useState } from "react";
import SortBy from './Filters/SortBy';
import FilterSection from './Filters/FilterSection';
import ProductModal from './ProductModal';
import { productsData } from './productsData';

function VooidShop() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const formatPrice = (price) => `$${price.toLocaleString("es-AR")}`;

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#2e1c2b] to-[#110911]">
      <div className="relative mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 w-[90%]">
        {/* Header limpio */}
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
            <ul className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <li key={product.id} className="relative group">
                  <div
                    className="block overflow-hidden cursor-pointer relative"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="relative border border-white/10 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 2xl:h-[450px] bg-gradient-to-br from-[#1E1D22] to-[#3E3A35] ${product.availability === "Sin Stock" ? "brightness-75 filter blur-[3px]" : ""
                          }`}
                      />

                      {/* Badge de disponibilidad */}
                      {product.availability === "Pre Order" && (
                        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 border border-white/30 uppercase tracking-wide">
                          Pre Order
                        </div>
                      )}

                      {product.availability === "En Stock" && (
                        <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full"></div>
                      )}

                      {product.availability === "Sin Stock" && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white font-semibold text-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                          Agotado
                        </div>
                      )}
                    </div>

                    {/* Info del producto */}
                    <div className="relative bg-transparent pt-3">
                      <h3 className="text-sm 2xl:text-base text-white font-medium mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm 2xl:text-lg font-semibold text-white">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default VooidShop;