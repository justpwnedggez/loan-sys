import App from "../App";

export default function Roles({ children }) {
    return (
        <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">
                Roles Management
            </h1>

            {/* Render child content passed down (User List or Add User component) */}
            <div className="mt-6">{children}</div>
        </div>
    );
}

// This will apply the `App` layout as the root layout
Roles.layout = (page) => <App children={page} />;
