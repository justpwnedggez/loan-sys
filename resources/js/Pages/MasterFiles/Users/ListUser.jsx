import App from "../../App";
import Users from "../Users";

import React from 'react';

//Elements
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from 'primereact/button';

export default function ListUser({ users }) {

    // Template for the "Actions" column
    const actionBodyTemplate = (rowData) => {
        return (
            <Button
                label="View"
                icon="pi pi-eye"
                className="p-button-sm p-button-primary"
                onClick={() => window.location.href = rowData.action} // Navigate to the Laravel route
            />
        );
    };

    return (
        <div>
            <div className="overflow-x-auto mt-6">
                <DataTable
                    value={users}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                >
                    <Column field="no" header="#"></Column>
                    <Column field="first_name" header="First Name"></Column>
                    <Column field="last_name" header="Last Name"></Column>
                    <Column field="email" header="Email"></Column>
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

ListUser.layout = (page) => <App>{<Users>{page}</Users>}</App>;
