export default function LoansMasterReport({ loans }) {

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="p-5 bg-blue-600 text-white text-center">
                <h1 className="text-4xl font-bold">Loans Master Report</h1>
            </header>

            <main className="min-h-screen flex-grow p-10 flex justify-center">
                <div className="w-full max-w-8xl bg-white p-6 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">No.</th>
                                    <th className="px-4 py-2">Loan Code</th>
                                    <th className="px-4 py-2">Loan Name</th>
                                    <th className="px-4 py-2">Max Loan Amount</th>
                                    <th className="px-4 py-2">Loan Period</th>
                                    <th className="px-4 py-2">Interest</th>
                                    <th className="px-4 py-2">Service Fee</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Loan Purpose</th>
                                    <th className="px-4 py-2">Date Created</th>
                                    <th className="px-4 py-2">Date Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loans.map((loan) => (
                                    <tr key={loan.no} className="text-center">
                                        <td className="px-4 py-2">{loan.no}</td>
                                        <td className="px-4 py-2">{loan.loan_code}</td>
                                        <td className="px-4 py-2">{loan.loan_name}</td>
                                        <td className="px-4 py-2">{loan.max_loan_amount}</td>
                                        <td className="px-4 py-2">{loan.loan_period} Months</td>
                                        <td className="px-4 py-2">{loan.interest}</td>
                                        <td className="px-4 py-2">{loan.service_fee}</td>
                                        <td className="px-4 py-2">{loan.status}</td>
                                        <td className="px-4 py-2">{loan.loan_purpose}</td>
                                        <td className="px-4 py-2">{loan.date_created}</td>
                                        <td className="px-4 py-2">{loan.date_modified}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <footer className="p-4 bg-blue-600 text-white text-center">
                <p>© 2024 Loan Management System. All rights reserved.</p>
            </footer>
        </div>
    );
}
