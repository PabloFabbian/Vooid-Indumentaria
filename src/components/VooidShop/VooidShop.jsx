import React, { useState } from "react";
import SortBy from './SortBy';
import FilterSection from './FilterSection';

const products = [
  { id: 1, image: "./Design4.png", type: "Black", name: "SEOUL T-Shirt", price: 16000, availability: "In Stock", color: "Black" },
  { id: 2, image: "./Design5.png", type: "Hoodie", name: "Vivre La Vie Graphic T-Shirt", price: 21150, availability: "Pre Order", color: "White" },
  { id: 3, image: "./Design6.png", type: "White", name: "Plain Beige T-Shirt", price: 12000, availability: "Out of Stock", color: "Cream" },
  { id: 4, image: "./Design7.png", type: "Black", name: "Realistic T-Shirt", price: 18400, availability: "In Stock", color: "Cream" },
  { id: 5, image: "./Design8.png", type: "Red", name: "BONELESS T-Shirt", price: 16000, availability: "Pre Order", color: "Green" },
  { id: 6, image: "./Design9.png", type: "Cream", name: "Brooklyn T-Shirt", price: 21150, availability: "In Stock", color: "Beige" },
  { id: 7, image: "./Design1.png", type: "Black", name: "Solstice Hoodie", price: 12000, availability: "Out of Stock", color: "Gray" },
  { id: 8, image: "./Design2.png", type: "Drip", name: "Neptune Hoodie", price: 18400, availability: "In Stock", color: "Black" },
  { id: 9, image: "./Design3.png", type: "Hoodie", name: "Ferrari Hoodie", price: 16500, availability: "Pre Order", color: "White" },
];

function VooidShop() {
  // Estados para manejar los filtros
  const [filteredProducts, setFilteredProducts] = useState(products);

  const applyFilters = (filters) => {
    const { availability, priceRange, colors } = filters;
  
    const filtered = products.filter((product) => {
      // Filtrado por disponibilidad
      const availabilityMatch = availability.length === 0 || availability.includes(product.availability);
  
      // Filtrado por rango de precio
      const priceMatch = (!priceRange.min || product.price >= priceRange.min) &&
                          (!priceRange.max || product.price <= priceRange.max);
  
      // Filtrado por color
      const colorMatch = colors.length === 0 || colors.includes(product.color);
  
      return availabilityMatch && priceMatch && colorMatch;
    });
  
    setFilteredProducts(filtered);
  };  

  const formatPrice = (price) => {
    return `$${price.toLocaleString("es-AR")}`; // Formato de precio en AR
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <SortBy />
            <FilterSection onFilterChange={applyFilters} />
          </div>

          <div className="lg:col-span-3">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <li key={product.id}>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src={product.image}
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 2xl:h-[450px] bg-gradient-to-t from-[#2F2B36] to-slate-300"
                    />
                    <div className="relative bg-transparent pt-3">
                      <h3 className="md:text-xs 2xl:text-base text-white group-hover:underline group-hover:underline-offset-4">
                        {product.name}
                      </h3>
                      <p className="mt-0 2xl:mt-2">
                        <span className="sr-only">Regular Price</span>
                        <span className="tracking-wider text-white text-xs 2xl:text-base">
                          {formatPrice(product.price)}
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VooidShop;