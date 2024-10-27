export default function MembershipMasterReport({ members }) {

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
                                    <th className="px-4 py-2">Member Fullname</th>
                                    <th className="px-4 py-2">Share Capital</th>
                                    <th className="px-4 py-2">Subscription Period</th>
                                    <th className="px-4 py-2">Age</th>
                                    <th className="px-4 py-2">Civil Status</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Occupation</th>
                                    <th className="px-4 py-2">Reason For Joining</th>
                                    <th className="px-4 py-2">Date Created</th>
                                    <th className="px-4 py-2">Date Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member) => (
                                    <tr key={member.no} className="text-center">
                                        <td className="px-4 py-2">{member.no}</td>
                                        <td className="px-4 py-2">{member.mem_code}</td>
                                        <td className="px-4 py-2">{member.name}</td>
                                        <td className="px-4 py-2">{member.subscription_amount}</td>
                                        <td className="px-4 py-2">{member.subscription_years} Years</td>
                                        <td className="px-4 py-2">{member.age}</td>
                                        <td className="px-4 py-2">{member.civil_status}</td>
                                        <td className="px-4 py-2">{member.status}</td>
                                        <td className="px-4 py-2">{member.occupation}</td>
                                        <td className="px-4 py-2">{member.reason_for_joining}</td>
                                        <td className="px-4 py-2">{member.date_created}</td>
                                        <td className="px-4 py-2">{member.date_modified}</td>
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
