export default function TransRegisterReport({ transaction }) {

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="p-5 bg-blue-600 text-white text-center">
                <h1 className="text-4xl font-bold">Transaction Register Report</h1>
            </header>

            <main className="min-h-screen flex-grow p-10 flex justify-center">
                <div className="w-full max-w-8xl bg-white p-6 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">No.</th>
                                    <th className="px-4 py-2">Member Code</th>
                                    <th className="px-4 py-2">Loan Trans No.</th>
                                    <th className="px-4 py-2">Collateral</th>
                                    <th className="px-4 py-2">Collateral Description</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Principal Amount</th>
                                    <th className="px-4 py-2">Total Interest</th>
                                    <th className="px-4 py-2">Service Deduction</th>
                                    <th className="px-4 py-2">CBU</th>
                                    <th className="px-4 py-2">Net Amount</th>
                                    <th className="px-4 py-2">Encoded By</th>
                                    <th className="px-4 py-2">Date Encoded</th>
                                    <th className="px-4 py-2">Date Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transaction.map((loan) => (
                                    <tr key={loan.no} className="text-center">
                                        <td className="px-4 py-2">{loan.no}</td>
                                        <td className="px-4 py-2">{loan.mem_code}</td>
                                        <td className="px-4 py-2">{loan.trans_no}</td>
                                        <td className="px-4 py-2">{loan.collat_name}</td>
                                        <td className="px-4 py-2">{loan.loan_collat_desc} Years</td>
                                        <td className="px-4 py-2">{loan.status}</td>
                                        <td className="px-4 py-2">{loan.principal_amt}</td>
                                        <td className="px-4 py-2">{loan.total_interest}</td>
                                        <td className="px-4 py-2">{loan.service_deduction}</td>
                                        <td className="px-4 py-2">{loan.cbu}</td>
                                        <td className="px-4 py-2">{loan.net_amt}</td>
                                        <td className="px-4 py-2">{loan.encoded_by}</td>
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
