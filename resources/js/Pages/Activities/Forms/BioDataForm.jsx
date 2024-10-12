import React, { useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import FlexibleCheckboxGroup from "@/Components/Checkbox/FlexibleCheckboxGroup";

export default function BioDataForm() {
    // Initializing form data from localStorage if available
    const initialFormData = JSON.parse(localStorage.getItem("biodata")) || {
        first_name: "",
        last_name: "",
        middle_name: "",
        present_address: "",
        permanent_address: "",
        birthdate: "",
        age: "",
        birthplace: "",
        religious_affiliation: "",
        tribe: "",
        civil_status: "",
        cellphone_number: "",
        tin: "",
        educational_attainment: "",
        occupation: "",
        beneficiary_name1: "",
        beneficiary_rel1: "",
        beneficiary_name2: "",
        beneficiary_rel2: "",
        beneficiary_name3: "",
        beneficiary_rel3: "",
        cooperative_member: "",
        rsbsa_status: [],
        income_range: [],
        farm_area: "",
        farm_location: "",
        reason_for_joining: "",
        father_first_name: "",
        father_middle_name: "",
        father_last_name: "",
        mother_first_name: "",
        mother_middle_name: "",
        mother_last_name: "",
        bod_chairman: "John Doe Smith",
    };


    const [formData, setFormData] = useState(initialFormData);

    const [selectedStatus, setSelectedStatus] = useState(formData.civil_status);

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

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        localStorage.setItem("biodata", JSON.stringify(updatedData));
    };

    // Handle Dropdown changes
    const handleDropdownChange = (e) => {
        const updatedData = { ...formData, civil_status: e.value };
        setFormData(updatedData);
        localStorage.setItem("biodata", JSON.stringify(updatedData));
        setSelectedStatus(e.value);
    };

    useEffect(() => {
        // Initialize formData from localStorage if available
        const storedData = JSON.parse(localStorage.getItem("biodata")) || {};
        setFormData((prev) => ({
            ...prev,
            income_range: storedData.income_range || [],
            rsbsa_status: storedData.rsbsa_status || [],
        }));
    }, []);

    const handleIncomeChange = (selectedValues) => {
        setFormData((prev) => ({ ...prev, income_range: selectedValues }));
        localStorage.setItem(
            "biodata",
            JSON.stringify({ ...formData, income_range: selectedValues })
        );
    };

    const handleRsbsaChange = (selectedValues) => {
        setFormData((prev) => ({ ...prev, rsbsa_status: selectedValues }));
        localStorage.setItem(
            "biodata",
            JSON.stringify({ ...formData, rsbsa_status: selectedValues })
        );
    };

    return (
        <div className="grid grid-cols-3 gap-1 mb-4">
            <div>
                <label className="block font-medium">Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block font-medium">Middle Name:</label>
                <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium">Present Address:</label>
                <input
                    type="text"
                    name="present_address"
                    value={formData.present_address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium">Permanent Address:</label>
                <input
                    type="text"
                    name="permanent_address"
                    value={formData.permanent_address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div>
                <label className="block font-medium">Birthdate:</label>
                <input
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div>
                <label className="block font-medium">Age:</label>
                <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div>
                <label className="block font-medium">Birthplace:</label>
                <input
                    type="text"
                    name="birthplace"
                    value={formData.birthplace}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">
                    Religious Affiliation:
                </label>
                <input
                    type="text"
                    name="religious_affiliation"
                    value={formData.religious_affiliation}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div>
                <label className="block font-medium">Tribe:</label>
                <input
                    type="text"
                    name="tribe"
                    value={formData.tribe}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div>
                <label className="block font-medium">Civil Status:</label>
                <Dropdown
                    value={selectedStatus}
                    onChange={handleDropdownChange}
                    options={[
                        { label: "Single", value: "S" },
                        { label: "Married", value: "M" },
                        { label: "Divorced", value: "D" },
                    ]}
                    placeholder="Select Marital Status"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[34px]"
                    style={{ height: "38px" }}
                />
            </div>

            <div>
                <label className="block font-medium">Cellphone Number:</label>
                <input
                    type="text"
                    name="cellphone_number"
                    value={formData.cellphone_number}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">
                    Tax Identification Number (TIN):
                </label>
                <input
                    type="text"
                    name="tin"
                    value={formData.tin}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">
                    Highest Educational Attainment:
                </label>
                <input
                    type="text"
                    name="educational_attainment"
                    value={formData.educational_attainment}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div>
                <label className="block font-medium">Occupation:</label>
                <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            {/* FlexibleCheckboxGroup for RSBSA and Income */}
            <div className="col-span-3">
                <label className="block font-medium mb-2">
                    Gross Annual Income:
                </label>
                <FlexibleCheckboxGroup
                    options={incomeRanges}
                    name="income"
                    label="Income Range"
                    onChange={handleIncomeChange}
                    selectedOptions={formData.income_range}
                />
            </div>

            <div>
                <label className="block font-medium">Father's Name:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="father_last_name"
                    value={formData.father_last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="father_first_name"
                    value={formData.father_first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="father_middle_name"
                    value={formData.father_middle_name}
                    onChange={handleChange}
                    placeholder="Middle Name"
                />
            </div>
            <div>
                <label className="block font-medium">Mother's Name:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="mother_last_name"
                    value={formData.mother_last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="mother_first_name"
                    value={formData.mother_first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="mother_middle_name"
                    value={formData.mother_middle_name}
                    onChange={handleChange}
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
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="beneficiary_name1"
                            value={formData.beneficiary_name1}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="beneficiary_rel1"
                            value={formData.beneficiary_rel1}
                            onChange={handleChange}
                            placeholder="Relationship"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="beneficiary_name2"
                            value={formData.beneficiary_name2}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="beneficiary_rel2"
                            value={formData.beneficiary_rel2}
                            onChange={handleChange}
                            placeholder="Relationship"
                        />
                    </div>
                    <div className="col-span-2">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="beneficiary_name3"
                            value={formData.beneficiary_name3}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            name="beneficiary_rel3"
                            value={formData.beneficiary_rel3}
                            onChange={handleChange}
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
                    name="cooperative_member"
                    value={formData.cooperative_member}
                    onChange={handleChange}
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium mb-2">RSBSA Status:</label>
                <FlexibleCheckboxGroup
                    options={rsbsaBool}
                    name="rsbsa"
                    onChange={handleRsbsaChange}
                    selectedOptions={formData.rsbsa_status}
                />
            </div>

            <div>
                <label className="block font-medium">
                    Farm Area (in hectares):
                </label>
                <input
                    type="text"
                    name="farm_area"
                    value={formData.farm_area}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">Farm Location:</label>
                <input
                    type="text"
                    name="farm_location"
                    value={formData.farm_location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium">Reason for Joining:</label>
                <InputTextarea
                    name="reason_for_joining"
                    value={formData.reason_for_joining}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
        </div>
    );
}
