import React, { useState, useEffect } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import App from "../../App";
import Users from "../Users";

export default function ListUser({ users }) {
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
                </DataTable>
            </div>
        </div>
    );
}

ListUser.layout = (page) => <App>{<Users>{page}</Users>}</App>;
