import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            {/* Activities toggle button */}
            <button
                onClick={toggleDropdown}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center w-full text-left"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M20,8H8A3,3,0,0,1,8,2H20a1,1,0,0,1,1,1V7A1,1,0,0,1,20,8ZM8,4A1,1,0,0,0,8,6H19V4Z" />
                    <path d="M19,22H5a3,3,0,0,1,0-6H19a1,1,0,0,1,1,1v4A1,1,0,0,1,19,22ZM5,18a1,1,0,0,0,0,2H18V18Z" />
                    <path d="M17,12H5A3,3,0,0,1,5,6H17a1,1,0,0,1,0,2H5a1,1,0,0,0,0,2H17a1,1,0,0,1,0,2Z" />
                    <path d="M21,18H10a4,4,0,0,1,0-8H21a1,1,0,0,1,0,2H10a2,2,0,0,0,0,4H20V14a1,1,0,0,1,2,0v3A1,1,0,0,1,21,18Z" />
                </svg>
                <span>Activities</span>

                {/* Dropdown arrow */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-auto h-5 w-5 transform transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown options */}
            {isOpen && (
                <div className="mt-4 ml-8 space-y-2 w-full">
                    <Link
                        href={route('main.act_trans')}
                        className="block max-w-48 px-4 py-2 text-gray-300 hover:bg-gray-600 rounded hover:text-white"
                    >
                        Transaction
                    </Link>
                    <Link
                        href={route('main.act_mems')}
                        className="block max-w-48 px-4 py-2 text-gray-300 hover:bg-gray-600 rounded hover:text-white"
                    >
                        Membership
                    </Link>
                </div>
            )}
        </div>
    );
}
