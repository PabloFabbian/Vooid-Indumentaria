import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterOption from "./FilterOption";
import { DollarSign, Tag, Palette, Zap, RefreshCw, Grid } from "lucide-react";

const FilterSection = ({ onFilterChange, filteredProducts = 0, allProducts = [] }) => {
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [allSelected, setAllSelected] = useState(false);

    // Nuevo estado para controlar qué filtro está abierto
    const [openFilter, setOpenFilter] = useState(null); // null, 'categories', 'availability', 'colors'

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
    const categoryOptions = uniqueCategories.map(category => ({
        label: category,
        value: category,
        selected: selectedCategories.includes(category)
    }));

    // Si no hay categorías en los productos, usar opciones por defecto
    const defaultCategories = ["Remera", "Hoodie", "Short", "Gorro", "Accesorio"];
    const categoryOptionsToUse = categoryOptions.length > 0
        ? categoryOptions
        : defaultCategories.map(cat => ({
            label: cat,
            value: cat,
            selected: selectedCategories.includes(cat)
        }));

    // Funciones para manejar apertura/cierre de filtros
    const handleFilterToggle = (filterName) => {
        // Si el mismo filtro se hace clic, lo cerramos
        if (openFilter === filterName) {
            setOpenFilter(null);
        } else {
            // Si es un filtro diferente, abrimos este y cerramos cualquier otro
            setOpenFilter(filterName);
        }
    };

    const handleFilterClose = () => {
        setOpenFilter(null);
    };

    const handleAvailabilityChange = (options) => {
        const newAvailability = options.filter(opt => opt.selected).map(opt => opt.value);
        setSelectedAvailability(newAvailability);
        onFilterChange({
            availability: newAvailability,
            colors: selectedColors,
            categories: selectedCategories
        });
    };

    const handleColorChange = (options) => {
        const newColors = options.filter(opt => opt.selected).map(opt => opt.value);
        setSelectedColors(newColors);
        onFilterChange({
            availability: selectedAvailability,
            colors: newColors,
            categories: selectedCategories
        });
    };

    const handleCategoryChange = (options) => {
        const newCategories = options.filter(opt => opt.selected).map(opt => opt.value);
        setSelectedCategories(newCategories);
        onFilterChange({
            availability: selectedAvailability,
            colors: selectedColors,
            categories: newCategories
        });
    };

    const handleResetAll = () => {
        setSelectedAvailability([]);
        setSelectedColors([]);
        setSelectedCategories([]);
        setOpenFilter(null); // También cerramos todos los filtros abiertos
        onFilterChange({
            availability: [],
            colors: [],
            categories: []
        });
    };

    // Calcular si todos los filtros están limpios
    useEffect(() => {
        const hasFilters =
            selectedAvailability.length > 0 ||
            selectedColors.length > 0 ||
            selectedCategories.length > 0;
        setAllSelected(hasFilters);
    }, [selectedAvailability, selectedColors, selectedCategories]);

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

                {totalSelected > 0 && (
                    <motion.button
                        onClick={handleResetAll}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 hover:border-red-500/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <RefreshCw className="w-3.5 h-3.5 text-red-400 group-hover:rotate-180 transition-transform duration-500" />
                        <span className="text-xs text-red-300 font-medium uppercase tracking-wider">
                            Limpiar Todo
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
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse" />
                            <span className="text-sm text-white/80">
                                <span className="font-bold text-white">{totalSelected}</span> filtro{totalSelected !== 1 ? 's' : ''} activo{totalSelected !== 1 ? 's' : ''}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            {selectedCategories.length > 0 && (
                                <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    {selectedCategories.length} categoría{selectedCategories.length !== 1 ? 's' : ''}
                                </span>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}

            <div className="space-y-4">
                {/* Filtro de Categorías */}
                <div className="relative">
                    <FilterOption
                        label="Tipo de Producto"
                        options={categoryOptionsToUse}
                        onChange={handleCategoryChange}
                        isOpen={openFilter === 'categories'}
                        onToggle={() => handleFilterToggle('categories')}
                        onClose={handleFilterClose}
                    />
                </div>

                {/* Filtro de Disponibilidad */}
                <div className="relative">
                    <FilterOption
                        label="Disponibilidad"
                        options={availabilityOptions}
                        onChange={handleAvailabilityChange}
                        isOpen={openFilter === 'availability'}
                        onToggle={() => handleFilterToggle('availability')}
                        onClose={handleFilterClose}
                    />
                </div>

                {/* Filtro de Colores */}
                <div className="relative">
                    <FilterOption
                        label="Paleta de Colores"
                        options={colorOptions}
                        onChange={handleColorChange}
                        isOpen={openFilter === 'colors'}
                        onToggle={() => handleFilterToggle('colors')}
                        onClose={handleFilterClose}
                    />
                </div>
            </div>

            {/* Footer del panel de filtros */}
            <motion.div
                className="pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="text-center">
                    <p className="text-xs text-white/50 mb-2">
                        Los filtros se aplican en tiempo real
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-green-400">
                            {filteredProducts} productos disponibles
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FilterSection;