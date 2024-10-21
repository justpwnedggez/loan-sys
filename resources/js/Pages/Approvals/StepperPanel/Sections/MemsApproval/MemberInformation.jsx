//Elements
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

//Modal
import { MemberSelectionList } from "@/Components/SideBar/Approvals/SearchMemberModal";

export default function MemberInformation({
    formData,
    isDialogVisible,
    setDialogVisible,
    selectMember,
    stepperRef,
}) {
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
                                <i>{formData?.rsbsa === 'Y' ? 'Yes' : 'No'}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Farm Area:
                                </span>{" "}
                                <i>{formData?.farm_area} sqm</i>
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
                    title=<div className="flex justify-between">Others</div>
                >
                    <div className="p-fluid grid grid-cols-2 gap-4">
                        <div className="field col">
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Present Address:
                                </span>{" "}
                                <i>{formData?.present_addr}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Permanent Address:
                                </span>{" "}
                                <i>{formData?.permanent_addr}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Birth Place:
                                </span>{" "}
                                <i>{formData?.birth_place}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Religion:
                                </span>{" "}
                                <i>{formData?.religion}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Tribe:
                                </span>{" "}
                                <i>{formData?.tribe}</i>
                            </p>
                                <span className="font-bold underline">
                                    Civil Status:
                                </span>{" "}
                                <i>
                                    {formData?.civil_status === "S"
                                        ? "Single"
                                        : formData?.civil_status === "M"
                                        ? "Married"
                                        : formData?.civil_status === "D"
                                        ? "Divorced"
                                        : "Unknown"}
                                </i>
                            <p className="m-0 text-capitalize">
                                <span className="font-bold underline">
                                    Tin No.:
                                </span>{" "}
                                <i>{formData?.tin_no}</i>
                            </p>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Highest Educational Attainment:
                                </span>{" "}
                                <i>{formData?.highest_educ_attainment}</i>
                            </p>
                        </div>
                        <div className="field col">
                                <span className="font-bold underline">
                                    Parents:
                                </span>
                                <ul className="list-disc ml-4">
                                    {" "}
                                    {/* Add appropriate classes for styling */}
                                    {formData?.parents.map((parent, index) => (
                                        <li key={index}>
                                            {`${parent.first_name} ${
                                                parent.middle_name
                                            } ${parent.last_name} (${
                                                parent.parent_type === "M"
                                                    ? "Mother"
                                                    : "Father"
                                            })`}
                                        </li>
                                    ))}
                                </ul>
                                <span className="font-bold underline">
                                    Beneficiaries:
                                </span>{" "}
                                <ul className="list-disc ml-4">
                                    {" "}
                                    {/* Add appropriate classes for styling */}
                                    {formData?.beneficiaries.map(
                                        (beneficiary, index) => (
                                            <li key={index}>
                                                {`${beneficiary.name} (${beneficiary.relationship})`}
                                            </li>
                                        )
                                    )}
                                </ul>
                            <p className="m-0">
                                <span className="font-bold underline">
                                    Reason For Joining:
                                </span>{" "}
                                <i>{formData?.reason_for_joining}</i>
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
                        <MemberSelectionList onSelect={selectMember} />
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
