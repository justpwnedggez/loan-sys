import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import App from '../App';

export default function Index({ dashData }) {
    const [selectedLoanType, setSelectedLoanType] = useState('Regular Loan'); // Default to Regular Loan

    // Extract loan data from dashData
    const loanData = dashData.map(loan => ({
        date: new Date(loan.created_at).toISOString().split('T')[0], // Format date as YYYY-MM-DD
        loanType: loan.loan_name, // Using loan_name for loan type
        totalAmount: loan.total_amount || 0,
        outstandingBalance: loan.outstanding_balance || 0,
        interestRate: loan.interest // Assuming the interest is a string, adjust if needed
    }));

    // Filter the loan data based on the selected loan type
    const filteredData = loanData.filter(loan => loan.loanType === selectedLoanType);

    // Get unique loan types for button rendering
    const loanTypes = Array.from(new Set(loanData.map(loan => loan.loanType)));

    const handleLoanChange = (loanType) => {
        setSelectedLoanType(loanType);
    };

    return (
        <div className="text-center m-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <h2 className="text-xl mt-2">Loan Portfolio Summary</h2>
            <div className="flex justify-center my-4 space-x-2">
                {loanTypes.map(loanType => (
                    <button
                        key={loanType}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 active:bg-green-700 transition"
                        onClick={() => handleLoanChange(loanType)}
                    >
                        {loanType}
                    </button>
                ))}
            </div>
            <p className="font-bold"><strong>Selected Loan Type:</strong> {selectedLoanType}</p>

            {/* Example Chart */}
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="outstandingBalance" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="totalAmount" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
