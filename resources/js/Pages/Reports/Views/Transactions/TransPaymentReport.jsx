'use client'

import { useState, useEffect } from 'react'

export default function TransRegisterReport({ payment = [] }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 print:bg-white">
            <header className="p-5 bg-blue-600 text-white text-center print:bg-white print:text-black print:p-2">
                <h1 className="text-4xl font-bold print:text-2xl">Transaction Payment Report</h1>
            </header>

            <main className="flex-grow p-4 flex justify-center print:p-0">
                <div className="w-full max-w-full bg-white rounded-lg shadow-lg print:shadow-none">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white border-collapse">
                            <thead className="bg-gray-100 print:bg-gray-200">
                                <tr>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">No.</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Member Code</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Payee</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Pay No.</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Payment Amount</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Beginning Balance</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Ending Balance</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Status</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Payment Date</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Encoded By</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Date Encoded</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payment.map((pay, index) => (
                                    <tr key={pay.no} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="px-2 py-1 text-xs border">{pay.no}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.mem_code}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.payee_name}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.pay_code}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.payment_amount}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.beginning_balance}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.ending_balance}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.status}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.payment_date}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.encoded_by}</td>
                                        <td className="px-2 py-1 text-xs border">{pay.date_created}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <footer className="p-4 bg-blue-600 text-white text-center print:bg-white print:text-black print:p-2">
                <p className="text-sm">© 2024 Loan Management System. All rights reserved.</p>
            </footer>

            {isClient && (
                <button
                    onClick={handlePrint}
                    className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 print:hidden"
                    aria-label="Print Report"
                >
                    Print Report
                </button>
            )}

            <style jsx global>{`
                @media print {
                    @page {
                        size: landscape;
                        margin: 0.5cm;
                    }

                    body {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    header {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 0.8cm;
                    }

                    footer {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 0.8cm;
                    }

                    main {
                        margin-top: 1cm;
                        margin-bottom: 1cm;
                    }

                    table {
                        font-size: 7pt;
                        width: 100%;
                        border-collapse: collapse;
                        page-break-inside: auto;
                    }

                    tr {
                        page-break-inside: avoid;
                        page-break-after: auto;
                    }

                    td, th {
                        page-break-inside: avoid;
                    }

                    thead {
                        display: table-header-group;
                    }

                    tfoot {
                        display: table-footer-group;
                    }
                }
            `}</style>
        </div>
    )
}
