import App from "../App";
import React, { useState, useRef, useEffect } from "react";

// Elements
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';  // Modal Component
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";

// Methods
import { AmountFormat } from "@/Methods/Common/FieldFormats";

//Modals
import { MemberSelectionList } from "@/Components/SideBar/Activity/SearchMemberModal";

export default function Loans({ data }) {

    const [formData, setFormData] = useState({
        loan_type: "",
        loan_amount: "",
        collateral_asset_type: "",
        collateral_asset_desc: "",
        start_loan_date: "",
        end_loan_date: "",
        status: "",
        cbu: "",
    });

    const [selectedLoan, setSelectedLoan] = useState("");
    const [memberData, setMemberData] = useState("");
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [totalInterest, setTotalInterest] = useState(0);
    const [netLoan, setNetLoan] = useState(0);

    const openSearchDialog = () => {
        setDialogVisible(true);
    };

    const selectMember = (member) => {
        setMemberData(member);
        setDialogVisible(false);
    };

    const toast = useRef(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "loan_type") {
            const loan = data.loans.find((loan) => loan.loan_code === value.loan_code);
            setSelectedLoan(loan);
        }

        setFormData({ ...formData, [id]: value });
    };

    const handleAmountInput = (e) => {
        AmountFormat(e, formData, selectedLoan, memberData, setTotalInterest, setNetLoan);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // submitCreateLoanForm(formData, toast);
    };

    return (
        <div className="card">
            <Card
                title="Loan Transaction"
                className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
            >
                <Button
                    icon="pi pi-check"
                    iconPos="right"
                    label="Save"
                    severity="success"
                    type="submit"
                    className="absolute top-3 right-3 p-2 text-white rounded-md bg-blue-500 hover:bg-green-600 transition duration-200"
                    onClick={handleSubmit}
                />
                <form className="p-fluid grid grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="field col">
                        <label htmlFor="loanType">Loan Type</label>
                        <Dropdown
                            id="loan_type"
                            value={formData.loan_type}
                            onChange={handleInputChange}
                            options={data.loans}
                            optionLabel="loan_name"
                            placeholder="Select Loan Type"
                        />
                    </div>

                    <div className="field col">
                        <label htmlFor="loanAmount">Loan Amount</label>
                        <input
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="loan_amount"
                            value={formData.loan_amount}
                            onChange={handleInputChange}
                            onInput={handleAmountInput}
                        />
                    </div>

                    <div className="field col">
                        <label htmlFor="collateralType">
                            Collateral Asset Type
                        </label>
                        <Dropdown
                            id="collateral_asset_type"
                            value={formData.collateral_asset_type}
                            onChange={handleInputChange}
                            options={data.collat_data}
                            optionLabel="collat_name"
                            placeholder="Select Collateral Type"
                        />
                    </div>

                    <div className="field col">
                        <label htmlFor="collateralDescription">
                            Collateral Asset Description
                        </label>
                        <InputTextarea
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="collateral_asset_desc"
                            value={formData.collateral_asset_desc}
                            onChange={handleInputChange}
                            placeholder="Savings, Car, House, etc."
                        />
                    </div>

                    <div className="field col">
                        <Panel header="Loan Type Information" toggleable>
                            <p className="m-0">Loan Code: {selectedLoan?.loan_code || ""}</p>
                            <p className="m-0">Loan Name: {selectedLoan?.loan_name || ""}</p>
                            <p className="m-0">Maximum Loan Amount: {selectedLoan?.max_loan_amount || ""}</p>
                            <p className="m-0">Loan Period: {selectedLoan?.loan_period || ""} Months</p>
                            <p className="m-0">Interest: {selectedLoan?.interest || ""} %</p>
                            <p className="m-0">Loan Purpose: {selectedLoan?.loan_purpose || ""}</p>
                            <p className="m-0">Service Fee: {selectedLoan?.service_fee || ""} %</p>
                        </Panel>
                    </div>
                    <div className="field col">
                        <Panel header="Total" toggleable>
                            <p className="m-0">
                                Principal Amount: {formData?.loan_amount || 0}
                            </p>
                            <p className="m-0">
                                Total Interest: {totalInterest}
                            </p>
                            <p className="m-0">
                                Service Fee: {selectedLoan?.service_fee || 0}
                            </p>
                            <p className="m-0">
                                Net Loan: {netLoan}
                            </p>
                        </Panel>
                    </div>
                </form>
            </Card>

            <Card
                title={
                    <div className="flex justify-between">
                        Member Information
                        <Button
                            icon="pi pi-search"
                            onClick={openSearchDialog}
                        />
                    </div>
                }
                className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto mt-4"
            >
                <div className="p-fluid grid grid-cols-2 gap-4">
                    <div className="field col">
                        <p className="m-0">
                            Member Code: <i>{memberData?.mem_code || ""}</i>
                        </p>
                        <p className="m-0">
                            Member Name: <i>{memberData?.first_name || ""} {memberData?.last_name || ""}</i>
                        </p>
                        <p className="m-0">CBU: <i>{memberData?.subscription_amount || ""}</i></p>
                        <p className="m-0">
                            Birth Date: <i>{memberData?.birth_date || ""}</i>
                        </p>
                        <p className="m-0">Age: <i>{memberData?.age || ""}</i></p>
                        <p className="m-0">
                            Phone No.: <i>{memberData?.phone_number || ""}</i>
                        </p>
                        <p className="m-0 text-capitalize">
                            Occupation: <i>{memberData?.occupation || ""}</i>
                        </p>
                        <p className="m-0">
                            Gross Annual Income: <i>{memberData?.gross_annual_income || ""}</i>
                        </p>
                    </div>
                    <div className="field col">
                        <p className="m-0">
                            Cooperative Member of:{" "}
                            <i>{memberData?.cooperative_member_name || ""}</i>
                        </p>
                        <p className="m-0">RSBSA: <i>{memberData?.rsbsa == 'Y' ? 'Yes' : 'No' || ""}</i></p>
                        <p className="m-0">
                            Farm Area: <i>{memberData?.farm_area || ""} sqm</i>
                        </p>
                        <p className="m-0">
                            Farm Location: <i>{memberData?.farm_location || ""}</i>
                        </p>
                    </div>
                </div>

                {/* Modal for selecting a member */}
                <Dialog
                    header="Select a Member"
                    visible={isDialogVisible}
                    onHide={() => setDialogVisible(false)}
                    style={{ width: "50vw" }}
                >
                    <MemberSelectionList membersData={data.members} onSelect={selectMember} />
                </Dialog>
            </Card>
        </div>
    );
}

Loans.layout = (page) => <App children={page} />;
