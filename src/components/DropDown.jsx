import React, { useState } from 'react';

export const DropDown = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="text-black border border-gray-600  focus:outline-none font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center "
                type="button"
            >
                {title}{' '}
                <svg
                    className={`w-2.5 h-2.5 ms-3 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {isOpen && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 absolute top-10 right-0">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
