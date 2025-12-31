import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

const SortBy = ({ onSortChange }) => {
    const [sortOption, setSortOption] = useState('default');

    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
        onSortChange(selectedOption);
    };

    return (
        <div className="space-y-3">
            <label htmlFor="SortBy" className="flex items-center gap-2 text-sm font-medium text-white uppercase tracking-wider">
                <ArrowUpDown className="w-4 h-4 text-white/60" />
                Ordenar por
            </label>
            <div className="relative">
                <select
                    id="SortBy"
                    value={sortOption}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:border-white/40 transition-all appearance-none rounded-lg cursor-pointer hover:bg-white/10"
                >
                    <option value="default" disabled className="bg-[#2c1b29] text-white">
                        Seleccionar orden...
                    </option>
                    <option value="nameAsc" className="bg-[#2c1b29] text-white">Nombre (A-Z)</option>
                    <option value="nameDesc" className="bg-[#2c1b29] text-white">Nombre (Z-A)</option>
                    <option value="priceAsc" className="bg-[#2c1b29] text-white">Precio (Menor a Mayor)</option>
                    <option value="priceDesc" className="bg-[#2c1b29] text-white">Precio (Mayor a Menor)</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SortBy;