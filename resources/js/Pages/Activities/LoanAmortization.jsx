import App from "../App";
import { useRef, useState } from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { LoanTransSelectionList } from "@/Components/SideBar/Approvals/SearchLoanTransModal";

export default function LoanPayment() {
    const [formData, setFormData] = useState({});

    const [isDialogVisible, setDialogVisible] = useState(false);

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
    const loanDetails = {
        amount: 10000,
        interestRate: 5.5,
        remainingBalance: 7500,
        nextPaymentDue: "2024-05-15",
    };

    const recentTransactions = [
        {
            no: 1,
            date: "2024-04-15",
            type: "Payment",
            scheduled_payment: "500.00",
            principal_amt: "213.00",
            interest: "50.00",
            beginning_bal: "2,500.00",
            ending_bal: "2,000.00",
            cumulative_interest: "50.00",
        },
        {
            no: 2,
            date: "2024-03-15",
            type: "Payment",
            scheduled_payment: "500.00",
            principal_amt: "412.00",
            interest: "51.00",
            beginning_bal: "2,000.00",
            ending_bal: "1,500.00",
            cumulative_interest: "101.00",
        },
        {
            no: 3,
            date: "2024-02-15",
            type: "Payment",
            scheduled_payment: "500.00",
            principal_amt: "312.00",
            interest: "52.00",
            beginning_bal: "1,500.00",
            ending_bal: "1,000.00",
            cumulative_interest: "152.00",
        },
        {
            no: 4,
            date: "2024-01-15",
            type: "Payment",
            scheduled_payment: "500.00",
            principal_amt: "112.00",
            interest: "53.00",
            beginning_bal: "1,000.00",
            ending_bal: "500.00",
            cumulative_interest: "205",
        },
        {
            no: 5,
            date: "2023-12-15",
            type: "Payment",
            scheduled_payment: "500.00",
            principal_amt: "321.00",
            interest: "54.00",
            beginning_bal: "500.00",
            ending_bal: "0.00",
            cumulative_interest: "259.00",
        },
    ];

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
            <Button label="View All Transactions" icon="pi pi-list" />
        </div>
    );

    const LoanDetailsCard = () => (
        <Card className="mb-4">
            <div className="grid">
                <div className="col-12 md:col-3 mb-4 md:mb-0">
                    <div className="text-xl text-900 font-bold mb-4">
                        Loan Transaction
                        <Button
                            icon="pi pi-search"
                            onClick={openSearchDialog}
                        />
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Loan Amount
                    </div>
                    <div className="text-900 text-xl font-medium">
                        ${loanDetails.amount.toLocaleString()}
                    </div>
                </div>
                <div className="col-12 md:col-3 mb-4 md:mb-0">
                    <div className="text-500 font-medium mb-2">
                        Interest Rate
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {loanDetails.interestRate}%
                    </div>
                </div>
                <div className="col-12 md:col-3 mb-4 md:mb-0">
                    <div className="text-500 font-medium mb-2">
                        Remaining Balance
                    </div>
                    <div className="text-900 text-xl font-medium">
                        ${loanDetails.remainingBalance.toLocaleString()}
                    </div>
                </div>
                <div className="col-12 md:col-3">
                    <div className="text-500 font-medium mb-2">
                        Next Payment Due
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {loanDetails.nextPaymentDue}
                    </div>
                </div>
            </div>
        </Card>
    );

    return (
        <div className="card">
            <Card
                title={header}
                footer={footer}
                className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto"
            >
                <LoanDetailsCard />

                <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
                <DataTable
                    value={recentTransactions}
                    rows={5}
                    paginator
                    responsiveLayout="scroll"
                >
                    <Column field="no" header="#" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                    <Column
                        field="scheduled_payment"
                        header="Scheduled Payment"
                        sortable
                    ></Column>
                    <Column
                        field="principal_amt"
                        header="Principal Amount"
                        sortable
                    ></Column>
                    <Column
                        field="interest"
                        header="Interest"
                        sortable
                    ></Column>
                    <Column
                        field="beginning_bal"
                        header="Beginning Balance"
                        sortable
                    ></Column>
                    <Column
                        field="ending_bal"
                        header="Ending Balance"
                        sortable
                    ></Column>
                    <Column
                        field="cumulative_interest"
                        header="Cumulative Interest"
                        sortable
                    ></Column>
                </DataTable>
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
