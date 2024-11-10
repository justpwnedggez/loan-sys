'use client'

import { useState, useEffect } from 'react'

export default function TransRegisterReport({ transaction = [] }) {
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
                <h1 className="text-4xl font-bold print:text-2xl">Transaction Register Report</h1>
            </header>

            <main className="flex-grow p-4 flex justify-center print:p-0">
                <div className="w-full max-w-full bg-white rounded-lg shadow-lg print:shadow-none">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white border-collapse">
                            <thead className="bg-gray-100 print:bg-gray-200">
                                <tr>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">No.</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Member Code</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Loan Trans No.</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Loan Type</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Collateral</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Collateral Description</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Encoded By</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Applied Date</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Maturity Date</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Status</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Principal Amount</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Total Interest</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Service Deduction</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">CBU</th>
                                    <th className="px-2 py-1 text-xs font-semibold text-left">Net Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transaction.map((loan, index) => (
                                    <tr key={loan.no} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="px-2 py-1 text-xs border">{loan.no}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.mem_code}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.trans_no}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.loan_type}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.collat_name}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.loan_collat_desc}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.encoded_by}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.date_created}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.date_maturity}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.status}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.principal_amt}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.total_interest}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.service_deduction}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.cbu}</td>
                                        <td className="px-2 py-1 text-xs border">{loan.net_amt}</td>
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
