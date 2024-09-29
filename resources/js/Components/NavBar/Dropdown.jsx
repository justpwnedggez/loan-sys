import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Dropdown({ auth }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
                {auth.user.first_name} {/* Display username */}
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link
                        href={route('main.profile.edit')}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Profile
                    </Link>
                    <Link
                        href="/logout"
                        method="post" // Ensure it sends a POST request for logout
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
}
