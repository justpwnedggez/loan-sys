import App from "../App";
import React, { useState, useRef, useEffect } from "react";

//Elements
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

//Forms
import BioDataForm from "./Forms/BioDataForm";
import SubscriptionAgreement1 from "./Forms/SubscriptionAgreementMember";
import SubscriptionAgreement2 from "./Forms/SubscriptionAgreementBoard";
import MemorandumAgreement from "./Forms/MemorandumAgreement";

//Submit
import { submitMembershipForm } from "@/Methods/Activities/Memberships/Submit/SubmitFormData";

export default function Memberships({ genSett }) {
    const toast = useRef(null);
    const [page, setPage] = useState(1);

    // Save to localStorage when firstName or lastName changes
    useEffect(() => {
        const biodata = JSON.parse(localStorage.getItem("biodata")) || {};
        localStorage.setItem("biodata", JSON.stringify(biodata));
    });

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return (
                    <BioDataForm/>
                );
            case 2:
                return (
                    <SubscriptionAgreement1 genSett={genSett}/>
                );
            case 3:
                return (
                    <SubscriptionAgreement2/>
                )
            case 4:
                return (
                    <MemorandumAgreement/>
                )
            default:
                return null;
        }
    };

    const nextPage = () => {
        if (page < 4) setPage(page + 1);
    };

    const previousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleSubmit = () => {
        submitMembershipForm(toast);
    };

    return (
        <div className="max-w-5xl mx-auto p-8 border border-gray-300 bg-white rounded-lg shadow-md">
            <h2 className="text-xl text-center mb-6">
                Membership Form - Page {page} of 4
            </h2>
            <Toast ref={toast} />
            {renderPageContent()}

            <div className="flex justify-between mt-8">
                <Button
                    label="Previous"
                    onClick={previousPage}
                    disabled={page === 1}
                />
                {page < 4 ? (
                    <Button label="Next" onClick={nextPage} />
                ) : (
                    <Button label="Submit" onClick={handleSubmit} />
                )}
            </div>
        </div>
    );
}

Memberships.layout = (page) => <App children={page} />;
