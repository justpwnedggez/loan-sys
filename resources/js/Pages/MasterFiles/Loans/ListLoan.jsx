import App from "@/Pages/App";
import Loan from "@/Pages/MasterFiles/Loan";

//Elements
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function listLoan({ loans }) {
    const actionBodyTemplate = (rowData) => {
        return (
            <Button
                label="View"
                icon="pi pi-eye"
                className="p-button-sm p-button-primary"
                onClick={() => (window.location.href = rowData.action)} // Navigate to the Laravel route
            />
        );
    };

    return (
        <div>
            <div className="overflow-x-auto mt-6">
                <DataTable
                    value={loans}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                >
                    <Column field="no" header="#"></Column>
                    <Column field="loan_code" header="Loan Code"></Column>
                    <Column field="loan_name" header="Loan Name"></Column>
                    <Column field="max_loan_amount" header="Maximum Loan Amount"></Column>
                    <Column field="loan_period" header="Loan Period (in months)"></Column>
                    <Column field="status" header="Status"></Column>
                    <Column field="date_created" header="Created At"></Column>
                    <Column
                        header="Actions"
                        body={actionBodyTemplate} // Use the custom template for action buttons
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
}

listLoan.layout = (page) => <App>{<Loan>{page}</Loan>}</App>;
