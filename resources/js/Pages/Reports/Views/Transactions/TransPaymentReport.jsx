export default function TransRegisterReport({ payment }) {

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
                                    <th className="px-4 py-2">Payee</th>
                                    <th className="px-4 py-2">Pay No.</th>
                                    <th className="px-4 py-2">Payment Amount</th>
                                    <th className="px-4 py-2">Beginning Balance</th>
                                    <th className="px-4 py-2">Ending Balance</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Payment Date</th>
                                    <th className="px-4 py-2">Encoded By</th>
                                    <th className="px-4 py-2">Date Encoded</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payment.map((pay) => (
                                    <tr key={pay.no} className="text-center">
                                        <td className="px-4 py-2">{pay.no}</td>
                                        <td className="px-4 py-2">{pay.mem_code}</td>
                                        <td className="px-4 py-2">{pay.payee_name}</td>
                                        <td className="px-4 py-2">{pay.pay_code}</td>
                                        <td className="px-4 py-2">{pay.payment_amount}</td>
                                        <td className="px-4 py-2">{pay.beginning_balance}</td>
                                        <td className="px-4 py-2">{pay.ending_balance}</td>
                                        <td className="px-4 py-2">{pay.status}</td>
                                        <td className="px-4 py-2">{pay.payment_date}</td>
                                        <td className="px-4 py-2">{pay.encoded_by}</td>
                                        <td className="px-4 py-2">{pay.date_created}</td>
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
