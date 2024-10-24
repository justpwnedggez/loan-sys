import App from "../App";
import { useState, useRef } from "react";

//Elements
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

//Message Popper
import { Toast } from "primereact/toast";

//Sections
import { LoanTransSelectionList } from "@/Components/SideBar/Activity/SearchApprvLoanTrans";
import { LoanHeaderInformation } from "./Sections/LoanAmortization/LoanHeaderInformation";
import { LoanDetailsInformation } from "./Sections/LoanAmortization/LoanDetailsInformation";
import { PaymentInformation } from "./Sections/LoanAmortization/PaymentInformation";

//Methods
import { GenerateTransactionNumber } from "@/Methods/Common/TransNumber";
import { submitPaymentForm } from "@/Methods/Activities/Transactions/LoanAmortization/Submit/submitPaymentForm";


export default function LoanPayment() {
    const [formData, setFormData] = useState({});

    const [isDialogVisibleSearch, setDialogVisibleSearch] = useState(false);
    const [isDialogVisiblePay, setDialogVisiblePay] = useState(false);

    const toast = useRef(null);

    const selectLoanTrans = (loanTrans) => {
        setFormData((prevData) => ({
            ...prevData,
            //Member Info
            mem_id: loanTrans?.mem_id,
            mem_name: loanTrans?.mem_name,

            //Loan Trans Info
            loan_trans_id: loanTrans?.id,
            trans_no: loanTrans?.trans_no,
            loan_name: loanTrans?.loan_name,
            loan_period: loanTrans?.loan_period,
            cbu: loanTrans?.cbu,
            interest: loanTrans?.interest,
            service_fee: loanTrans?.service_fee,
            principal_amt: loanTrans?.principal_amt,
            total_interest: loanTrans?.total_interest,
            service_deduction: loanTrans?.service_deduction,
            net_amt: loanTrans?.net_amt,
            remaning_amt: loanTrans?.remaining_amt,
            next_payment_due: loanTrans?.next_payment_due,

            //Payment Details
            loan_payments: loanTrans?.loan_payments,
            pay_code: 'PAY#' + GenerateTransactionNumber(),
            payment_amount: ""
        }));

        setDialogVisibleSearch(false);
        setDialogVisiblePay(false);
    };

    const openSearchDialog = () => {
        setDialogVisibleSearch(true);
    };

    const openPayDialog = () => {
        if(Object.keys(formData).length === 0) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "No Loan Transaction Selected!",
                life: 2000,
            });
        } else {
            setDialogVisiblePay(true);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => {
            return { ...prevData, [id]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        submitPaymentForm(formData, toast);
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">
                Loan Amortization
            </span>
        </div>
    );

    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button
                label="Pay Up"
                icon="pi pi-wallet"
                onClick={openPayDialog}
            />
        </div>
    );

    const payModalFooter = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button
                label="Submit Payment"
                icon="pi pi-check"
                onClick={handleSubmit}
            />
            <Button
                label="Cancel"
                icon="pi pi-times"
                onClick={() => setDialogVisiblePay(false)}
                className="p-button-text"
            />
        </div>
    );

    return (
        <div className="card">
        <Toast ref={toast} />
            <Card
                title={header}
                footer={footer}
                className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto"
            >
                <LoanHeaderInformation
                    formData={formData}
                    openSearchDialog={openSearchDialog}
                />

                <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>

                <LoanDetailsInformation formData={formData} />
            </Card>
            <Dialog
                header="Select a Transaction"
                visible={isDialogVisibleSearch}
                onHide={() => setDialogVisibleSearch(false)}
                style={{ width: "50vw" }}
            >
                <LoanTransSelectionList onSelect={selectLoanTrans} />
            </Dialog>
            <Dialog
                header="Payment Submission"
                visible={isDialogVisiblePay}
                style={{ width: "50vw" }}
                footer={payModalFooter}
                onHide={() => setDialogVisiblePay(false)}
            >
                <p>Enter your payment details here.</p>
                <PaymentInformation formData={formData} handleInputChange={handleInputChange} toast={toast}/>
            </Dialog>
        </div>
    );
}

LoanPayment.layout = (page) => <App children={page} />;
