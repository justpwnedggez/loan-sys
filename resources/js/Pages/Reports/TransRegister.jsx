import { useState } from "react";
import axios from "axios";
import App from "../App";

export default function Membership() {
    const [filters, setFilters] = useState({
        date_from: "",
        date_to: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleGenerateReport = async (e) => {
        e.preventDefault();

        try {

            const filteredParams = Object.fromEntries(
                Object.entries(filters).filter(([_, v]) => v)
            );

            const response = await axios.get("/main/reports/transaction-register/transaction-register/filter", {
                params: filteredParams,
                headers: { "Content-Type": "application/json" },
            });

            const newTab = window.open();
            if (newTab) {
                newTab.document.open();
                newTab.document.write(response.data);
                newTab.document.close();
            }
        } catch (error) {
            console.error("Error generating report:", error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-5 bg-gray-100 font-sans">
            <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
                Transaction Register Report
            </h1>

            {/* Filter Card */}
            <form
                onSubmit={handleGenerateReport}
                className="bg-white p-6 mb-6 rounded-lg shadow-md border-l-4 border-teal-500"
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    Filters
                </h2>

                <label className="block mb-2">
                    Date From:
                    <input
                        type="date"
                        name="date_from"
                        value={filters.date_from}
                        onChange={handleInputChange}
                        placeholder="e.g., 2023-01-01 to 2023-12-31"
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                        required
                    />
                </label>
                <label className="block mb-2">
                    Date To:
                    <input
                        type="date"
                        name="date_to"
                        value={filters.date_to}
                        onChange={handleInputChange}
                        placeholder="e.g., 2023-01-01 to 2023-12-31"
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                        required
                    />
                </label>

                <label className="block mb-4">
                    Status:
                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleInputChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                    >
                        <option value="">All</option>
                        <option value="Y">Active</option>
                        <option value="N">Inactive</option>
                    </select>
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
                >
                    Generate Report
                </button>
            </form>
        </div>
    );
}

Membership.layout = (page) => <App children={page} />;
