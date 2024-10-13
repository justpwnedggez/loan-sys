import App from "../App";

import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

export default function Loans() {
    const [loanType, setLoanType] = useState(null);
    const [loanAmount, setLoanAmount] = useState(null);
    const [collateralType, setCollateralType] = useState(null);
    const [collateralDescription, setCollateralDescription] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalInterest, setTotalInterest] = useState(0);

    const loanTypes = [
        { name: "Personal Loan", code: "PL" },
        { name: "Mortgage", code: "MG" },
        { name: "Auto Loan", code: "AL" },
        { name: "Business Loan", code: "BL" },
    ];

    const collateralTypes = [
        { name: "Real Estate", code: "RE" },
        { name: "Vehicle", code: "VH" },
        { name: "Savings Account", code: "SA" },
        { name: "Stocks/Bonds", code: "SB" },
        { name: "Other", code: "OT" },
    ];

    useEffect(() => {
        calculateInterest();
    }, [loanAmount, startDate, endDate, loanType]);

    const calculateInterest = () => {
        if (loanAmount && startDate && endDate && loanType) {
            const daysInYear = 365;
            const timeDiff = endDate.getTime() - startDate.getTime();
            const daysDiff = timeDiff / (1000 * 3600 * 24);

            // Sample interest rates (you would typically get these from an API or database)
            const interestRates = {
                PL: 0.1, // 10% for Personal Loan
                MG: 0.05, // 5% for Mortgage
                AL: 0.07, // 7% for Auto Loan
                BL: 0.12, // 12% for Business Loan
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
        // Here you would typically send the data to a server
        console.log({
            loanType,
            loanAmount,
            collateralType,
            collateralDescription,
            startDate,
            endDate,
            totalInterest,
        });
        alert("Loan application submitted!");
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
                        <InputNumber
                            id="loanAmount"
                            value={loanAmount}
                            onValueChange={(e) => setLoanAmount(e.value)}
                            mode="currency"
                            currency="USD"
                            locale="en-US"
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
                        <InputText
                            id="collateralDescription"
                            value={collateralDescription}
                            onChange={(e) =>
                                setCollateralDescription(e.target.value)
                            }
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="startDate">Start Date of Loan</label>
                        <Calendar
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.value)}
                            showIcon
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="endDate">End Date of Loan</label>
                        <Calendar
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.value)}
                            showIcon
                        />
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

                    <Button
                        type="submit"
                        label="Submit Loan Application"
                        className="mt-4"
                    />
                </form>
            </Card>
        </div>
    );
}

Loans.layout = (page) => <App children={page} />;
