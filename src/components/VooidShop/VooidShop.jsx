import React from 'react'

const products = [
    { id: 1, image: './Design1.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'Black', name:'Vooid Logo T-Shirt', price: '$16.000' },
    { id: 2, image: './Design2.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'Hoodie', name:'Vooid Graphic T-Shirt', price: '$21.150' },
    { id: 3, image: './Design3.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'White', name:'Vooid Pattern T-Shirt', price: '$12.000' },
    { id: 4, image: './Design2.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'Black', name:'The 400 Blows', price: '$18.400' },
    { id: 5, image: './Design3.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'Red', name:'The Catalyzer', price: '$16.000' },
    { id: 6, image: './Design1.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'Cream', name:'Shooting Stars', price: '$21.150' },
    { id: 7, image: './Design1.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'Black', name:'Neptune', price: '$12.000' },
    { id: 8, image: './Design1.webp', image2: 'https://dummyimage.com/380x600/264653/fff', type:'Drip', name:'The 400 Blows', price: '$18.400' },
    { id: 9, name: 'Basic Tee', price: '$16.500', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' }
];

function VooidShop() {
    return (
        <section className='bg-slate-900'>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className='flex justify-between items-center'>
                    <div>
                        <h2 className="text-xl font-bold text-white sm:text-4xl">Colección de productos</h2>
                        <p className="mt-4 max-w-md text-gray-400">
                            Variedad, calidad y estilo se fusionan en nuestra incomparable colección de productos,
                            adaptada para satisfacer cada necesidad y elevar cada experiencia.
                        </p>
                    </div>
                    <div className=''>
                        <img src='Logo3.webp' className='w-40' />
                    </div>
                </header>

                <div className="mt-8 block lg:hidden">
                    <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span className="text-sm text-white font-medium"> Filters & Sorting </span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 rtl:rotate-180"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    <div className="hidden space-y-4 lg:block">
                        <div className="mb-4">
                            <p htmlFor="SortBy" className="block text-xs font-medium text-white mb-2">Sort By</p>
                            <select id="SortBy" className="select select-primary w-1/2 max-w-xs">
                                <option disabled selected className='text-center'>Sort By</option>
                                <option>Name, DESC</option>
                                <option>Name, ASC</option>
                                <option>Price, DESC</option>
                                <option>Price, ASC</option>
                            </select>
                        </div>
                        

                        <div>
                            <p className="block text-xs font-medium text-white">Filters</p>

                            <div className="mt-1 space-y-2">
                                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 bg-slate-300 transition">
                                        <span className="text-sm text-gray-500 font-medium"> Availability </span>
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
                                            <span className="text-sm text-gray-700"> 0 Selected </span>
                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterInStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPreOrder"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>

                                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 bg-slate-300 transition">
                                        <span className="text-sm font-medium text-gray-500"> Price </span>
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
                                            <span className="text-sm text-gray-700"> The highest price is $20.000 </span>
                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <div className="border-t border-gray-200 p-4">
                                            <div className="flex justify-between gap-4">
                                                <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceFrom"
                                                        placeholder="From"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-slate-300 pl-2"
                                                    />
                                                </label>

                                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceTo"
                                                        placeholder="To"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-slate-300 pl-2"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 bg-slate-300 transition">
                                        <span className="text-sm font-medium text-gray-500"> Colors </span>
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
                                            <span className="text-sm text-gray-700"> 0 Selected </span>
                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterRed"
                                                        className="size-5 rounded border-gray-300 bg-yellow-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Red </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterBlue"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Blue </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterGreen"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Green </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOrange"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Orange </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPurple"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Purple </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterTeal"
                                                        className="size-5 rounded border-gray-300"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700"> Teal </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3">
                            {products.map(product => (
                            <li key={product.id}>
                                <a href="#" className="group block overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />
                                    <div className="relative bg-transparent pt-3">
                                        <h3 className="text-xs text-white group-hover:underline group-hover:underline-offset-4">{product.name}</h3>
                                        <p className="mt-2">
                                        <span className="sr-only">Regular Price</span>
                                        <span className="tracking-wider text-white">{product.price}</span>
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
    )
}

export default VooidShop