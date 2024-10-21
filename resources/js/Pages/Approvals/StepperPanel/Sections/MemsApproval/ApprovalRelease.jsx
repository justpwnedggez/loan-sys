import { useRef } from "react";
import { usePage } from "@inertiajs/react";

//Elements
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
//Message Popper
import { Toast } from "primereact/toast";

//Submit
import { submitMemberApprovalForm } from "@/Methods/Approvals/MembershipApproval/Submit/submitMemberApprovalForm";

export default function ApprovalRelease({ stepperRef, formData, setFormData }) {
    const toast = useRef(null);
    const { auth } = usePage().props;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => {
            return { ...prevData, auth_user: auth.user.id, [id]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitMemberApprovalForm(formData, toast);
    };

    return (
        <div>
            <Toast ref={toast} />
            <div className="flex flex-column h-12rem">
                <Card
                    style={{ flexBasis: "90rem" }}
                    className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
                    title=<div className="flex justify-between">
                        Member Application Approval
                        <Button
                            icon="pi pi-check"
                            iconPos="right"
                            label="Submit"
                            severity="success"
                            type="submit"
                            className="w-auto p-1 text-xs text-white rounded-md bg-blue-500 hover:bg-green-600 transition duration-200 mt-2"
                            onClick={handleSubmit}
                        />
                    </div>
                >
                    <div className="p-fluid grid grid-cols-2 gap-7">
                        <div className="field col">
                            <p className="m-0">
                                <span className="font-bold">Approval No.:</span>
                                <i> {formData?.approve_code}</i>
                            </p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">
                                <span className="font-bold">Approved By:</span>
                                <i>
                                    {" "}
                                    {auth.user.first_name +
                                        " " +
                                        auth.user.last_name}
                                </i>
                            </p>
                            <p className="m-0">&nbsp;</p>
                            <label className="font-bold">Approve Status:</label>
                            <Dropdown
                                id="status"
                                value={formData?.status}
                                options={[
                                    {
                                        label: "Approved",
                                        value: "APRV",
                                    },
                                    {
                                        label: "Rejected",
                                        value: "RJTD",
                                    },
                                ]}
                                placeholder="Select Approval Status"
                                className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[34px]"
                                style={{ height: "38px" }}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="field col">
                            <label htmlFor="" className="font-bold">
                                Approval Description
                            </label>
                            <InputTextarea
                                className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="approve_desc"
                                value={formData?.approve_desc}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="flex pt-4 justify-end">
                <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    onClick={() => stepperRef.current.prevCallback()}
                />
            </div>
        </div>
    );
}
