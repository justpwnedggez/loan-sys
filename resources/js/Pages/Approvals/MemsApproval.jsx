import App from "../App";

import React, { useRef, useState } from "react";

//Elements
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";

import { InputTextarea } from "primereact/inputtextarea";

//Methods
import { GenerateTransactionNumber } from "@/Methods/Common/TransNumber";
import MemberInformation from "./StepperPanel/Sections/MemsApproval/MemberInformation";
import MemberRequirements from "./StepperPanel/Sections/MemsApproval/MemberRequirements";
import ApprovalRelease from "./StepperPanel/Sections/MemsApproval/ApprovalRelease";

export default function MemsApproval() {
    const [formData, setFormData] = useState({
        //Member Info
        mem_code: "",
        mem_name: "",
        birth_date: "",
        age: "",
        phone_number: "",
        occupation: "",
        gross_annual_income: "",
        cooperative_member_name: "",
        rsbsa: "",
        farm_area: "",
        farm_location: "",

        //Others
        present_addr: "",
        permanent_addr: "",
        birth_place: "",
        religion: "",
        tribe: "",
        civil_status: "",
        tin_no: "",
        highest_educ_attain: "",
        parents: [],
        beneficiaries: [],
        reason_for_joining: "",
        //Approval Data
        approve_code: "APRV#" + GenerateTransactionNumber(),
    });

    const [isDialogVisible, setDialogVisible] = useState(false);

    const stepperRef = useRef(null);

    const selectMember = (member) => {
        setFormData((prevData) => ({
            ...prevData,
            //Member Info
            mem_code: member?.mem_code,
            mem_name: member?.first_name + " " + member?.middle_name + " " + member?.last_name,
            birth_date: member?.birth_date,
            age: member?.age,
            phone_number: member?.phone_number,
            occupation: member?.occupation,
            gross_annual_income: member?.gross_annual_income,
            cooperative_member_name: member?.cooperative_member_name,
            rsbsa: member?.rsbsa,
            farm_area: member?.farm_area,
            farm_location: member?.farm_location,

            //Others
            present_addr: member?.present_address,
            permanent_addr: member?.permanent_address,
            birth_place: member?.birth_place,
            religion: member?.religion,
            tribe: member?.tribe,
            civil_status: member?.civil_status,
            tin_no: member?.tin_no,
            highest_educ_attain: member?.highest_educ_attainment,
            parents: member?.member_parent,
            beneficiaries: member?.member_beneficiary,
            reason_for_joining: member?.farm_location,
        }));

        setDialogVisible(false);
    };

    return (
        <div className="card flex justify-content-center">
            <Stepper ref={stepperRef} style={{ flexBasis: "90rem" }}>
                <StepperPanel header="Loan Application">
                    <MemberInformation
                        formData={formData}
                        isDialogVisible={isDialogVisible}
                        setDialogVisible={setDialogVisible}
                        selectMember={selectMember}
                        stepperRef={stepperRef}
                    />
                </StepperPanel>
                <StepperPanel header="Requirements Review">
                    <MemberRequirements stepperRef={stepperRef} />
                </StepperPanel>
                <StepperPanel header="Release Approval">
                    <ApprovalRelease
                        stepperRef={stepperRef}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </StepperPanel>
            </Stepper>
        </div>
    );
}

MemsApproval.layout = (page) => <App children={page} />;
