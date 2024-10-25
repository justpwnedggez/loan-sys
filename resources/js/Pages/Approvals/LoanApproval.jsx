import App from "../App";

import { useRef, useState } from "react";

//Elements
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";

//Methods
import { GenerateTransactionNumber } from "@/Methods/Common/TransNumber";

//Stepper View
import LoanInformation from "./StepperPanel/Sections/LoansApproval/LoanInformation";
import LoanRequirements from "./StepperPanel/Sections/LoansApproval/LoanRequirements";
import ApprovalRelease from "./StepperPanel/Sections/LoansApproval/ApprovalRelease";

export default function LoanApproval() {
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

        //Loan Trans Info
        loan_trans_id: "",
        trans_type: "LAP",
        approve_desc: "",
        trans_no: "",
        collat_asset_type: "",
        collat_asset_desc: "",
        loan_name: "",
        max_loan_amount: "",
        loan_period: "",
        interest: "",
        loan_purpose: "",
        service_fee: "",
        principal_amt: "",
        total_interest: "",
        service_deduction: "",
        net_amt: "",

        //Approval Data
        approve_code: 'APRV#' + GenerateTransactionNumber(),
        start_date: "",
        end_date: "",
    });

    const stepperRef = useRef(null);

    const [isDialogVisible, setDialogVisible] = useState(false);

    const selectLoanTrans = (loanTrans) => {
        setFormData((prevData) => ({
            ...prevData,
            //Member Info
            mem_id: loanTrans?.mem_id,
            mem_code: loanTrans?.mem_code,
            mem_name: loanTrans?.mem_name,
            birth_date: loanTrans?.birth_date,
            age: loanTrans?.age,
            phone_number: loanTrans?.phone_number,
            occupation: loanTrans?.occupation,
            gross_annual_income: loanTrans?.gross_annual_income,
            cooperative_member_name: loanTrans?.cooperative_member_name,
            rsbsa: loanTrans?.rsbsa,
            farm_area: loanTrans?.farm_area,
            farm_location: loanTrans?.farm_location,

            //Loan Trans Info
            loan_trans_id: loanTrans?.id,
            trans_type: "LAP",
            trans_no: loanTrans?.trans_no,
            collat_asset_type: loanTrans?.collat_asset_type,
            collat_asset_desc: loanTrans?.loan_collat_desc,
            loan_name: loanTrans?.loan_name,
            subscription_amount: loanTrans?.cbu,
            max_loan_amount: loanTrans?.max_loan_amount,
            loan_period: loanTrans?.loan_period,
            interest: loanTrans?.interest,
            loan_purpose: loanTrans?.loan_purpose,
            service_fee: loanTrans?.service_fee,
            principal_amt: loanTrans?.principal_amt,
            total_interest: loanTrans?.total_interest,
            service_deduction: loanTrans?.service_deduction,
            net_amt: loanTrans?.net_amt,
        }));

        setDialogVisible(false);
    };

    return (
        <div className="card flex justify-content-center">
            <Stepper ref={stepperRef} style={{ flexBasis: "90rem" }}>
                <StepperPanel header="Loan Application">
                    <LoanInformation formData={formData} isDialogVisible={isDialogVisible} setDialogVisible={setDialogVisible} selectLoanTrans={selectLoanTrans} stepperRef={stepperRef}/>
                </StepperPanel>
                <StepperPanel header="Requirements Review">
                    <LoanRequirements stepperRef={stepperRef}/>
                </StepperPanel>
                <StepperPanel header="Release Approval">
                    <ApprovalRelease stepperRef={stepperRef} formData={formData} setFormData={setFormData}/>
                </StepperPanel>
            </Stepper>
        </div>
    );
}

LoanApproval.layout = (page) => <App children={page} />;
