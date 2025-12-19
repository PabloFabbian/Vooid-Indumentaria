import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, X, Check } from "lucide-react";

const FilterOption = ({ label, options, onChange, isOpen, onToggle, onClose }) => {
    const selectedCount = options.filter(opt => opt.selected).length;

    const toggleOpen = () => {
        onToggle();
    };

    const handleOptionClick = (option) => {
        const updatedOptions = options.map(opt =>
            opt === option ? { ...opt, selected: !opt.selected } : opt
        );
        onChange(updatedOptions);
    };

    const handleReset = () => {
        const resetOptions = options.map(opt => ({ ...opt, selected: false }));
        onChange(resetOptions);
    };

    // Cerrar el filtro cuando se hace clic fuera (opcional)
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si el filtro está abierto y se hace clic fuera, cerrarlo
            if (isOpen && !event.target.closest('.filter-option-container')) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <motion.div
            className="relative w-full filter-option-container"
            initial={false}
        >
            {/* Botón principal */}
            <motion.button
                onClick={toggleOpen}
                className={`
                    w-full px-4 py-3.5 rounded-lg
                    flex items-center justify-between
                    transition-all duration-300
                    border
                    ${isOpen
                        ? 'border-white/40 bg-white/10'
                        : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                    }
                    backdrop-blur-sm
                    group
                `}
                whileTap={{ scale: 0.98 }}
            >
                <div className="flex items-center gap-3">
                    <span className="text-white font-medium text-sm uppercase tracking-wider">
                        {label}
                    </span>
                    {selectedCount > 0 && (
                        <span className="
                            bg-white text-[#2c1b29] 
                            text-xs font-bold 
                            min-w-6 h-6 
                            rounded-full 
                            flex items-center justify-center
                            px-2
                        ">
                            {selectedCount}
                        </span>
                    )}
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 group-hover:text-white"
                >
                    {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </motion.div>
            </motion.button>

            {/* Panel desplegable */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: {
                        opacity: 1,
                        height: "auto",
                        marginTop: "12px",
                        pointerEvents: "auto"
                    },
                    closed: {
                        opacity: 0,
                        height: 0,
                        marginTop: "0px",
                        pointerEvents: "none"
                    }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`
                    absolute top-full left-0 right-0 z-10
                    bg-gradient-to-b from-[#2c1b29] to-[#1a1018]
                    backdrop-blur-xl
                    border border-white/20
                    rounded-lg
                    overflow-hidden
                    shadow-2xl
                `}
            >
                {/* Header del panel */}
                <div className="p-4 border-b border-white/10">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-white font-medium text-sm">
                                {selectedCount} {selectedCount === 1 ? 'seleccionado' : 'seleccionados'}
                            </span>
                        </div>

                        {selectedCount > 0 && (
                            <button
                                onClick={handleReset}
                                className="
                                    flex items-center gap-1.5
                                    px-3 py-1.5
                                    text-xs text-white/60
                                    hover:text-white
                                    hover:bg-white/10
                                    rounded
                                    transition-colors
                                    uppercase tracking-wider
                                "
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <X className="w-3 h-3" />
                                Limpiar
                            </button>
                        )}
                    </div>

                    {/* Barra de progreso */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-teal-500 to-purple-500"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(selectedCount / options.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </div>
                </div>

                {/* Lista de opciones */}
                <div className="p-2 max-h-64 overflow-y-auto">
                    {options.map((option, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className={`
                                w-full px-4 py-3
                                flex items-center gap-3
                                rounded-md
                                mb-1
                                transition-all duration-200
                                ${option.selected
                                    ? 'bg-gradient-to-r from-white/15 to-white/10 text-white'
                                    : 'hover:bg-white/5 text-white/70'
                                }
                                group
                            `}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: option.selected ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Checkbox personalizado */}
                            <div className={`
                                w-5 h-5 rounded
                                border-2 flex items-center justify-center
                                transition-all duration-200
                                ${option.selected
                                    ? 'border-teal-400 bg-teal-400'
                                    : 'border-white/30 group-hover:border-white/50'
                                }
                            `}>
                                {option.selected && (
                                    <Check className="w-3 h-3 text-[#2c1b29]" strokeWidth={3} />
                                )}
                            </div>

                            {/* Texto de la opción */}
                            <span className={`
                                text-sm font-medium
                                transition-colors
                                ${option.selected ? 'text-white' : 'text-white/80'}
                            `}>
                                {typeof option === 'object' ? option.label || option.name || option.value : option}
                            </span>

                            {/* Indicador de selección */}
                            {option.selected && (
                                <div className="ml-auto">
                                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                                </div>
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Footer del panel */}
                <div className="p-3 border-t border-white/10 bg-white/5">
                    <div className="text-center">
                        <span className="text-white/50 text-xs">
                            Selecciona múltiples opciones
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FilterOption;