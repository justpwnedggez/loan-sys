import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import App from '../App';

// Updated data structure for loan portfolio report with dates
const loanData = [
  { date: '2024-01-01', loanType: 'House Loan', totalAmount: 500000, outstandingBalance: 450000, interestRate: 3.5 },
  { date: '2024-02-05', loanType: 'House Loan', totalAmount: 490000, outstandingBalance: 440000, interestRate: 3.5 },
  { date: '2024-03-15', loanType: 'House Loan', totalAmount: 500000, outstandingBalance: 450000, interestRate: 3.5 },
  { date: '2024-04-27', loanType: 'House Loan', totalAmount: 490000, outstandingBalance: 440000, interestRate: 3.5 },
  { date: '2024-05-31', loanType: 'House Loan', totalAmount: 500000, outstandingBalance: 450000, interestRate: 3.5 },
  { date: '2024-06-22', loanType: 'House Loan', totalAmount: 490000, outstandingBalance: 440000, interestRate: 3.5 },
  { date: '2024-07-11', loanType: 'House Loan', totalAmount: 500000, outstandingBalance: 450000, interestRate: 3.5 },
  { date: '2024-08-31', loanType: 'House Loan', totalAmount: 490000, outstandingBalance: 440000, interestRate: 3.5 },
  { date: '2024-01-01', loanType: 'Feed Loan', totalAmount: 100000, outstandingBalance: 70000, interestRate: 5.0 },
  { date: '2024-02-01', loanType: 'Feed Loan', totalAmount: 98000, outstandingBalance: 65000, interestRate: 5.0 },
  { date: '2024-01-01', loanType: 'Emergency Loan', totalAmount: 25000, outstandingBalance: 10000, interestRate: 8.0 },
  { date: '2024-02-01', loanType: 'Emergency Loan', totalAmount: 24000, outstandingBalance: 9000, interestRate: 8.0 },
  { date: '2024-01-01', loanType: 'Mortgage', totalAmount: 300000, outstandingBalance: 250000, interestRate: 4.0 },
  { date: '2024-02-01', loanType: 'Mortgage', totalAmount: 295000, outstandingBalance: 240000, interestRate: 4.0 },
  { date: '2024-01-01', loanType: 'Regular Loan', totalAmount: 50000, outstandingBalance: 20000, interestRate: 7.0 },
  { date: '2024-02-01', loanType: 'Regular Loan', totalAmount: 48000, outstandingBalance: 18000, interestRate: 7.0 },
];

export default function Index({ dashData }) {
    console.log(dashData);
    const [selectedLoanType, setSelectedLoanType] = useState('House Loan'); // Default to House Loan

    const filteredData = loanData.filter(loan => loan.loanType === selectedLoanType);

    const handleLoanChange = (loanType) => {
        setSelectedLoanType(loanType);
    };

    return (
        <div className="text-center m-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <h2 className="text-xl mt-2">Loan Portfolio Summary</h2>
            <div className="flex justify-center my-4 space-x-2">
                {Array.from(new Set(loanData.map(loan => loan.loanType))).map(loanType => (
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
