import React, { useState, useEffect } from "react";
import { Divider } from "primereact/divider";

const SubscriptionAgreement = () => {
    const [amount, setAmount] = useState("");
    const [years, setYears] = useState("");

    const bioData = JSON.parse(localStorage.getItem("biodata"));
    // Retrieve data from localStorage when component mounts
    useEffect(() => {
        const storedBiodata = JSON.parse(localStorage.getItem("biodata")) || {};
        if (storedBiodata.amount) setAmount(storedBiodata.amount);
        if (storedBiodata.years) setYears(storedBiodata.years);
    }, []);

    // Function to store the updated biodata in localStorage
    const updateLocalStorage = (key, value) => {
        const storedBiodata = JSON.parse(localStorage.getItem("biodata")) || {};
        storedBiodata[key] = value;
        localStorage.setItem("biodata", JSON.stringify(storedBiodata));
    };

    const formatAmount = (value) => {
        const cleanedValue = value.replace(/[^\d]/g, "");
        return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleAmountInput = (e) => {
        const inputValue = e.currentTarget.textContent;
        const formattedValue = formatAmount(inputValue);
        setAmount(formattedValue);
        updateLocalStorage("amount", formattedValue);
        e.currentTarget.textContent = formattedValue;
        placeCaretAtEnd(e.currentTarget);
    };

    const handleYearsInput = (e) => {
        const newValue = e.currentTarget.textContent;
        const cleanedValue = newValue.replace(/[^\d]/g, "");
        setYears(cleanedValue);
        updateLocalStorage("years", cleanedValue);
        e.currentTarget.textContent = cleanedValue;
        placeCaretAtEnd(e.currentTarget);
    };

    const placeCaretAtEnd = (el) => {
        el.focus();
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    };

    return (
        <div className="subscription-form p-grid p-fluid">
            <div className="p-field p-col-12">
                <h2 className="text-center font-extrabold">
                    SUBSCRIPTION AGREEMENT
                </h2>
            </div>

            <div className="p-field p-col-12">
                <p>
                    I agree to subscribe additional share capital in the amount
                    of PHP
                    <span
                        className="inline-block underline underline-offset-1 border-b border-transparent focus:border-blue-500 focus:outline-none"
                        contentEditable
                        suppressContentEditableWarning
                        style={{
                            display: "inline-block",
                            padding: "2px 4px",
                            margin: "0 4px",
                            whiteSpace: "nowrap",
                        }}
                        onInput={handleAmountInput}
                    >
                        {amount || " "} {/* Provide a space for the cursor */}
                    </span>
                    upon full payment of the initial fixed deposit and pay to
                    the cooperative initial subscription within
                    <span
                        className="inline-block underline underline-offset-1 border-b border-transparent focus:border-blue-500 focus:outline-none"
                        contentEditable
                        suppressContentEditableWarning
                        style={{
                            display: "inline-block",
                            padding: "2px 4px",
                            margin: "0 4px",
                            whiteSpace: "nowrap",
                        }}
                        onInput={handleYearsInput}
                    >
                        {years || " "} {/* Provide a space for the cursor */}
                    </span>
                    years that it may notify me in writing or any other means of
                    communication.
                </p>
            </div>

            <div className="p-field p-col-12">&nbsp;</div>

            <div className="p-field p-col-12">
                <p>
                    Failure on my part not to pay the required member capital
                    build-up will cause the cooperative to deduct from my loan
                    proceeds, dividend, and patronage refund. If in the absence
                    of loan proceeds, dividend, and patronage refund, I will
                    agree to pay the amount and prescribed fine and penalty
                    therein.
                </p>
            </div>

            <Divider />

            <div className="p-field p-col-12 p-grid">
                <div className="p-col-6">
                    <p className="signature-line underline underline-offset-1">
                        {bioData.first_name} {bioData.last_name}
                    </p>
                    <p className="font-extrabold">Member</p>
                </div>
                <div className="p-col-6">
                    <p className="text-right signature-line underline underline-offset-1"></p>
                    <p className="text-right font-extrabold">BOD Chairman</p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionAgreement;
