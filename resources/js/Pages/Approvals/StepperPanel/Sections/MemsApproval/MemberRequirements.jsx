
//Elements
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";

export default function MemberRequirements({ stepperRef }) {
    return (
        <div>
            <div className="flex flex-column h-12rem">
                <Card
                    style={{ flexBasis: "90rem" }}
                    className="md:w-25rem lg:w-30rem xl:w-35rem mx-auto relative"
                    title=<div className="flex justify-between">
                        Member Requirements <i>Please check the following:</i>
                    </div>
                >
                    <div className="p-fluid grid grid-cols-2 gap-4">
                        <div className="field col">
                            <Checkbox inputId="" name="" value="" />
                            <label
                                htmlFor=""
                                className="ml-2 text-sm text-gray-600"
                            >
                                Brgy. Certificate of Residency
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="" name="" value="" />
                            <label
                                htmlFor=""
                                className="ml-2 text-sm text-gray-600"
                            >
                                2 copies of 1x1 Latest Picture
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="" name="" value="" />
                            <label
                                htmlFor=""
                                className="ml-2 text-sm text-gray-600"
                            >
                                Photocopy of TIN
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="" name="" value="" />
                            <label
                                htmlFor=""
                                className="ml-2 text-sm text-gray-600"
                            >
                                Photocopy of Birth Cerficate or Marriage
                                Contract
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="" name="" value="" />
                            <label
                                htmlFor=""
                                className="ml-2 text-sm text-gray-600"
                            >
                                Duly Accomplished Form
                            </label>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="flex pt-4 justify-end">
                <Button
                    label="Back"
                    severity="primary"
                    icon="pi pi-arrow-left"
                    className="p-2" // Add horizontal padding between buttons
                    onClick={() => stepperRef.current.prevCallback()}
                />
                <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    className="p-0.5" // Add horizontal padding between buttons
                    onClick={() => stepperRef.current.nextCallback()}
                />
            </div>
        </div>
    );
}
