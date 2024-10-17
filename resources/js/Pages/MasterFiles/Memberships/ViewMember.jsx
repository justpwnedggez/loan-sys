import App from "@/Pages/App";
import Memberships from "@/Pages/MasterFiles/Membership";

import React, { useState, useRef  } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import FlexibleCheckboxGroup from "@/Components/Checkbox/FlexibleCheckboxGroup";

export default function viewMember({ member }) {

    const [formData, setFormData] = useState({
        first_name: member.first_name,
        last_name: member.last_name,
        middle_name: member.middle_name,
        present_address: member.present_address,
        permanent_address: member.permanent_address,
        birth_date: member.birth_date,
        age: member.age,
        birth_place: member.birth_place,
        religion: member.religion,
        tribe: member.tribe,
        civil_status: member.civil_status,
        phone_number: member.phone_number,
        tin_no: member.tin_no,
        highest_educ_attainment: member.highest_educ_attainment,
        occupation: member.occupation,
        beneficiaries: member.beneficiaries,
        rsbsa_status: member.rsbsa,
        income_range: member.gross_annual_income,
        farm_area: member.farm_area,
        farm_location: member.farm_location,
        cooperative_member_name: member.cooperative_member_name,
        reason_for_joining: member.reason_for_joining,
        parents: member.parents,
        bod_chairman: "John Doe Smith",
    });
    console.log(member);
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

     // Create a ref to capture the component HTML for printing
     const printRef = useRef();

     // Function to print the component
     const handlePrint = () => {
         const printWindow = window.open('', '_blank'); // Open a new window
         printWindow.document.write(`
             <html>
                 <head>
                     <title>Print Member Details</title>
                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" /> <!-- Include Tailwind CSS for styling -->
                 </head>
                 <body>
                     <div>${printRef.current.innerHTML}</div> <!-- Insert component HTML -->
                 </body>
             </html>
         `);
         printWindow.document.close();
         printWindow.print(); // Trigger the print dialog
     };

    return (
        <div className="grid grid-cols-3 gap-1 mb-4">
            <div>
                <label className="block font-medium">Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>
            <div>
                <label className="block font-medium">First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>
            <div>
                <label className="block font-medium">Middle Name:</label>
                <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium">Present Address:</label>
                <input
                    type="text"
                    name="present_address"
                    value={formData.present_address}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium">Permanent Address:</label>
                <input
                    type="text"
                    name="permanent_address"
                    value={formData.permanent_address}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Birthdate:</label>
                <input
                    type="date"
                    name="birth_date"
                    value={formData.birth_date}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Age:</label>
                <input
                    type="text"
                    name="age"
                    value={formData.age}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Birthplace:</label>
                <input
                    type="text"
                    name="birth_place"
                    value={formData.birth_place}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">
                    Religious Affiliation:
                </label>
                <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Tribe:</label>
                <input
                    type="text"
                    name="tribe"
                    value={formData.tribe}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Civil Status:</label>
                <Dropdown
                    value={formData.civil_status}
                    options={[
                        { label: "Single", value: "S" },
                        { label: "Married", value: "M" },
                        { label: "Divorced", value: "D" },
                    ]}
                    placeholder="Select Marital Status"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[34px]"
                    style={{ height: "38px" }}
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Cellphone Number:</label>
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">
                    Tax Identification Number (TIN):
                </label>
                <input
                    type="text"
                    name="tin_no"
                    value={formData.tin_no}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">
                    Highest Educational Attainment:
                </label>
                <input
                    type="text"
                    name="highest_educ_attainment"
                    value={formData.highest_educ_attainment}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Occupation:</label>
                <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
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
                    selectedOptions={formData.income_range}
                    disabled={true}
                />
            </div>

            <div>
                <label className="block font-medium">Father's Name:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="father_last_name"
                    value={
                        formData.parents.find(
                            (parent) => parent.parent_type === "F"
                        )?.last_name || ""
                    }
                    placeholder="Last Name"
                    readOnly
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="father_first_name"
                    value={
                        formData.parents.find(
                            (parent) => parent.parent_type === "F"
                        )?.first_name || ""
                    }
                    placeholder="First Name"
                    readOnly
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="father_middle_name"
                    value={
                        formData.parents.find(
                            (parent) => parent.parent_type === "F"
                        )?.middle_name || ""
                    }
                    placeholder="Middle Name"
                    readOnly
                />
            </div>

            <div>
                <label className="block font-medium">Mother's Name:</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="mother_last_name"
                    value={
                        formData.parents.find(
                            (parent) => parent.parent_type === "M"
                        )?.last_name || ""
                    }
                    placeholder="Last Name"
                    readOnly
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="mother_first_name"
                    value={
                        formData.parents.find(
                            (parent) => parent.parent_type === "M"
                        )?.first_name || ""
                    }
                    placeholder="First Name"
                    readOnly
                />
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2"
                    name="mother_middle_name"
                    value={
                        formData.parents.find(
                            (parent) => parent.parent_type === "M"
                        )?.middle_name || ""
                    }
                    placeholder="Middle Name"
                    readOnly
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium mb-2">
                    Designated Beneficiaries:
                </label>
                <div className="grid grid-cols-3 gap-1">
                    {formData.beneficiaries.map((beneficiary, index) => (
                        <React.Fragment key={beneficiary.id}>
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    name={`beneficiary_name${index + 1}`} // Use index to create unique names
                                    value={beneficiary.name} // Use the name from the beneficiary object
                                    placeholder="Name"
                                    readOnly
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    name={`beneficiary_rel${index + 1}`} // Use index to create unique names
                                    value={beneficiary.relationship} // Use the relationship from the beneficiary object
                                    placeholder="Relationship"
                                    readOnly
                                />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="col-span-3">
                <label className="block font-medium">
                    Cooperative of which you are member:
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="cooperative_member_name"
                    value={formData.cooperative_member_name}
                    readOnly
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium mb-2">RSBSA Status:</label>
                <FlexibleCheckboxGroup
                    options={rsbsaBool}
                    name="rsbsa"
                    selectedOptions={formData.rsbsa_status}
                    disabled={true}
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
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div className="col-span-2">
                <label className="block font-medium">Farm Location:</label>
                <input
                    type="text"
                    name="farm_location"
                    value={formData.farm_location}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>

            <div className="col-span-3">
                <label className="block font-medium">Reason for Joining:</label>
                <InputTextarea
                    name="reason_for_joining"
                    value={formData.reason_for_joining}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                />
            </div>
        </div>
    );
}

viewMember.layout = (page) => <App>{<Memberships>{page}</Memberships>}</App>;
