

import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

//Modals
import { LoanTransSelectionList } from "@/Components/SideBar/Approvals/SearchLoanTransModal";

export default function LoanInformation({ formData, isDialogVisible, setDialogVisible, selectLoanTrans, stepperRef }) {


    const openSearchDialog = () => {
        setDialogVisible(true);
    };

    return (
        <div>
            <div className="flex flex-column h-12rem">
                <Card
                    style={{ flexBasis: "90rem" }}
                    className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
                    title=<div className="flex justify-between">
                        Member Information
                        <Button
                            icon="pi pi-search"
                            onClick={openSearchDialog}
                        />
                    </div>
                >

                    <div className="p-fluid grid grid-cols-2 gap-4">
                        <div className="field col">
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Member Code:
                                </span>{" "}
                                <i>{formData?.mem_code}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Member Name:
                                </span>{" "}
                                <i>{formData?.mem_name}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Birth Date:
                                </span>{" "}
                                <i>{formData?.birth_date}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Age:
                                </span>{" "}
                                <i>{formData?.age}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Phone No.:
                                </span>{" "}
                                <i>{formData?.phone_number}</i>
                            </p>
                            <p className="m-0 text-capitalize">
                                <span className="font-bold underline">
                                    Occupation:
                                </span>{" "}
                                <i>{formData?.occupation}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Gross Annual Income:
                                </span>{" "}
                                <i>{formData?.gross_annual_income}</i>
                            </p>
                        </div>
                        <div className="field col">
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Cooperative Member of:
                                </span>{" "}
                                <i>{formData?.cooperative_member_name}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    RSBSA:
                                </span>{" "}
                                <i>{formData?.rsbsa}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Farm Area:
                                </span>{" "}
                                <i>{formData?.farm_area}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Farm Location:
                                </span>{" "}
                                <i>{formData?.farm_location}</i>
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="flex flex-column h-12rem">
                <Card
                    className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto mt-4"
                    style={{ flexBasis: "90rem" }}
                    title=<div className="flex justify-between">
                        Loan Transaction Information
                    </div>
                >
                    <div className="p-fluid grid grid-cols-2 gap-4">
                        <div className="field col">
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Transaction No.:
                                </span>{" "}
                                <i>{formData?.trans_no}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Collateral Asset Type:
                                </span>{" "}
                                <i>{formData?.collat_asset_type}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Loan Name:
                                </span>{" "}
                                <i>{formData?.loan_name}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Maximum Loan Amount:
                                </span>{" "}
                                <i>{formData?.max_loan_amount}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Loan Period:
                                </span>{" "}
                                <i>{formData?.loan_period}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Interest:
                                </span>{" "}
                                <i>{formData?.interest}</i>
                            </p>
                            <p className="m-0 text-capitalize">
                                <span className="font-bold underline">
                                    Loan Purpose:
                                </span>{" "}
                                <i>{formData?.loan_purpose}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Service Fee:
                                </span>{" "}
                                <i>{formData?.service_fee}</i>
                            </p>
                        </div>
                        <div className="field col">
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Collateral Asset Description:
                                </span>{" "}
                                <i>{formData?.collat_asset_desc}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Principal Amount:
                                </span>{" "}
                                <i>{formData?.principal_amt}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Total Interest:
                                </span>{" "}
                                <i>{formData?.total_interest}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Service Deduction:
                                </span>{" "}
                                <i>{formData?.service_deduction}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Net Amount:
                                </span>{" "}
                                <i>{formData?.net_amt}</i>
                            </p>
                        </div>
                    </div>
                    {/* Modal for selecting a member */}
                    <Dialog
                        header="Select a Transaction"
                        visible={isDialogVisible}
                        onHide={() => setDialogVisible(false)}
                        style={{ width: "50vw" }}
                    >
                        <LoanTransSelectionList onSelect={selectLoanTrans} />
                    </Dialog>
                </Card>
            </div>
            <div className="flex pt-4 justify-end">
                <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={() => stepperRef.current.nextCallback()}
                />
            </div>
        </div>
    );
}
