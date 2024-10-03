import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div className="relative">
            {/* Master Files toggle button */}
            <button
                onClick={toggleDropdown}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center w-full text-left"
            >
                <FontAwesomeIcon icon={faTableList} className="mr-2" />

                <span>Master Files</span>

                {/* Dropdown arrow */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-auto h-5 w-5 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
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
                        href={route("main.loans")}
                        className={`block max-w-48 px-4 py-2 rounded ${
                            route().current() === "main.loans"
                                ? "bg-blue-600 text-white" // Active style (highlighted)
                                : "text-gray-300 hover:bg-blue-600 hover:text-white" // Default style
                        }`}
                    >
                        Loans
                    </Link>
                    <Link
                        href={route("main.list.mems")}
                        className={`block max-w-48 px-4 py-2 rounded ${
                            route().current() === "main.mems"
                                ? "bg-blue-600 text-white" // Active style (highlighted)
                                : "text-gray-300 hover:bg-blue-600 hover:text-white" // Default style
                        }`}
                    >
                        Memberships
                    </Link>
                    <Link
                        href={route("main.list.user")}
                        className={`block max-w-48 px-4 py-2 rounded ${
                            route().current() === "main.list.user"
                                ? "bg-blue-600 text-white" // Active style (highlighted)
                                : "text-gray-300 hover:bg-blue-600 hover:text-white" // Default style
                        }`}
                    >
                        Users
                    </Link>
                    <Link
                        href={route("main.list.roles")}
                        className={`block max-w-48 px-4 py-2 rounded ${
                            route().current() === "main.list.roles"
                                ? "bg-blue-600 text-white" // Active style (highlighted)
                                : "text-gray-300 hover:bg-blue-600 hover:text-white" // Default style
                        }`}
                    >
                        Roles
                    </Link>
                </div>
            )}
        </div>
    );
}
