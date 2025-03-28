import React, { useState, useRef } from "react";
import App from "../../App";
import Users from "../Users";

//Methods
import { submitCreateUserForm } from "../../../Methods/MasterFiles/Users/CreateUser/Submit/SubmitFormData";

//Message Popper
import { Toast } from "primereact/toast";

//Elements
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { Dropdown } from "primereact/dropdown";

export default function CreateUser({ roles }) {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        is_active: "Y",
        user_role: "",
        password: "",
        confirmPassword: "",
    });

    const options = [
        { label: "Active", value: "Y" },
        { label: "Inactive", value: "N" },
    ];

    const toast = useRef(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value, user_role: e.value });
    };

    const handleStatusChange = (e) => {
        setFormData({ ...formData, is_active: e.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitCreateUserForm(formData, toast);
    };
    console.log(formData)
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-4">Create User</h2>
                <Toast ref={toast} />
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="first_name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
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
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="last_name">Last Name</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-at"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="email">Email</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-check-circle"></i>
                            </span>
                            <FloatLabel>
                                <SelectButton
                                    value={formData.is_active}
                                    onChange={handleStatusChange}
                                    options={options}
                                />
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="password">Password</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user-edit"></i>
                            </span>
                            <FloatLabel>
                                <Dropdown
                                    id="user_role"
                                    value={formData.user_role}
                                    onChange={handleInputChange}
                                    options={roles}
                                    optionLabel="name"
                                    placeholder="Select Role"
                                />
                                <label htmlFor="password">Role</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                            </FloatLabel>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            icon="pi pi-check"
                            iconPos="right"
                            label="Submit"
                            severity="success"
                            type="submit"
                            className="w-auto p-2 text-white rounded-md bg-gray-500 hover:bg-green-600 transition duration-200"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

CreateUser.layout = (page) => <App>{<Users>{page}</Users>}</App>;
