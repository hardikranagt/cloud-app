import React, { useState } from 'react';

const products = [
    { name: 'Apple MacBook Pro 17"', color: 'Silver', status: 'Online', price: '$2999', category: 'Laptop' },
    { name: 'Microsoft Surface Pro', color: 'White', status: 'Offline', price: '$1999', category: 'Laptop' },
    { name: 'Magic Mouse 2', color: 'Black', status: 'Online', price: '$99', category: 'Accessory' },
    { name: 'Apple Watch', color: 'Black', status: 'Online', price: '$199', category: 'Wearable' },
    { name: 'Apple iMac', color: 'Silver', status: 'Online', price: '$2999', category: 'Desktop' },
    { name: 'Apple AirPods', color: 'White', status: 'Offline', price: '$399', category: 'Accessory' },
    { name: 'iPad Pro', color: 'Gold', status: 'Online', price: '$699', category: 'Tablet' },
    { name: 'Magic Keyboard', color: 'Black', status: 'Online', price: '$99', category: 'Accessory' },
    { name: 'Smart Folio iPad Air', color: 'Blue', status: 'Offline', price: '$79', category: 'Accessory' },
    { name: 'AirTag', color: 'Silver', status: 'Offline', price: '$29', category: 'Tracker' },
];

const StatusIndicator = ({ status }: { status: string }) => (
    <div className="flex items-center">
        <span className={`h-2.5 w-2.5 rounded-full me-2 ${status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`} />
        {status}
    </div>
);

const ExpandButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="transition-transform duration-300 inline-flex items-center justify-center w-6 h-6"
        aria-label="Toggle row details"
    >
        <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    </button>
);

const ExpandedRow = ({ product }: { product: typeof products[number] }) => (
    <tr>
        <td colSpan={6} className="bg-gray-100 dark:bg-gray-700 px-4 sm:px-6 py-4">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-4 py-3">Product name</th>
                            <th className="px-4 py-3">Color</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{product.name}</td>
                            <td className="px-4 py-4">{product.color}</td>
                            <td className="px-4 py-4">{product.category}</td>
                            <td className="px-4 py-4">{product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
);

export const Table = () => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const toggleRow = (index: number) => {
        setExpandedRow(prev => (prev === index ? null : index));
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-4">
            {/* Search bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 bg-white dark:bg-gray-900">
                <div></div>
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative w-full md:w-auto">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search-users"
                        className="block w-full md:w-80 p-2 ps-10 text-sm border rounded-lg text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search for products"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[calc(100vh-215px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 [scrollbar-width:thin]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
                        <tr>
                            <th className="px-4 sm:px-6 py-3">Product name</th>
                            <th className="px-4 sm:px-6 py-3">Color</th>
                            <th className="px-4 sm:px-6 py-3">Status</th>
                            <th className="px-4 sm:px-6 py-3">Price</th>
                            <th className="px-4 sm:px-6 py-3 text-center">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <React.Fragment key={index}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{product.name}</td>
                                    <td className="px-4 sm:px-6 py-4">{product.color}</td>
                                    <td className="px-4 sm:px-6 py-4"><StatusIndicator status={product.status} /></td>
                                    <td className="px-4 sm:px-6 py-4">{product.price}</td>
                                    <td className="px-4 sm:px-6 py-4 text-center">
                                        <ExpandButton isOpen={expandedRow === index} onClick={() => toggleRow(index)} />
                                    </td>
                                </tr>
                                {expandedRow === index && <ExpandedRow product={product} />}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                {/* Sticky Pagination Footer */}
                <div className="sticky bottom-0 bg-white dark:bg-gray-800 z-10">
                    <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-gray-200 dark:border-gray-700" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                        </span>
                        <ul className="inline-flex flex-wrap -space-x-px rtl:space-x-reverse text-sm h-8">
                            {['Previous', '1', '2', '3', '4', '5', 'Next'].map((label, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center px-3 h-8 leading-tight border ${label === 'Previous' ? 'rounded-s-lg' : label === 'Next' ? 'rounded-e-lg' : ''
                                            } ${label === '3'
                                                ? 'text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                                : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                            }`}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
        // </div >
    );
};
