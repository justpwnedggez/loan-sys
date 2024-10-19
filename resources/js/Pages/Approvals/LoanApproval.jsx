import App from "../App";

import React, { useRef, useState } from "react";

//Elements
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";

//Message Poppers
import { Toast } from "primereact/toast";

//Modals
import { LoanTransSelectionList } from "@/Components/SideBar/Approvals/SearchLoanTransModal";
import { InputTextarea } from "primereact/inputtextarea";

export default function LoanApproval() {
    const [formData, setFormData] = useState({
        //Member Info
        mem_code: "",
        mem_name: "",
        birth_date: "",
        age: "",
        phone_number: "",
        occupation: "",
        gross_annual_income: "",
        cooperative_member_name: "",
        rsbsa: "",
        farm_area: "",
        mem_nfarm_locationame: "",

        //Loan Trans Info
        loan_trans_id: "",
        trans_type: "LAP",
        approve_desc: "",
        trans_no: "",
        collat_asset_type: "",
        collat_asset_desc: "",
        loan_name: "",
        max_loan_amount: "",
        loan_period: "",
        interest: "",
        loan_purpose: "",
        service_fee: "",
        principal_amt: "",
        total_interest: "",
        service_deduction: "",
        net_amt: "",
    });

    const [isDialogVisible, setDialogVisible] = useState(false);

    const stepperRef = useRef(null);
    const toast = useRef(null);

    const openSearchDialog = () => {
        setDialogVisible(true);
    };

    const selectLoanTrans = (loanTrans) => {
        setFormData((prevData) => ({
            ...prevData,
            //Member Info
            mem_code: loanTrans?.mem_code,
            mem_name: loanTrans?.mem_name,
            birth_date: loanTrans?.birth_date,
            age: loanTrans?.age,
            phone_number: loanTrans?.phone_number,
            occupation: loanTrans?.occupation,
            gross_annual_income: loanTrans?.gross_annual_income,
            cooperative_member_name: loanTrans?.cooperative_member_name,
            rsbsa: loanTrans?.rsbsa,
            farm_area: loanTrans?.farm_area,
            farm_location: loanTrans?.farm_location,

            //Loan Trans Info
            loan_trans_id: loanTrans?.id,
            trans_type: "LAP",
            trans_no: loanTrans?.trans_no,
            collat_asset_type: loanTrans?.collat_asset_type,
            collat_asset_desc: loanTrans?.loan_collat_desc,
            loan_name: loanTrans?.loan_name,
            max_loan_amount: loanTrans?.max_loan_amount,
            loan_period: loanTrans?.loan_period,
            interest: loanTrans?.interest,
            loan_purpose: loanTrans?.loan_purpose,
            service_fee: loanTrans?.service_fee,
            principal_amt: loanTrans?.principal_amt,
            total_interest: loanTrans?.total_interest,
            service_deduction: loanTrans?.service_deduction,
            net_amt: loanTrans?.net_amt,
        }));

        setDialogVisible(false);
    };
    console.log(formData);
    return (
        <div className="card flex justify-content-center">
            <Stepper ref={stepperRef} style={{ flexBasis: "90rem" }}>
                <StepperPanel header="Loan Application">
                    <div className="flex flex-column h-12rem">
                        <Card
                            style={{ flexBasis: "90rem" }}
                            className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
                            title=<div className="flex justify-between">
                                Member Information
                                <Button
                                    icon="pi pi-search"
                                    onClick={openSearchDialog}
                                />
                            </div>
                        >
                            <Toast ref={toast} />
                            <div className="p-fluid grid grid-cols-2 gap-4">
                                <div className="field col">
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Member Code:
                                        </span>{" "}
                                        <i>{formData?.mem_code}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Member Name:
                                        </span>{" "}
                                        <i>{formData?.mem_name}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Birth Date:
                                        </span>{" "}
                                        <i>{formData?.birth_date}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Age:
                                        </span>{" "}
                                        <i>{formData?.age}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Phone No.:
                                        </span>{" "}
                                        <i>{formData?.phone_number}</i>
                                    </p>
                                    <p className="m-0 text-capitalize">
                                        <span className="font-bold underline">
                                            Occupation:
                                        </span>{" "}
                                        <i>{formData?.occupation}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Gross Annual Income:
                                        </span>{" "}
                                        <i>{formData?.gross_annual_income}</i>
                                    </p>
                                </div>
                                <div className="field col">
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Cooperative Member of:
                                        </span>{" "}
                                        <i>
                                            {formData?.cooperative_member_name}
                                        </i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            RSBSA:
                                        </span>{" "}
                                        <i>{formData?.rsbsa}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Farm Area:
                                        </span>{" "}
                                        <i>{formData?.farm_area}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Farm Location:
                                        </span>{" "}
                                        <i>{formData?.farm_location}</i>
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="flex flex-column h-12rem">
                        <Card
                            className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto mt-4"
                            style={{ flexBasis: "90rem" }}
                            title=<div className="flex justify-between">
                                Loan Transaction Information
                            </div>
                        >
                            <div className="p-fluid grid grid-cols-2 gap-4">
                                <div className="field col">
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Transaction No.:
                                        </span>{" "}
                                        <i>{formData?.trans_no}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Collateral Asset Type:
                                        </span>{" "}
                                        <i>{formData?.collat_asset_type}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Loan Name:
                                        </span>{" "}
                                        <i>{formData?.loan_name}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Maximum Loan Amount:
                                        </span>{" "}
                                        <i>{formData?.max_loan_amount}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Loan Period:
                                        </span>{" "}
                                        <i>{formData?.loan_period}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Interest:
                                        </span>{" "}
                                        <i>{formData?.interest}</i>
                                    </p>
                                    <p className="m-0 text-capitalize">
                                        <span className="font-bold underline">
                                            Loan Purpose:
                                        </span>{" "}
                                        <i>{formData?.loan_purpose}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Service Fee:
                                        </span>{" "}
                                        <i>{formData?.service_fee}</i>
                                    </p>
                                </div>
                                <div className="field col">
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Collateral Asset Description:
                                        </span>{" "}
                                        <i>{formData?.collat_asset_desc}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Principal Amount:
                                        </span>{" "}
                                        <i>{formData?.principal_amt}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Total Interest:
                                        </span>{" "}
                                        <i>{formData?.total_interest}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Service Deduction:
                                        </span>{" "}
                                        <i>{formData?.service_deduction}</i>
                                    </p>
                                    <p className="m-0">
                                        <span className="font-bold underline">
                                            Net Amount:
                                        </span>{" "}
                                        <i>{formData?.net_amt}</i>
                                    </p>
                                </div>
                            </div>
                            {/* Modal for selecting a member */}
                            <Dialog
                                header="Select a Transaction"
                                visible={isDialogVisible}
                                onHide={() => setDialogVisible(false)}
                                style={{ width: "50vw" }}
                            >
                                <LoanTransSelectionList
                                    onSelect={selectLoanTrans}
                                />
                            </Dialog>
                        </Card>
                    </div>
                    <div className="flex pt-4 justify-end">
                        <Button
                            label="Next"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            onClick={() => stepperRef.current.nextCallback()}
                        />
                    </div>
                </StepperPanel>
                <StepperPanel header="Requirements Review">
                    <div className="flex flex-column h-12rem">
                        <Card
                            style={{ flexBasis: "90rem" }}
                            className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
                            title=<div className="flex justify-between">
                                Member Requirements
                            </div>
                        >
                            <div className="p-fluid grid grid-cols-2 gap-4">
                                <div className="field col">
                                    <Checkbox inputId="" name="" value="" />
                                    <label
                                        htmlFor=""
                                        className="ml-2 text-sm text-gray-600"
                                    >
                                        Brgy. Certificate of Residency
                                    </label>
                                </div>
                                <div className="field col">
                                    <Checkbox inputId="" name="" value="" />
                                    <label
                                        htmlFor=""
                                        className="ml-2 text-sm text-gray-600"
                                    >
                                        2 copies of 1x1 Latest Picture
                                    </label>
                                </div>
                                <div className="field col">
                                    <Checkbox inputId="" name="" value="" />
                                    <label
                                        htmlFor=""
                                        className="ml-2 text-sm text-gray-600"
                                    >
                                        Photocopy of TIN
                                    </label>
                                </div>
                                <div className="field col">
                                    <Checkbox inputId="" name="" value="" />
                                    <label
                                        htmlFor=""
                                        className="ml-2 text-sm text-gray-600"
                                    >
                                        Photocopy of Birth Cerficate or Marriage
                                        Contract
                                    </label>
                                </div>
                                <div className="field col">
                                    <Checkbox inputId="" name="" value="" />
                                    <label
                                        htmlFor=""
                                        className="ml-2 text-sm text-gray-600"
                                    >
                                        Duly Accomplished Form
                                    </label>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="flex pt-4 justify-end">
                        <Button
                            label="Back"
                            severity="primary"
                            icon="pi pi-arrow-left"
                            className="p-2" // Add horizontal padding between buttons
                            onClick={() => stepperRef.current.prevCallback()}
                        />
                        <Button
                            label="Next"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            className="p-0.5" // Add horizontal padding between buttons
                            onClick={() => stepperRef.current.nextCallback()}
                        />
                    </div>
                </StepperPanel>
                <StepperPanel header="Release Approval">
                    <div className="flex flex-column h-12rem">
                        <Card
                            style={{ flexBasis: "90rem" }}
                            className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
                            title=<div className="flex justify-between">
                                Loan Application Approval
                                <Button
                                    icon="pi pi-check"
                                    iconPos="right"
                                    label="Submit"
                                    severity="success"
                                    type="submit"
                                    className="w-auto p-1 text-xs text-white rounded-md bg-blue-500 hover:bg-green-600 transition duration-200 mt-2"
                                />
                            </div>
                        >
                            <div className="p-fluid grid grid-cols-2 gap-7">
                                <div className="field col">
                                    <p className="m-0">
                                        <span className="font-bold">
                                            Approval No.:
                                        </span>
                                        <i></i>
                                    </p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">
                                        <span className="font-bold">
                                            Approved By:
                                        </span>
                                        <i></i>
                                    </p>
                                    <p className="m-0">&nbsp;</p>
                                    <label className="font-bold">
                                        Approve Status:
                                    </label>
                                    <Dropdown
                                        value=""
                                        options={[
                                            {
                                                label: "Approved",
                                                value: "APRV",
                                            },
                                            {
                                                label: "Rejected",
                                                value: "RJTD",
                                            },
                                        ]}
                                        placeholder="Select Marital Status"
                                        className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[34px]"
                                        style={{ height: "38px" }}
                                    />
                                </div>
                                <div className="field col">
                                    <label htmlFor="" className="font-bold">
                                        Approval Description
                                    </label>
                                    <InputTextarea
                                        className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        id="loan_amount"
                                        value=""
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="flex pt-4 justify-end">
                        <Button
                            label="Back"
                            severity="secondary"
                            icon="pi pi-arrow-left"
                            onClick={() => stepperRef.current.prevCallback()}
                        />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    );
}

LoanApproval.layout = (page) => <App children={page} />;
