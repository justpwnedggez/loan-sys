export const AmountFormat = (e) => {
    // Get the current value of the input
    let value = e.target.value;

    // Allow only digits, one dot, and commas in the input
    value = value.replace(/[^0-9.,]/g, ""); // Remove any character that's not a digit, period, or comma

    // Handle the case where there are multiple periods
    const parts = value.split(".");
    if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1).join(""); // Keep only the first period
    }

    // Reformat the input with commas for the integer part
    const integerPart = parts[0]
        .replace(/,/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas to integer part
    const decimalPart = parts[1] ? `.${parts[1].slice(0, 2)}` : ""; // Limit to 2 decimal places

    // Update the input value with the formatted currency string
    e.target.value = integerPart + decimalPart;
};

export const AmountFormatText = (value) => {
    // Handle undefined or null values by returning an empty string
    if (value === undefined || value === null) {
        return "";  // Or return a default value if needed
    }

    // Ensure the value is a string
    value = value.toString();

    // Allow only digits, one dot, and commas in the input
    value = value.replace(/[^0-9.,]/g, ""); // Remove any character that's not a digit, period, or comma

    // Handle the case where there are multiple periods
    const parts = value.split(".");
    if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1).join(""); // Keep only the first period
    }

    // Reformat the input with commas for the integer part
    const integerPart = parts[0]
        .replace(/,/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas to integer part
    const decimalPart = parts[1] ? `.${parts[1].slice(0, 2)}` : ""; // Limit to 2 decimal places

    // Return the formatted value
    return integerPart + decimalPart;
};



export const NumberFormat = (e) => {
    // Get the current value of the input
    let value = e.target.value;

    // Remove any non-numeric characters (allow only digits)
    value = value.replace(/[^0-9.]/g, "");

    // Set the input value back to the sanitized whole number value
    e.target.value = value;
};

export const calculateLoanDetails = (formData) => {

    const loanAmount = parseFloat(formData.loan_amount.replace(/,/g, "") || 0);
    const cbu = parseFloat(formData.cbu || 0);
    const interest = parseFloat(formData.interest || 0);
    const loanPeriod = parseFloat(formData.loan_period || 0);
    const serviceFee = parseFloat(formData.service_fee || 0);

    // Interest formula
    const interestAmount = (loanAmount - cbu) * interest * loanPeriod;
    // Service Fee (2% of loan amount)
    const serviceFeeDeduction = loanAmount * serviceFee;

    // Return the calculated values
    return {
        principal_amt: loanAmount,
        total_interest: interestAmount,
        service_deduction: serviceFeeDeduction,
        net_amt: (loanAmount - serviceFeeDeduction) - interestAmount
    };
};

