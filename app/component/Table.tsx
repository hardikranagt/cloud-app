import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react'; // Optional: or use inline SVG if not using Lucide

export const Table = () => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const products = [
        { name: 'Apple MacBook Pro 17"', color: 'Silver', status: 'Online', price: '$2999' },
        { name: 'Microsoft Surface Pro', color: 'White', status: 'Offline', price: '$1999' },
        { name: 'Magic Mouse 2', color: 'Black', status: 'Online', price: '$99' },
        { name: 'Apple Watch', color: 'Black', status: 'Online', price: '$199' },
        { name: 'Apple iMac', color: 'Silver', status: 'Online', price: '$2999' },
        { name: 'Apple AirPods', color: 'White', status: 'Offline', price: '$399' },
        { name: 'iPad Pro', color: 'Gold', status: 'Online', price: '$699' },
        { name: 'Magic Keyboard', color: 'Black', status: 'Online', price: '$99' },
        { name: 'Smart Folio iPad Air', color: 'Blue', status: 'Offline', price: '$79' },
        { name: 'AirTag', color: 'Silver', status: 'Offline', price: '$29' },
    ];

    return (
        <>
            <div className="flex items-center justify-between flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                <div></div>
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search-users"
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search for users"
                    />
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Product name</th>
                            <th className="px-6 py-3">Color</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3 text-center">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <React.Fragment key={index}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {product.name}
                                    </th>
                                    <td className="px-6 py-4">{product.color}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className={`h-2.5 w-2.5 rounded-full me-2 ${product.status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                            {product.status}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{product.price}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                                            className="transition-transform duration-300 inline-flex items-center justify-center w-6 h-6"
                                            aria-label="Toggle row details"
                                        >
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${expandedRow === index ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>

                                        </button>
                                    </td>
                                </tr>

                                {expandedRow === index && (
                                    <tr>
                                        <td colSpan={6} className="bg-gray-100 dark:bg-gray-700 px-6 py-4 transition-all duration-300 ease-in-out">


                                            <div className="relative overflow-x-auto">
                                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3">
                                                                Product name
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Color
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Category
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Apple MacBook Pro 17"
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                Silver
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                Laptop
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                $2999
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Microsoft Surface Pro
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                White
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                Laptop PC
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                $1999
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-white dark:bg-gray-800">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Magic Mouse 2
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                Black
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                Accessories
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                $99
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
