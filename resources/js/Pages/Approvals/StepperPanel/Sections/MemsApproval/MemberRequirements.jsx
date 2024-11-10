import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import SubscriptionAgreement from "@/Pages/Activities/Forms/SubscriptionAgreementBoard";
import MemorandumAgreement from "@/Pages/Activities/Forms/MemorandumAgreement";

export default function MemberRequirements({ stepperRef }) {
    return (
        <div>
            <div className="flex flex-col space-y-4">
                {/* First Card */}
                <Card
                    style={{ height: "200px", width: "1600px" }} // Fixed height and width
                    className="mx-auto relative"
                    title={<div className="flex justify-between">
                        Member Requirements <i>Please check the following:</i>
                    </div>}
                >
                    <div className="p-fluid grid grid-cols-2 gap-4">
                        <div className="field col">
                            <Checkbox inputId="certResidency" name="requirements" value="certResidency" />
                            <label htmlFor="certResidency" className="ml-2 text-sm text-gray-600">
                                Brgy. Certificate of Residency
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="picture" name="requirements" value="picture" />
                            <label htmlFor="picture" className="ml-2 text-sm text-gray-600">
                                2 copies of 1x1 Latest Picture
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="tin" name="requirements" value="tin" />
                            <label htmlFor="tin" className="ml-2 text-sm text-gray-600">
                                Photocopy of TIN
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="birthCert" name="requirements" value="birthCert" />
                            <label htmlFor="birthCert" className="ml-2 text-sm text-gray-600">
                                Photocopy of Birth Certificate or Marriage Contract
                            </label>
                        </div>
                        <div className="field col">
                            <Checkbox inputId="form" name="requirements" value="form" />
                            <label htmlFor="form" className="ml-2 text-sm text-gray-600">
                                Duly Accomplished Form
                            </label>
                        </div>
                    </div>
                </Card>

                {/* Second Card */}
                {/* <Card
                    style={{ height: "800px", width: "1600px" }} // Fixed height and width
                    className="mx-auto relative"
                >
                    <SubscriptionAgreement/>
                </Card> */}

                {/* Third Card */}
                {/* <Card
                    style={{ height: "350px", width: "1600px" }} // Fixed height and width
                    className="mx-auto relative"
                >
                    <MemorandumAgreement/>
                </Card> */}
            </div>
            <div className="flex pt-4 justify-between">
                <Button
                    label="Back"
                    severity="primary"
                    icon="pi pi-arrow-left"
                    className="p-2"
                    onClick={() => stepperRef.current.prevCallback()}
                />
                <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    className="p-0.5"
                    onClick={() => stepperRef.current.nextCallback()}
                />
            </div>
        </div>
    );
}
