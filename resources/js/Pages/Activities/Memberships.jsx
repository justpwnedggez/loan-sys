import App from "../App";
import React, { useState } from "react";

//Elements
import { Button } from "primereact/button";

//Forms
import BioDataForm from "../Activities/Forms/BioDataForm";

export default function Memberships() {
    const [page, setPage] = useState(1);
    // Function to render different pages
    const renderPageContent = () => {
        switch (page) {
            case 1:
            return <BioDataForm/>
            case 2:
                return (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-medium">
                                Present Address:
                            </label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">
                                Permanent Address:
                            </label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block font-medium">
                                Birthdate:
                            </label>
                            <input
                                type="date"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Age:</label>
                            <input
                                type="number"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">
                                Birthplace:
                            </label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-medium">
                                Civil Status:
                            </label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">
                                Name of Husband/Wife:
                            </label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="mb-4">
                        <label className="block font-medium">
                            Gross Annual Income:
                        </label>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>below 50,000.00</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>50,000-100,000</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>100,000-200,000</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>200,000 above</span>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="mb-4">
                        <label className="block font-medium">
                            Designated Beneficiaries:
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block font-medium">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">
                                    Relationship:
                                </label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded"
                                />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // Function to handle page navigation
    const nextPage = () => {
        if (page < 6) setPage(page + 1);
    };

    const previousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    return (
        <div className="max-w-5xl mx-auto p-8 border border-gray-300 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-4">
                CABARUAN MULTI-PURPOSE COOPERATIVE
            </h1>
            <h2 className="text-xl text-center mb-6">
                Biodata - Page {page} of 6
            </h2>

            {/* Render the content of the current page */}
            {renderPageContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
                <Button
                    label="Previous"
                    onClick={previousPage}
                    disabled={page === 1}
                />
                {page < 6 ? (
                    <Button label="Next" onClick={nextPage} />
                ) : (
                    <Button label="Submit" onClick={handleSubmit} />
                )}
            </div>
        </div>
    );
}

Memberships.layout = (page) => <App children={page} />;
