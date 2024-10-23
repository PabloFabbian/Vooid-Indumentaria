import React, { useState } from 'react';

const SortBy = ({ onSortChange }) => {
    const [sortOption, setSortOption] = useState('default');

    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
        onSortChange(selectedOption);
    };

    return (
        <div className="mb-4">
            <label htmlFor="SortBy" className="mb-2 block text-xs font-medium text-white">
                Ordenar por
            </label>
            <select
                id="SortBy"
                value={sortOption}
                onChange={handleChange}
                className="select select-primary w-1/2 max-w-xs"
            >
                <option value="default" disabled>
                Ordenar...
                </option>
                <option value="nameAsc">Nombre, ASC</option>
                <option value="nameDesc">Nombre, DESC</option>
                <option value="priceAsc">Precio, ASC</option>
                <option value="priceDesc">Precio, DESC</option>
            </select>
        </div>
    );
};

export default SortBy;