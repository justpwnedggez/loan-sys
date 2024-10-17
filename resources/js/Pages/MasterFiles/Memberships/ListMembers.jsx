import App from "@/Pages/App";
import Memberships from "@/Pages/MasterFiles/Membership";

//Elements
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function listMembers({ members }) {
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
                    value={members}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                >
                    <Column field="no" header="#"></Column>
                    <Column field="mem_code" header="Member Code"></Column>
                    <Column field="full_name" header="Name"></Column>
                    <Column field="occupation" header="Occupation"></Column>
                    <Column field="subscription_amount" header="Share Capital"></Column>
                    <Column field="subscription_years" header="Subscription Period"></Column>
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

listMembers.layout = (page) => <App>{<Memberships>{page}</Memberships>}</App>;
