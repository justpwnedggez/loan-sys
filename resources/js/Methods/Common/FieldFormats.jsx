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

export const NumberFormat = (e) => {
    // Get the current value of the input
    let value = e.target.value;

    // Remove any non-numeric characters (allow only digits)
    value = value.replace(/[^0-9]/g, '');

    // Set the input value back to the sanitized whole number value
    e.target.value = value;
};
