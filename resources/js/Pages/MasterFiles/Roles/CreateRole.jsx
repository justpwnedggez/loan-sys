import React, { useState, useRef } from 'react';
import App from "../../App";
import Roles from "../Roles";

//Methods
import { submitCreateRoleForm } from '../../../Methods/MasterFiles/Roles/CreateRole/Submit/SubmitFormData';

//Message Popper
import { Toast } from 'primereact/toast';

//Elements
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function CreateRole({ roles }) {

    const [formData, setFormData] = useState({
        name: '',
    });

    const toast = useRef(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitCreateRoleForm(formData, toast);
        setFormData({ name: '' }); // Reset form after submission
    };

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
            <div>
                <h2 className="text-xl font-bold mb-4">Create Role</h2>
                <Toast ref={toast} />
                <form onSubmit={handleSubmit}>
                    {/* Flex container for input and button */}
                    <div className="flex items-center gap-4 mb-4">
                        {/* Input field */}
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="name">Role Name</label>
                            </FloatLabel>
                        </div>

                        {/* Submit button */}
                        <Button
                            icon="pi pi-check"
                            iconPos="right"
                            label=""
                            severity="success"
                            type="submit"
                            className="w-auto p-2 text-white rounded-md bg-gray-500 hover:bg-green-600 transition duration-200"
                        />
                    </div>
                </form>

                {/* Bordered table for listing roles */}
                <div className="overflow-x-auto mt-6">
                <DataTable
                    value={roles}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                >
                    <Column field="no" header="#"></Column>
                    <Column field="name" header="Role Name"></Column>
                    <Column field="date_created" header="Created At"></Column>
                    <Column
                        header="Actions"
                        body={actionBodyTemplate} // Use the custom template for action buttons
                    ></Column>
                </DataTable>
            </div>
            </div>
        </div>
    );
}

CreateRole.layout = (page) => <App>{<Roles>{page}</Roles>}</App>;
