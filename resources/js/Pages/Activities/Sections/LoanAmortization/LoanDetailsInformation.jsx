import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const LoanDetailsInformation = ({ formData }) => {
    return (
        <DataTable
            value={formData?.loan_payments}
            rows={5}
            paginator
            responsiveLayout="scroll"
        >
            <Column field="no" header="#" sortable></Column>
            <Column field="payment_date" header="Date" sortable></Column>
            <Column
                field="principal_amt"
                header="Principal Amount"
                sortable
            ></Column>
            <Column
                field="beginning_balance"
                header="Beginning Balance"
                sortable
            ></Column>
            <Column
                field="ending_balance"
                header="Ending Balance"
                sortable
            ></Column>
        </DataTable>
    );
};
