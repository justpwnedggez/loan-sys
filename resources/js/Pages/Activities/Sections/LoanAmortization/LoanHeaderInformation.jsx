import { Card } from "primereact/card";
import { Button } from "primereact/button";

export const LoanHeaderInformation = ({ formData, openSearchDialog }) => {
    return (
        <Card className="mb-4">
            <div className="p-fluid grid grid-cols-2 gap-4">
                <div className="field col">
                    <div className="text-xl text-900 font-bold mb-4">
                        Loan Transaction
                        <Button
                            icon="pi pi-search"
                            onClick={openSearchDialog}
                        />
                    </div>
                    <div className="text-500 font-medium mb-2">Loan Trans:</div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.trans_no}
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Loan Amount:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.principal_amt}
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Loan Period:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.loan_period} Months
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Interest Rate:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.interest}%
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Service Deduction:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.service_deduction}
                    </div>
                </div>
                <div className="field col">
                    <div className="text-500 font-medium mb-2">
                        Member Name:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.mem_name}
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Capital Build Up:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.cbu}
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Net Amount:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.net_amt}
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Remaining Balance:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.remaning_amt}
                    </div>
                    <div className="text-500 font-medium mb-2">
                        Next Payment Due:
                    </div>
                    <div className="text-900 text-xl font-medium">
                        {formData?.next_payment_due}
                    </div>
                </div>
            </div>
        </Card>
    );
};
