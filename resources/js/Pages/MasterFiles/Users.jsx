import { Link } from "@inertiajs/react";
import App from "../App";

export default function Users({ children }) {
    return (
        <div className="max-w-screen-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">
                User Management
            </h1>

            {/* Tab buttons */}
            <div className="flex justify-center mb-4 space-x-4">
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
                    href={route("main.add.user")}
                    className={`block max-w-48 px-4 py-2 rounded ${
                        route().current() === "main.add.user"
                            ? "bg-blue-600 text-white" // Active style (highlighted)
                            : "text-gray-300 hover:bg-blue-600 hover:text-white" // Default style
                    }`}
                >
                    Add User
                </Link>
            </div>

            {/* Render child content passed down (User List or Add User component) */}
            <div className="mt-6">
                {children}
            </div>
        </div>
    );
}

// This will apply the `App` layout as the root layout
Users.layout = (page) => <App children={page} />;
