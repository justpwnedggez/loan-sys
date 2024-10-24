import { useRef, useState } from "react";
import { usePage } from "@inertiajs/react";

//Elements
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
//Message Popper
import { Toast } from "primereact/toast";

//Submit
import { submitLoanApprovalForm } from "@/Methods/Approvals/LoanApproval/Submit/submitLoanApprovalForm";

export default function ApprovalRelease({ stepperRef, formData, setFormData }) {
    const toast = useRef(null);
    const { auth } = usePage().props;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => {
            return { ...prevData, auth_user: auth.user.id, [id]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLoanApprovalForm(formData, toast);
    };

    return (
        <div>
            <Toast ref={toast} />
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
                            onClick={handleSubmit}
                        />
                    </div>
                >
                    <div className="p-fluid grid grid-cols-2 gap-7">
                        <div className="field col">
                            <p className="m-0">
                                <span className="font-bold">Approval No.:</span>
                                <i> {formData?.approve_code}</i>
                            </p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">
                                <span className="font-bold">Approved By:</span>
                                <i>
                                    {" "}
                                    {auth.user.first_name +
                                        " " +
                                        auth.user.last_name}
                                </i>
                            </p>
                            <p className="m-0">&nbsp;</p>
                            <label className="font-bold">Approve Status:</label>
                            <Dropdown
                                id="status"
                                value={formData?.status}
                                onChange={handleInputChange}
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
                                placeholder="Select Approval Status"
                                className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[34px]"
                                style={{ height: "38px" }}
                            />
                        </div>
                        <div className="field col">
                            <div className="card flex flex-wrap gap-3 p-fluid">
                                <div className="flex-auto">
                                    <label
                                        htmlFor="start_date"
                                        className="font-bold block mb-2"
                                    >
                                        Start Date:
                                    </label>
                                    <Calendar
                                        id="start_date"
                                        value={formData?.start_date}
                                        onChange={handleInputChange}
                                        showIcon
                                    />
                                </div>
                                <div className="flex-auto">
                                    <label
                                        htmlFor="end_date"
                                        className="font-bold block mb-2"
                                    >
                                        End Date:
                                    </label>

                                    <Calendar
                                        id="end_date"
                                        value={formData?.end_date}
                                        onChange={handleInputChange}
                                        showIcon
                                    />
                                </div>
                            </div>
                            <label htmlFor="" className="font-bold">
                                Approval Description
                            </label>
                            <InputTextarea
                                id="approve_desc"
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData?.approve_desc}
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
        </div>
    );
}
