import { InputText } from "primereact/inputtext";
import { AmountFormat } from "@/Methods/Common/FieldFormats";

export const PaymentInformation = ({ formData, handleInputChange }) => {

    return (
        <div className="p-fluid pl-4">
            <div className="field">
                <div className="text-500 font-medium mb-2">Payment Amount:</div>
                <InputText
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="payment_amount"
                    value={formData?.payment_amount}
                    onChange={handleInputChange}
                    onInput={AmountFormat}
                    placeholder="Enter payment amount"
                />
            </div>
        </div>
    );
};
