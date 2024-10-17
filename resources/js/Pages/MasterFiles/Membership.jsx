import App from '@/Pages/App';

//Elements
import { Link } from "@inertiajs/react";

const Memberships = ({ children }) => {
    return (
        <div className="max-w-screen-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
    <h1 className="text-2xl font-bold text-center mb-6">
        Member Management
    </h1>

    {/* Tab buttons */}
    <div className="flex justify-center mb-0 space-x-4 border-b border-gray-200">
        <Link
            href={route("main.list.mems")}
            className={`px-4 py-2 rounded-t-lg border-l border-t border-r ${
                route().current() === "main.list.mems"
                    ? "bg-white text-blue-600 border-blue-600" // Active tab style
                    : "bg-gray-200 text-gray-500 hover:bg-white hover:text-blue-600 border-gray-200" // Inactive tab style
            }`}
        >
            Members
        </Link>
    </div>

    {/* Render child content passed down (User List or Add User component) */}
    <div className="bg-white border-t-0 border-l border-r border-b border-blue-600 mt-0 p-6 rounded-b-lg">
        {children}
    </div>
</div>

    );
};

export default Memberships;

Memberships.layout = (page) => <App children={page} />;