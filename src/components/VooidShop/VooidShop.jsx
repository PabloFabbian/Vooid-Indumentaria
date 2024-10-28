import React, { useState } from "react";
import SortBy from './Filters/SortBy';
import FilterSection from './Filters/FilterSection';
import ProductModal from './ProductModal'; // Importar el componente del modal

const products = [
  { id: 1, image: "./Design4.png", type: "Black", name: "SEOUL T-Shirt", price: 16000, availability: "En Stock", color: "Negro" },
  { id: 2, image: "./Design5.png", type: "Hoodie", name: "Vivre La Vie Graphic T-Shirt", price: 21150, availability: "Pre Order", color: "Blanco" },
  { id: 3, image: "./Design6.png", type: "White", name: "Plain Beige T-Shirt", price: 12000, availability: "Sin Stock", color: "Crema" },
  { id: 4, image: "./Design7.png", type: "Black", name: "Realistic T-Shirt", price: 18400, availability: "En Stock", color: "Crema" },
  { id: 5, image: "./Design8.png", type: "Red", name: "BONELESS T-Shirt", price: 16000, availability: "Pre Order", color: "Verde" },
  { id: 6, image: "./Design9.png", type: "Cream", name: "Brooklyn T-Shirt", price: 21150, availability: "En Stock", color: "Beige" },
  { id: 7, image: "./Design1.png", type: "Black", name: "Solstice Hoodie", price: 12000, availability: "Sin Stock", color: "Gris" },
  { id: 8, image: "./Design2.png", type: "Drip", name: "Neptune Hoodie", price: 18400, availability: "En Stock", color: "Negro" },
  { id: 9, image: "./Design3.png", type: "Hoodie", name: "Ferrari Hoodie", price: 16500, availability: "Pre Order", color: "Blanco" },
];

function VooidShop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const applyFilters = (filters) => {
    const { availability, priceRange, colors } = filters;
    const filtered = products.filter((product) => {
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

  // Función para abrir el modal con el producto seleccionado
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gradient-to-b from-[#4A354A] to-[#110911]">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 w-[90%] mx-auto">
        <header className="flex items-center justify-between">
          <div className="flex items-center w-full">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white md:text-3xl 2xl:text-4xl">
                Colección de productos
              </h2>
              <p className="md:text-sm 2xl:text-base mt-4 max-w-md text-gray-400 text-pretty">
                Variedad, calidad y estilo se fusionan en nuestra incomparable colección
                de productos, adaptada para satisfacer cada necesidad y elevar cada
                experiencia.
              </p>
            </div>
            <div className="flex-grow border-b border-white -mt-[4.2rem] 2xl:-mt-20 -ml-44 2xl:-ml-64"></div>
          </div>
        </header>

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium text-white">Filters & Sorting</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 rtl:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <SortBy onSortChange={handleSortChange} />
            <FilterSection onFilterChange={applyFilters} />
          </div>

          <div className="lg:col-span-3">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <li key={product.id} className="relative group">
                  <div
                    className="block overflow-hidden cursor-pointer"
                    onClick={() => handleProductClick(product)} // Evita el uso de href="#" para no ir al inicio
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 2xl:h-[450px] bg-gradient-to-t from-[#2F2B36] to-slate-300 ${
                        product.availability === "Sin Stock" ? "brightness-75	filter blur-[3px]" : ""
                      }`}
                    />
                    {product.availability === "Sin Stock" && (
                      <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center text-white font-semibold text-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -mt-12">
                        Agotado
                      </div>
                    )}
                    <div className="relative bg-transparent pt-3">
                      <h3 className="md:text-xs 2xl:text-lg text-white text-pretty">{product.name}</h3>
                      <p className="md:text-xs 2xl:text-base my-1 font-semibold text-white">
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