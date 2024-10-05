import React, { useState, useRef } from 'react';
import App from "../../App";
import Users from "../Users";

//Methods
import { submitUpdateUserForm } from '../../../Methods/MasterFiles/Users/UpdateUser/Submit/SubmitFormData';

//Message Popper
import { Toast } from 'primereact/toast';

//Elements
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";

export default function EditUser({ user }) {

    const [formData, setFormData] = useState({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        is_active: user.is_active
    });

    const options = [
        { label: 'Active', value: 'Y' },
        { label: 'Inactive', value: 'N' }
    ];

    const toast = useRef(null);

    const handleStatusChange = (e) => {
        setFormData({ ...formData, is_active: e.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitUpdateUserForm(formData, toast);
    };

    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-4">Update User</h2>
                <Toast ref={toast} />
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <InputText type="hidden" value={formData.id}/>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="first_name"
                                    value={formData.first_name}
                                    required
                                    autoComplete="off"
                                    disabled
                                />
                                <label htmlFor="first_name">First Name</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="last_name"
                                    value={formData.last_name}
                                    required
                                    autoComplete="off"
                                    disabled
                                />
                                <label htmlFor="last_name">Last Name</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="email"
                                    value={formData.email}
                                    required
                                    autoComplete="off"
                                    disabled
                                />
                                <label htmlFor="email">Email</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <SelectButton
                                    value={formData.is_active}
                                    onChange={handleStatusChange}
                                    options={options} />
                            </FloatLabel>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            icon="pi pi-check"
                            iconPos="right"
                            label="Update"
                            severity="success"
                            type="submit"
                            className="w-auto p-2 text-white rounded-md bg-blue-500 hover:bg-green-600 transition duration-200"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

EditUser.layout = (page) => <App>{<Users>{page}</Users>}</App>;
