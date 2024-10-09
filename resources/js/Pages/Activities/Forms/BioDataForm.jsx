import React, { useState } from "react";

//Elements
import { InputTextarea } from 'primereact/inputtextarea';

//Methods
import FlexibleCheckboxGroup from "@/Components/Checkbox/FlexibleCheckboxGroup";

export default function BioDataForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        is_active: "Y",
        password: "",
        confirmPassword: "",
    });

    const [incomeRange, setIncomeRange] = useState([]);
    const [rsbsaStatus, setRsbsaStatus] = useState([]);

    const incomeRanges = [
        { id: "below50k", label: "Below 50,000" },
        { id: "50kTo100k", label: "50,000 to 100,000" },
        { id: "100kTo200k", label: "100,000 to 200,000" },
        { id: "above200k", label: "Above 200,000" },
    ];

    const rsbsaBool = [
        { id: "Y", label: "Yes" },
        { id: "N", label: "No" },
    ];

    const handleIncomeChange = (selectedValues) => {
        setIncomeRange(selectedValues);
        console.log("Selected income range:", selectedValues);
    };

    const handleRsbsaChange = (selectedValues) => {
        setRsbsaStatus(selectedValues);
        console.log("RSBSA selection:", selectedValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
    };

    return (
        <div className="grid grid-cols-3 gap-1 mb-4">
            <div>
                <label className="block font-medium">Last Name:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">First Name:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Middle Name:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-3">
                <label className="block font-medium">Present Address:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-3">
                <label className="block font-medium">Permanent Address:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Birthdate:</label>
                <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Age:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Birthplace:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-2">
                <label className="block font-medium">
                    Religious Affiliation:
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Tribe:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Civil Status:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-2">
                <label className="block font-medium">
                    Name of Husband/Wife if married:
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Cellphone Number:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-2">
                <label className="block font-medium">
                    Tax Identification Number (TIN):
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-2">
                <label className="block font-medium">
                    Highest Educational Attainment:
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Occupation:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-3">
                <label className="block font-medium mb-2">
                    Gross Annual Income:
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <FlexibleCheckboxGroup
                        options={incomeRanges}
                        name="income"
                        label="Income Range"
                        onChange={handleIncomeChange}
                    />
                </div>
            </div>
            <div>
                <label className="block font-medium">Name of Father:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Last Name"
                />
            </div>
            <div>
                <label className="block font-medium">&nbsp;</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="First Name"
                />
            </div>
            <div>
                <label className="block font-medium">&nbsp;</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Middle Name"
                />
            </div>
            <div>
                <label className="block font-medium">Name of Mother:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Last Name"
                />
            </div>
            <div>
                <label className="block font-medium">&nbsp;</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="First Name"
                />
            </div>
            <div>
                <label className="block font-medium">&nbsp;</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Middle Name"
                />
            </div>
            <div className="col-span-3">
                <label className="block font-medium mb-2">
                    Designated Beneficiaries:
                </label>
                <div className="grid grid-cols-3 gap-1">
                    <div className="col-span-2">
                        <input
                            type="text"
                            id="beneficiaries"
                            name="beneficiaries"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="beneficiaries"
                            name="beneficiaries"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Relationship"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            type="text"
                            id="beneficiaries"
                            name="beneficiaries"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="beneficiaries"
                            name="beneficiaries"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Relationship"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            type="text"
                            id="beneficiaries"
                            name="beneficiaries"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="beneficiaries"
                            name="beneficiaries"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Relationship"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <label className="block font-medium">
                    Cooperative of which you are member:
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-3">
                <label className="block font-medium mb-2">
                    Are you a member of RSBSA:
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <FlexibleCheckboxGroup
                        options={rsbsaBool}
                        name="rsbsa"
                        onChange={handleRsbsaChange}
                    />
                </div>
            </div>
            <div>
                <label className="block font-medium">
                    Area of Farm Owned:
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-2">
                <label className="block font-medium">
                    Location:
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="col-span-3">
                <label className="block font-medium">
                    Reason for joining the cooperative:
                </label>
                <InputTextarea
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
        </div>
    );
}
