export default function MembershipMasterReport({ members }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="p-5 bg-blue-600 text-white text-center">
                <h1 className="text-4xl font-bold">Membership Master Report</h1>
            </header>

            <main className="min-h-screen flex-grow p-10 flex justify-center">
                <div className="w-full max-w-8xl bg-white p-6 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">No.</th>
                                    <th className="px-4 py-2">Member Code</th>
                                    <th className="px-4 py-2">
                                        Member Fullname
                                    </th>
                                    <th className="px-4 py-2">Share Capital</th>
                                    <th className="px-4 py-2">
                                        Subscription Period
                                    </th>
                                    <th className="px-4 py-2">Age</th>
                                    <th className="px-4 py-2">Civil Status</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Occupation</th>
                                    <th className="px-4 py-2">
                                        Reason For Joining
                                    </th>
                                    <th className="px-4 py-2">Date Created</th>
                                    <th className="px-4 py-2">Date Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member) => (
                                    <tr key={member.no} className="text-center">
                                        <td className="px-4 py-2">
                                            {member.no}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.mem_code}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.subscription_amount}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.subscription_years} Years
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.age}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.civil_status}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.status}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.occupation}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.reason_for_joining}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.date_created}
                                        </td>
                                        <td className="px-4 py-2">
                                            {member.date_modified}
                                        </td>
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

            {/* Print Button */}
            <button
                onClick={handlePrint}
                className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
            >
                Print Report
            </button>

            <style jsx global>{`
                @media print {
                    /* Hide the print button */
                    button {
                        display: none;
                    }

                    /* Set page orientation to landscape */
                    @page {
                        size: landscape;
                        margin: 0.5in;
                    }

                    /* Header and Footer for each page */
                    header {
                        position: fixed;
                        top: 0;
                        width: 100%;
                        font-size: 1.5em;
                        text-align: center;
                        padding: 10px 0;
                        background: #2563eb;
                        color: white;
                    }

                    footer {
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        text-align: center;
                        padding: 10px 0;
                        background: #2563eb;
                        color: white;
                    }

                    /* Page Numbering */
                    body::after {
                        counter-increment: page;
                        content: "Page " counter(page);
                        position: fixed;
                        bottom: 10px;
                        right: 1in;
                        color: black;
                        font-size: 0.8em;
                    }

                    /* Adjust font sizes and spacing for print scaling */
                    table {
                        font-size: 10px;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
