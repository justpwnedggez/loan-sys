import App from '../App';
import React from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

// Import PrimeReact styles
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export default function LoanPayment() {
    const loanDetails = {
        amount: 10000,
        interestRate: 5.5,
        remainingBalance: 7500,
        nextPaymentDue: "2024-05-15",
      };

      const recentTransactions = [
        { date: "2024-04-15", type: "Payment", amount: 500 },
        { date: "2024-03-15", type: "Payment", amount: 500 },
        { date: "2024-02-15", type: "Payment", amount: 500 },
        { date: "2024-01-15", type: "Payment", amount: 500 },
        { date: "2023-12-15", type: "Payment", amount: 500 },
      ];

      const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <span className="text-xl text-900 font-bold">Loan Amortization</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      );

      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
          <Button label="View All Transactions" icon="pi pi-list" />
        </div>
      );

      const amountBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.amount);
      };

      const LoanDetailsCard = () => (
        <Card className="mb-4">
          <div className="grid">
            <div className="col-12 md:col-3 mb-4 md:mb-0">
              <div className="text-500 font-medium mb-2">Loan Amount</div>
              <div className="text-900 text-xl font-medium">
                ${loanDetails.amount.toLocaleString()}
              </div>
            </div>
            <div className="col-12 md:col-3 mb-4 md:mb-0">
              <div className="text-500 font-medium mb-2">Interest Rate</div>
              <div className="text-900 text-xl font-medium">
                {loanDetails.interestRate}%
              </div>
            </div>
            <div className="col-12 md:col-3 mb-4 md:mb-0">
              <div className="text-500 font-medium mb-2">Remaining Balance</div>
              <div className="text-900 text-xl font-medium">
                ${loanDetails.remainingBalance.toLocaleString()}
              </div>
            </div>
            <div className="col-12 md:col-3">
              <div className="text-500 font-medium mb-2">Next Payment Due</div>
              <div className="text-900 text-xl font-medium">
                {loanDetails.nextPaymentDue}
              </div>
            </div>
          </div>
        </Card>
      );

      return (
        <div className="card">
          <Card header={header} footer={footer} className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto">
            <LoanDetailsCard />

            <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
            <DataTable value={recentTransactions} rows={5} paginator responsiveLayout="scroll">
              <Column field="date" header="Date" sortable></Column>
              <Column field="type" header="Type" sortable></Column>
              <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
            </DataTable>
          </Card>
        </div>
      );
}

LoanPayment.layout = (page) => <App children={page} />;
