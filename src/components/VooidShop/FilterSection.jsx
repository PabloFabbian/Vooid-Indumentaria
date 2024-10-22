import { useState } from "react"
import FilterOption from "./FilterOption"; 

const FilterSection = ({ onFilterChange }) => {
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [selectedColors, setSelectedColors] = useState([]);

    const handleAvailabilityChange = (option) => {
        const newAvailability = selectedAvailability.includes(option)
            ? selectedAvailability.filter(item => item !== option)
            : [...selectedAvailability, option];

        setSelectedAvailability(newAvailability);
        onFilterChange({
            availability: newAvailability,
            priceRange,
            colors: selectedColors
        });
    };

    const handleColorChange = (option) => {
        const newColors = selectedColors.includes(option)
            ? selectedColors.filter(color => color !== option)
            : [...selectedColors, option];

        setSelectedColors(newColors);
        onFilterChange({
            availability: selectedAvailability,
            priceRange,
            colors: newColors
        });
    };

    const handlePriceChange = (min, max) => {
        setPriceRange({ min, max });
        onFilterChange({
            availability: selectedAvailability,
            priceRange: { min, max },
            colors: selectedColors
        });
    };

    return (
        <div>
            <p className="block text-xs font-medium text-white">Filters</p>

            <div className="mt-1 space-y-2">
                <FilterOption
                    label="Availability"
                    options={["In Stock", "Pre Order", "Out of Stock"]}
                    onChange={handleAvailabilityChange}
                />

                <FilterOption
                    label="Colors"
                    options={["Black", "White", "Cream", "Green", "Beige", "Gray"]}
                    onChange={handleColorChange}
                />

                {/* Filtro de Precio */}
                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 bg-slate-300 p-4 transition">
                        <span className="text-sm font-medium text-gray-500">Price</span>
                        <span className="transition group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="black"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-slate-200">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700">The highest price is $21.150</span>
                            <button
                                type="button"
                                className="text-sm text-gray-900 underline underline-offset-4"
                                onClick={() => handlePriceChange('', '')}
                            >
                                Reset
                            </button>
                        </header>

                        <div className="border-t border-gray-200 pt-1 p-4">
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="w-full rounded-md border-gray-300 p-2 text-sm"
                                    value={priceRange.min}
                                    onChange={(e) => handlePriceChange(e.target.value, priceRange.max)}
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="w-full rounded-md border-gray-300 p-2 text-sm"
                                    value={priceRange.max}
                                    onChange={(e) => handlePriceChange(priceRange.min, e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default FilterSection;