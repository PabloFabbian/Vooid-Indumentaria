import { useState } from "react";
import { motion } from "framer-motion";

const FilterOption = ({ label, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="overflow-hidden rounded border bg-slate-300 border-gray-300">
            <div
                className="flex cursor-pointer items-center justify-between gap-2 bg-slate-300 p-4 transition"
                onClick={toggleOpen}
            >
                <span className="text-sm font-medium text-gray-500">{label}</span>
                <span className={`transition ${isOpen ? "rotate-180" : ""}`}>
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
            </div>

            <motion.div
                className="border-t border-gray-200 bg-slate-200"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
            >
                <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700">
                        {options.filter(opt => opt.selected).length} Seleccionados
                    </span>
                    <button
                        type="button"
                        className="text-sm text-gray-900 underline underline-offset-4"
                        onClick={() => onChange([])}
                    >
                        Reset
                    </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                    {options.map((option, index) => (
                        <li key={index}>
                            <label
                                htmlFor={`Filter${option}`}
                                className="inline-flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    id={`Filter${option}`}
                                    className="size-5 rounded border-gray-300"
                                    onChange={() => onChange(option)}
                                />
                                <span className="text-sm font-medium text-gray-700">
                                    {option}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default FilterOption;