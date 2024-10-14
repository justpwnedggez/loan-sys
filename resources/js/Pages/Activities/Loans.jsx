import App from "../App";

import React, { useState, useEffect } from "react";

//Elements
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";

export default function Loans() {
    const [loanType, setLoanType] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [collateralType, setCollateralType] = useState("");
    const [collateralDescription, setCollateralDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalInterest, setTotalInterest] = useState(0);

    const loanTypes = [
        { name: "Regular Loan", code: "RL" },
        { name: "Mortgage Loan", code: "ML" },
        { name: "Emergency Loan", code: "EL" },
        { name: "Hog Loan", code: "HL" },
    ];

    const collateralTypes = [
        { name: "Real Estate", code: "REST" },
        { name: "Share Capital", code: "SHCAP" },
        { name: "Deposit of Co-maker", code: "DEPCM" },
        { name: "Production", code: "PROD" },
        { name: "Other", code: "OTH" },
    ];

    useEffect(() => {
        calculateInterest();
    }, [loanAmount, startDate, endDate, loanType]);

    const formatCurrency = (value) => {
        const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, "")); // Remove non-numeric characters
        if (!isNaN(numericValue)) {
            return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
            }).format(numericValue);
        }
        return ""; // Return empty if not a number
    };

    const handleInputChange = (e) => {
        setLoanAmount(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        if (loanAmount !== "") {
            setLoanAmount(formatCurrency(loanAmount));
        }
    };

    const handleFocus = () => {
        setIsEditing(true);
    };

    const calculateInterest = () => {
        if (loanAmount && startDate && endDate && loanType) {
            const daysInYear = 365;
            const timeDiff = endDate.getTime() - startDate.getTime();
            const daysDiff = timeDiff / (1000 * 3600 * 24);

            // Sample interest rates (you would typically get these from an API or database)
            const interestRates = {
                RL: 0.01,
                ML: 0.01,
                EL: 0.01,
                HL: 0.01,
            };

            const rate = interestRates[loanType.code];
            const interest = (loanAmount * rate * daysDiff) / daysInYear;
            setTotalInterest(interest);
        } else {
            setTotalInterest(0);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const loanData = {
            loanType,
            loanAmount,
            collateralType,
            collateralDescription,
            startDate,
            endDate,
            totalInterest,
        };

        console.log("Loan Data:", loanData);
    };

    return (
        <div className="card">
            <Card
                title="Loan Transaction"
                className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto"
            >
                <form onSubmit={handleSubmit} className="p-fluid">
                    <div className="field">
                        <label htmlFor="loanType">Loan Type</label>
                        <Dropdown
                            id="loanType"
                            value={loanType}
                            onChange={(e) => setLoanType(e.value)}
                            options={loanTypes}
                            optionLabel="name"
                            placeholder="Select Loan Type"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="loanAmount">Loan Amount</label>
                        <input
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="loanAmount"
                            value={loanAmount}
                            onChange={handleInputChange}
                            onBlur={handleBlur} // Format on blur
                            onFocus={handleFocus} // Show plain numbers when focused
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="collateralType">
                            Collateral Asset Type
                        </label>
                        <Dropdown
                            id="collateralType"
                            value={collateralType}
                            onChange={(e) => setCollateralType(e.value)}
                            options={collateralTypes}
                            optionLabel="name"
                            placeholder="Select Collateral Type"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="collateralDescription">
                            Collateral Asset Description
                        </label>
                        <InputTextarea
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="collateralDescription"
                            value={collateralDescription}
                            onChange={(e) =>
                                setCollateralDescription(e.target.value)
                            }
                            placeholder="Savings, Car, House, etc."
                        />
                    </div>

                    <div className="field-container flex justify-between gap-4">
                        <div className="field flex-1">
                            <label htmlFor="startDate">
                                Start Date of Loan
                            </label>
                            <Calendar
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.value)}
                                showIcon
                            />
                        </div>

                        <div className="field flex-1">
                            <label htmlFor="endDate">End Date of Loan</label>
                            <Calendar
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.value)}
                                showIcon
                            />
                        </div>
                    </div>

                    <Panel header="Computed Interest" toggleable>
                        <p className="m-0">
                            Total Interest:{" "}
                            {totalInterest.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </p>
                    </Panel>

                    <div className="flex items-center justify-center">
                        <Button
                            icon="pi pi-check"
                            iconPos="right"
                            label="Save"
                            severity="success"
                            type="submit"
                            className="w-auto p-2 text-white rounded-md bg-blue-500 hover:bg-green-600 transition duration-200"
                        />
                    </div>
                </form>
            </Card>
        </div>
    );
}

Loans.layout = (page) => <App children={page} />;
