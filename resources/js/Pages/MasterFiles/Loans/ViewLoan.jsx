import Loan from "@/Pages/MasterFiles/Loan";
import App from "@/Pages/App";

import React, { useState, useRef } from "react";

//Message Popper
import { Toast } from "primereact/toast";

//Elements
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { InputTextarea } from "primereact/inputtextarea";

//Methods
import { AmountFormat, NumberFormat } from "@/Methods/Common/FieldFormats";
import { submitUpdateLoanForm } from "@/Methods/MasterFiles/Loans/UpdateLoan/Submit/submitUpdateLoanForm"

export default function viewLoan({ loan }) {
    const [formData, setFormData] = useState({
        id: loan.id,
        loan_code: loan.loan_code,
        loan_name: loan.loan_name,
        status: loan.status,
        max_loan_amount: loan.max_loan_amount,
        loan_period: loan.loan_period,
        interest: loan.interest,
        service_fee: loan.service_fee,
        loan_purpose: loan.loan_purpose,
    });

    const options = [
        { label: "Active", value: "Y" },
        { label: "Inactive", value: "N" },
    ];

    const toast = useRef(null);

    const handleStatusChange = (e) => {
        setFormData({ ...formData, status: e.value });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitUpdateLoanForm(formData, toast);
    };

    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-4">Create Loan</h2>
                <Toast ref={toast} />
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <InputText type="hidden" value={formData.id} />
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-hashtag"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="loan_code"
                                    value={formData.loan_code}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="loan_code">Loan Code</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-address-book"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="loan_name"
                                    value={formData.loan_name}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="loan_name">Loan Name</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-angle-double-up"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="max_loan_amount"
                                    value={formData.max_loan_amount}
                                    onChange={handleInputChange}
                                    onInput={AmountFormat}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="max_loan_amount">
                                    Max. Loan Amount
                                </label>
                            </FloatLabel>
                        </div>

                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-calendar-clock"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="loan_period"
                                    value={formData.loan_period}
                                    onChange={handleInputChange}
                                    onInput={NumberFormat}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="loan_period">
                                    Loan Period (in months)
                                </label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-percentage"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="interest"
                                    value={formData.interest}
                                    onChange={handleInputChange}
                                    onInput={NumberFormat}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="interest">
                                    Monthly Interest (0.01)
                                </label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-percentage"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="service_fee"
                                    value={formData.service_fee}
                                    onChange={handleInputChange}
                                    onInput={NumberFormat}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="service_fee">
                                    Service Fee (0.01)
                                </label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-check-circle"></i>
                            </span>
                            <FloatLabel>
                                <SelectButton
                                    value={formData.status}
                                    onChange={handleStatusChange}
                                    options={options}
                                />
                            </FloatLabel>
                        </div>
                    </div>
                    <div className="p-inputgroup flex">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-file-edit"></i>
                        </span>
                        <FloatLabel>
                            <InputTextarea
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                id="loan_purpose"
                                value={formData.loan_purpose}
                                onChange={handleInputChange}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="loan_purpose">
                                Purpose of Loan
                            </label>
                        </FloatLabel>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            icon="pi pi-check"
                            iconPos="right"
                            label="Update"
                            severity="success"
                            type="submit"
                            className="w-auto p-2 text-white rounded-md bg-blue-500 hover:bg-green-600 transition duration-200 mt-2" // Added margin here
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}


viewLoan.layout = (page) => <App>{<Loan>{page}</Loan>}</App>;
