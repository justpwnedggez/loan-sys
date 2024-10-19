export const GenerateTransactionNumber = () => {
    const date = new Date();

    // Get the year, month, day, hour, minute, and second
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Generate a random 4-digit number to ensure uniqueness
    const randomNum = Math.floor(1000 + Math.random() * 9000);

    // Concatenate everything to form the transaction number
    const transactionNumber = `${year}${month}${day}${hours}${minutes}${seconds}${randomNum}`;

    return transactionNumber;
};
