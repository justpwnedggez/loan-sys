import App from "../../App";
import Users from "../Users";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function ListUser() {
    const products = [
        { no: '1', firstname: 'Chris', lastname: 'Boyles', username: 'test', role: 'Admin', status: 'Active' },
        { no: '2', firstname: 'Paolo', lastname: 'Cuento', username: 'test', role: 'User', status: 'Active' },
        { no: '3', firstname: 'Cherry', lastname: 'Farinas', username: 'test', role: 'User', status: 'Active' },
        { no: '4', firstname: 'Oliver', lastname: 'Santiago', username: 'test', role: 'User', status: 'Active' },
    ];

    return (
        <div>
            <div className="overflow-x-auto mt-6">
                <DataTable
                    value={products}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                >
                    <Column field="no" header="#"></Column>
                    <Column field="firstname" header="First Name"></Column>
                    <Column field="lastname" header="Last Name"></Column>
                    <Column field="username" header="Username"></Column>
                    <Column field="role" header="Role"></Column>
                    <Column field="status" header="Status"></Column>
                    <Column field="action" header="Action"></Column>
                </DataTable>
            </div>
        </div>
    );
}

ListUser.layout = (page) => <App>{<Users>{page}</Users>}</App>;
