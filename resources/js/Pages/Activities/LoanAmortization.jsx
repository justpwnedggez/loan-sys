import App from "../App";
import { useRef, useState } from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

//Sections
import { LoanTransSelectionList } from "@/Components/SideBar/Activity/SearchApprvLoanTrans";
import { LoanHeaderInformation } from "./Sections/LoanAmortization/LoanHeaderInformation";
import { LoanDetailsInformation } from "./Sections/LoanAmortization/LoanDetailsInformation";

export default function LoanPayment() {
    const [formData, setFormData] = useState({});

    const [isDialogVisible, setDialogVisible] = useState(false);

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
        }));

        setDialogVisible(false);
    };


    const openSearchDialog = () => {
        setDialogVisible(true);
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
            <Button label="Pay Up" icon="pi pi-list" />
        </div>
    );

    return (
        <div className="card">
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

                <LoanDetailsInformation
                    formData={formData}
                />
            </Card>
            <Dialog
                header="Select a Transaction"
                visible={isDialogVisible}
                onHide={() => setDialogVisible(false)}
                style={{ width: "50vw" }}
            >
                <LoanTransSelectionList onSelect={selectLoanTrans} />
            </Dialog>
        </div>
    );
}

LoanPayment.layout = (page) => <App children={page} />;
