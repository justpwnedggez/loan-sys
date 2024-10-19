import App from "../App";
import React, { useState, useRef, useEffect } from "react";

// Elements
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog"; // Modal Component
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";

//Message Poppers
import { Toast } from "primereact/toast";

// Methods
import { AmountFormat, AmountFormatText } from "@/Methods/Common/FieldFormats";
import { GenerateTransactionNumber } from "@/Methods/Common/TransNumber";
import { calculateLoanDetails } from "@/Methods/Common/FieldFormats";
import { submitLoanForm } from "@/Methods/Activities/Transactions/Loans/Submit/SubmitFormData";
//Modals
import { MemberSelectionList } from "@/Components/SideBar/Activity/SearchMemberModal";

export default function Loans({ data }) {
    const [formData, setFormData] = useState({
        trans_no: 'LTR#' + GenerateTransactionNumber(),
        loan_id: "",
        loan_type: "",
        loan_amount: "",
        collateral_asset_type: "",
        loan_collat_desc: "",
        status: "Y",
        cbu: "",
        interest: "",
        service_fee: "",
        loan_period: "",
        service_deduction: "",
        total_interest: "",
        net_amt: "",
    });

    const [cbu, setCbuData] = useState("");
    const [selectedLoan, setSelectedLoan] = useState("");
    const [memberData, setMemberData] = useState("");
    const [isDialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        if (formData.loan_amount && formData.cbu && formData.interest) {
            // Get the calculated values
            const { principal_amt, total_interest, service_deduction, net_amt } = calculateLoanDetails(formData);

            // Only update if values have changed to prevent infinite re-renders
            if (
                principal_amt !== formData.principal_amt ||
                total_interest !== formData.total_interest ||
                service_deduction !== formData.service_deduction ||
                net_amt !== formData.net_amt
            ) {
                setFormData((prevData) => ({
                    ...prevData,
                    principal_amt,
                    total_interest,
                    service_deduction,
                    net_amt
                }));
            }
        }
    }, [formData.loan_amount, formData.cbu, formData.interest]); // Only trigger when these specific fields change



    const openSearchDialog = () => {
        setDialogVisible(true);
    };

    const selectMember = (member) => {
        const cbu = member?.subscription_amount >= 10000 ? 1000 : 250 || ""
        setCbuData(cbu);
        setMemberData(member);
        setFormData((prevData) => ({
            ...prevData,
            cbu: cbu,
            mem_id: member?.id || "",
        }));
        setDialogVisible(false);
    };
    const toast = useRef(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => {
            let updatedData = { ...prevData, [id]: value };

            if (id === "loan_type") {
                const loan = data.loans.find(
                    (loan) => loan.loan_code === value.loan_code
                );
                setSelectedLoan(loan);

                updatedData = {
                    ...updatedData,
                    loan_id: loan?.id || "",
                    interest: loan?.interest || "",
                    service_fee: loan?.service_fee || "",
                    loan_period: loan?.loan_period || "",
                };
            }

            if(id === "collateral_asset_type") {
                const collat = data.collat_data.find(
                    (collat) => collat.collat_code === value.collat_code
                );

                updatedData = {
                    ...updatedData,
                    loan_collat_id: collat?.id || "",
                };

            }
            return updatedData;
        });
    };

    const handleAmountInput = (e) => {
        AmountFormat(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLoanForm(formData, toast);
    };

    return (
        (<div className="card">
            <Card
                className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
                title={
                    <div className="flex justify-between">
                        Member Information
                        <Button
                            icon="pi pi-search"
                            onClick={openSearchDialog}
                        />
                    </div>
                }
            >
                <Toast ref={toast} />
                <div className="p-fluid grid grid-cols-2 gap-4">
                    <div className="field col">
                        <p className="m-0">
                            Member Code: <i>{memberData?.mem_code || ""}</i>
                        </p>
                        <p className="m-0">
                            Member Name:{" "}
                            <i>
                                {memberData?.first_name || ""}{" "}
                                {memberData?.last_name || ""}
                            </i>
                        </p>
                        <p className="m-0">
                            CBU: <i>{AmountFormatText(cbu) || ""}</i>
                        </p>
                        <p className="m-0">
                            Birth Date: <i>{memberData?.birth_date || ""}</i>
                        </p>
                        <p className="m-0">
                            Age: <i>{memberData?.age || ""}</i>
                        </p>
                        <p className="m-0">
                            Phone No.: <i>{memberData?.phone_number || ""}</i>
                        </p>
                        <p className="m-0 text-capitalize">
                            Occupation: <i>{memberData?.occupation || ""}</i>
                        </p>
                        <p className="m-0">
                            Gross Annual Income:{" "}
                            <i>{memberData?.gross_annual_income || ""}</i>
                        </p>
                    </div>
                    <div className="field col">
                        <p className="m-0">
                            Cooperative Member of:{" "}
                            <i>{memberData?.cooperative_member_name || ""}</i>
                        </p>
                        <p className="m-0">
                            RSBSA:{" "}
                            <i>
                                {memberData?.rsbsa == "Y" ? "Yes" : "No" || ""}
                            </i>
                        </p>
                        <p className="m-0">
                            Farm Area: <i>{memberData?.farm_area || ""} sqm</i>
                        </p>
                        <p className="m-0">
                            Farm Location:{" "}
                            <i>{memberData?.farm_location || ""}</i>
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
                    <MemberSelectionList
                        membersData={data.members}
                        onSelect={selectMember}
                    />
                </Dialog>
            </Card>
            <Card
                className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto mt-4"
                title={`Loan Transaction ${formData.trans_no}`}
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
                            id="loan_collat_desc"
                            value={formData.loan_collat_desc}
                            onChange={handleInputChange}
                            placeholder="Savings, Car, House, etc."
                        />
                    </div>

                    <div className="field col">
                        <Panel header="Loan Type Information" toggleable>
                            <p className="m-0">
                                Loan Code: {selectedLoan?.loan_code || ""}
                            </p>
                            <p className="m-0">
                                Loan Name: {selectedLoan?.loan_name || ""}
                            </p>
                            <p className="m-0">
                                Maximum Loan Amount:{" "}
                                {AmountFormatText(selectedLoan.max_loan_amount) || ""}
                            </p>
                            <p className="m-0">
                                Loan Period: {selectedLoan?.loan_period || ""}{" "}
                                Months
                            </p>
                            <p className="m-0">
                                Interest: {selectedLoan?.interest || ""} %
                            </p>
                            <p className="m-0">
                                Loan Purpose: {selectedLoan?.loan_purpose || ""}
                            </p>
                            <p className="m-0">
                                Service Fee: {selectedLoan?.service_fee || ""} %
                            </p>
                        </Panel>
                    </div>
                    <div className="field col">
                        <Panel header="Total" toggleable>
                            <p className="m-0">
                                Principal Amount: {AmountFormatText(formData?.loan_amount) || 0}
                            </p>
                            <p className="m-0">
                                Total Interest: {AmountFormatText(formData?.total_interest) || 0}
                            </p>
                            <p className="m-0">
                                Service Deduction: {AmountFormatText(formData?.service_deduction) || 0}
                            </p>
                            <p className="m-0">Net Loan: {AmountFormatText(formData?.net_amt) || 0}</p>
                        </Panel>
                    </div>
                </form>
            </Card>
        </div>)
    );
}

Loans.layout = (page) => <App children={page} />;
