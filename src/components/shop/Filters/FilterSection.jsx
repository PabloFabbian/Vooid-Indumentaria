import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FilterOption from "./FilterOption";
import { RefreshCw } from "lucide-react";

const FilterSection = ({ onFilterChange, filteredProducts = 0, allProducts = [] }) => {
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [openFilter, setOpenFilter] = useState(null);

    // Extraer categorías únicas de los productos
    const uniqueCategories = [...new Set(allProducts.map(product => product.category))].filter(Boolean);

    // Preparar opciones para FilterOption
    const availabilityOptions = ["En Stock", "Pre Order", "Sin Stock"].map(option => ({
        label: option,
        value: option,
        selected: selectedAvailability.includes(option)
    }));

    const colorOptions = ["Negro", "Blanco", "Crema", "Verde", "Beige", "Gris"].map(color => ({
        label: color,
        value: color,
        selected: selectedColors.includes(color)
    }));

    // Opciones de categorías
    const defaultCategories = ["Remera", "Hoodie", "Short", "Gorro", "Accesorio"];
    const categoriesToUse = uniqueCategories.length > 0 ? uniqueCategories : defaultCategories;

    const categoryOptions = categoriesToUse.map(category => ({
        label: category,
        value: category,
        selected: selectedCategories.includes(category)
    }));

    // Aplicar filtros cada vez que cambian las selecciones
    useEffect(() => {
        onFilterChange({
            availability: selectedAvailability,
            colors: selectedColors,
            categories: selectedCategories,
            priceRange: { min: null, max: null }
        });
    }, [selectedAvailability, selectedColors, selectedCategories]);

    const handleFilterToggle = (filterName) => {
        setOpenFilter(openFilter === filterName ? null : filterName);
    };

    const handleAvailabilityChange = (options) => {
        const newAvailability = options.filter(opt => opt.selected).map(opt => opt.value);
        setSelectedAvailability(newAvailability);
    };

    const handleColorChange = (options) => {
        const newColors = options.filter(opt => opt.selected).map(opt => opt.value);
        setSelectedColors(newColors);
    };

    const handleCategoryChange = (options) => {
        const newCategories = options.filter(opt => opt.selected).map(opt => opt.value);
        setSelectedCategories(newCategories);
    };

    const handleResetAll = () => {
        setSelectedAvailability([]);
        setSelectedColors([]);
        setSelectedCategories([]);
        setOpenFilter(null);
    };

    const totalSelected = selectedAvailability.length + selectedColors.length + selectedCategories.length;

    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header del panel de filtros */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Filtros</h3>
                </div>

                {totalSelected > 0 && (
                    <motion.button
                        onClick={handleResetAll}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 hover:border-red-500/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <RefreshCw className="w-3.5 h-3.5 text-red-400 group-hover:rotate-180 transition-transform duration-500" />
                        <span className="text-xs text-red-300 font-medium uppercase tracking-wider">
                            Limpiar
                        </span>
                    </motion.button>
                )}
            </div>

            {/* Contador de filtros activos */}
            {totalSelected > 0 && (
                <motion.div
                    className="p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse" />
                            <span className="text-sm text-white/80">
                                <span className="font-bold text-white">{totalSelected}</span> filtro{totalSelected !== 1 ? 's' : ''} activo{totalSelected !== 1 ? 's' : ''}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {selectedCategories.length > 0 && (
                                <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    {selectedCategories.length} categoría{selectedCategories.length !== 1 ? 's' : ''}
                                </span>
                            )}
                            {selectedAvailability.length > 0 && (
                                <span className="px-2 py-1 rounded text-xs bg-teal-500/20 text-teal-300 border border-teal-500/30">
                                    {selectedAvailability.length} disponibilidad
                                </span>
                            )}
                            {selectedColors.length > 0 && (
                                <span className="px-2 py-1 rounded text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                    {selectedColors.length} color{selectedColors.length !== 1 ? 'es' : ''}
                                </span>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}

            <div className="space-y-4">
                {/* Filtro de Categorías */}
                <FilterOption
                    label="Tipo de Producto"
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    isOpen={openFilter === 'categories'}
                    onToggle={() => handleFilterToggle('categories')}
                />

                {/* Filtro de Disponibilidad */}
                <FilterOption
                    label="Disponibilidad"
                    options={availabilityOptions}
                    onChange={handleAvailabilityChange}
                    isOpen={openFilter === 'availability'}
                    onToggle={() => handleFilterToggle('availability')}
                />

                {/* Filtro de Colores */}
                <FilterOption
                    label="Paleta de Colores"
                    options={colorOptions}
                    onChange={handleColorChange}
                    isOpen={openFilter === 'colors'}
                    onToggle={() => handleFilterToggle('colors')}
                />
            </div>

            {/* Footer del panel de filtros */}
            <motion.div
                className="pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="text-center space-y-2">
                    <p className="text-xs text-white/50">
                        Los filtros se aplican automáticamente
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-green-400 font-medium">
                            {filteredProducts} productos encontrados
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FilterSection;