import React, { useState, useRef } from 'react';
import App from "../../App";
import Roles from "../Roles";

// Methods
import { submitUpdateRoleForm } from '../../../Methods/MasterFiles/Roles/UpdateRole/Submit/SubmitFormData';

// Message Popper
import { Toast } from 'primereact/toast';

// Elements
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Checkbox } from 'primereact/checkbox';  // Import Checkbox

export default function UpdateRole({ role }) {
    console.log(role);
    const [formData, setFormData] = useState({
        id: role.original.id,
        role_name: role.original.role_name,
        permissions: {
            dashboard: {
                enabled: role.original.permissions.dashboard.enabled,
            },
            activities: {
                enabled: role.original.permissions.activities.enabled,
                transactions: role.original.permissions.activities.transactions,
                membership: role.original.permissions.activities.membership,
            },
            approvals: {
                enabled: role.original.permissions.approvals.enabled,
                loan_approvals: role.original.permissions.approvals.loan_approvals,
                membership_approvals: role.original.permissions.approvals.membership_approvals,
            },
            master_files: {
                enabled: role.original.permissions.master_files.enabled,
                users: role.original.permissions.master_files.users,
                roles: role.original.permissions.master_files.roles,
                memberships: role.original.permissions.master_files.memberships,
                loans: role.original.permissions.master_files.loans,
            },
            reports: {
                enabled: role.original.permissions.reports.enabled,
                loan_portfolio: role.original.permissions.reports.loan_portfolio,
            },
            sessions: {
                enabled: role.original.permissions.sessions.enabled,
                active_sessions: role.original.permissions.sessions.active_sessions,
            },
        },
    });

    const toast = useRef(null);

    // Handle checkbox change for permissions
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const [parent, child] = name.split('.');

        setFormData((prevFormData) => {
            // Handle parent checkboxes
            if (!child) {
                return {
                    ...prevFormData,
                    permissions: {
                        ...prevFormData.permissions,
                        [parent]: {
                            ...prevFormData.permissions[parent],
                            enabled: checked,
                        },
                    },
                };
            }

            // Handle child checkboxes
            return {
                ...prevFormData,
                permissions: {
                    ...prevFormData.permissions,
                    [parent]: {
                        ...prevFormData.permissions[parent],
                        [child]: checked,
                    },
                },
            };
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        submitUpdateRoleForm(formData, toast);
    };

    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-4">Update Role</h2>
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
                                    id="role_name"
                                    value={formData.role_name}
                                    required
                                    autoComplete="off"
                                    disabled
                                />
                                <label htmlFor="role_name">Role Name</label>
                            </FloatLabel>
                        </div>
                    </div>

                    {/* Checkbox Section for Permissions */}
                    <div className="mb-4">
                        <h3 className="font-bold mb-2">Role Permissions</h3>
                        <div className="flex flex-wrap mb-4"> {/* Wrap for horizontal alignment */}
                            {/* Dashboard Checkbox */}
                            <div className="flex items-center mr-4">
                                <Checkbox
                                    inputId="dashboard_enabled"
                                    name="dashboard.enabled"
                                    checked={formData.permissions.dashboard.enabled}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="dashboard_enabled" className="ml-2">Dashboard</label>
                            </div>

                            {/* Activities Checkbox */}
                            <div className="flex items-center mr-4">
                                <Checkbox
                                    inputId="activities_enabled"
                                    name="activities.enabled"
                                    checked={formData.permissions.activities.enabled}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="activities_enabled" className="ml-2">Activities</label>
                            </div>

                            {/* Approvals Checkbox */}
                            <div className="flex items-center mr-4">
                                <Checkbox
                                    inputId="approvals_enabled"
                                    name="approvals.enabled"
                                    checked={formData.permissions.approvals.enabled}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="approvals_enabled" className="ml-2">Approvals</label>
                            </div>

                            {/* Master Files Checkbox */}
                            <div className="flex items-center mr-4">
                                <Checkbox
                                    inputId="master_files_enabled"
                                    name="master_files.enabled"
                                    checked={formData.permissions.master_files.enabled}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="master_files_enabled" className="ml-2">Master Files</label>
                            </div>

                            {/* Reports Checkbox */}
                            <div className="flex items-center mr-4">
                                <Checkbox
                                    inputId="reports_enabled"
                                    name="reports.enabled"
                                    checked={formData.permissions.reports.enabled}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="reports_enabled" className="ml-2">Reports</label>
                            </div>

                            {/* Sessions Checkbox */}
                            <div className="flex items-center mr-4">
                                <Checkbox
                                    inputId="sessions_enabled"
                                    name="sessions.enabled"
                                    checked={formData.permissions.sessions.enabled}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="sessions_enabled" className="ml-2">Sessions</label>
                            </div>
                        </div>

                        {/* Sub-checkboxes Section */}
                        <div className="flex flex-col">
                            {formData.permissions.activities.enabled && (
                                <div className="ml-4 mb-2">  {/* Indent for Sub-Checkboxes */}
                                    <h4 className="font-bold mb-1">Activities</h4>
                                    <div className="flex flex-col ml-2">
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="activities_transactions"
                                                name="activities.transactions"
                                                checked={formData.permissions.activities.transactions}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="activities_transactions" className="ml-2">Transaction</label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="activities_membership"
                                                name="activities.membership"
                                                checked={formData.permissions.activities.membership}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="activities_membership" className="ml-2">Membership</label>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {formData.permissions.approvals.enabled && (
                                <div className="ml-4 mb-2">  {/* Indent for Sub-Checkboxes */}
                                    <h4 className="font-bold mb-1">Approvals</h4>
                                    <div className="flex flex-col ml-2">
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="approvals_loan_approvals"
                                                name="approvals.loan_approvals"
                                                checked={formData.permissions.approvals.loan_approvals}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="approvals_loan_approvals" className="ml-2">Loans</label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="approvals_membership_approvals"
                                                name="approvals.membership_approvals"
                                                checked={formData.permissions.approvals.membership_approvals}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="approvals_membership_approvals" className="ml-2">Membership</label>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {formData.permissions.master_files.enabled && (
                                <div className="ml-4 mb-2">  {/* Indent for Sub-Checkboxes */}
                                    <h4 className="font-bold mb-1">Master Files</h4>
                                    <div className="flex flex-col ml-2">
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="master_files_users"
                                                name="master_files.users"
                                                checked={formData.permissions.master_files.users}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="master_files_users" className="ml-2">Users</label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="master_files_roles"
                                                name="master_files.roles"
                                                checked={formData.permissions.master_files.roles}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="master_files_roles" className="ml-2">Roles</label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="master_files_memberships"
                                                name="master_files.memberships"
                                                checked={formData.permissions.master_files.memberships}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="master_files_memberships" className="ml-2">Memberships</label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="master_files_loans"
                                                name="master_files.loans"
                                                checked={formData.permissions.master_files.loans}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="master_files_loans" className="ml-2">Loans</label>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {formData.permissions.reports.enabled && (
                                <div className="ml-4 mb-2">  {/* Indent for Sub-Checkboxes */}
                                    <h4 className="font-bold mb-1">Reports</h4>
                                    <div className="flex flex-col ml-2">
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="reports_loan_portfolio"
                                                name="reports.loan_portfolio"
                                                checked={formData.permissions.reports.loan_portfolio}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="reports_loan_portfolio" className="ml-2">Loan Portfolio</label>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {formData.permissions.sessions.enabled && (
                                <div className="ml-4 mb-2">  {/* Indent for Sub-Checkboxes */}
                                    <h4 className="font-bold mb-1">Sessions</h4>
                                    <div className="flex flex-col ml-2">
                                        <div className="flex items-center">
                                            <Checkbox
                                                inputId="sessions_active_sessions"
                                                name="sessions.active_sessions"
                                                checked={formData.permissions.sessions.active_sessions}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor="sessions_active_sessions" className="ml-2">Active Sessions</label>
                                        </div>
                                    </div>
                                </div>
                            )}
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

UpdateRole.layout = (page) => <App>{<Roles>{page}</Roles>}</App>;
