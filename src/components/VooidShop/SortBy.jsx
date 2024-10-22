import React, { useState } from 'react';

const SortBy = () => {
    const [sortOption, setSortOption] = useState("default");

    const handleChange = (event) => {
        setSortOption(event.target.value);
        // Aquí puedes agregar la lógica para manejar el cambio de orden
    };

    return (
        <div className="mb-4">
        <p htmlFor="SortBy" className="mb-2 block text-xs font-medium text-white">
            Sort By
        </p>
        <select
            id="SortBy"
            value={sortOption}
            onChange={handleChange}
            className="select select-primary w-1/2 max-w-xs"
        >
            <option value="default" disabled className="text-center">
                Sort By
            </option>
            <option value="nameDesc">Name, DESC</option>
            <option value="nameAsc">Name, ASC</option>
            <option value="priceDesc">Price, DESC</option>
            <option value="priceAsc">Price, ASC</option>
        </select>
        </div>
    );
};

export default SortBy;
