import App from "../App";
import React, { useState } from "react";

//Elements
import { Button } from "primereact/button";

//Forms
import BioDataForm from "../Activities/Forms/BioDataForm";
import SubscriptionAgreement from "./Forms/SubscriptionAgreementMember";
import MemorandumAgreement from "./Forms/MemorandumAgreement";
import PalagipUtang from "./Forms/Palagiputang";

export default function Memberships() {
    const [page, setPage] = useState(1);
    // Function to render different pages
    const renderPageContent = () => {
        switch (page) {
            case 1:
            return <BioDataForm/>
            case 2:
                return <SubscriptionAgreement/>
            case 3:
                return <MemorandumAgreement/>
            case 4:
                return <PalagipUtang/>
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
            <h2 className="text-xl text-center mb-6">
                Membership Form - Page {page} of 6
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
