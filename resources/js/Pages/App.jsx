import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

//Dropdowns
import DropdownNav from "@/Components/NavBar/Dropdown";
import DropdownSideNavMastFil from "@/Components/Sidebar/MasterFiles/Dropdown";
import DropdownSideNavAct from "@/Components/Sidebar/Activity/Dropdown";
import DropdownSideNavApprv from "@/Components/Sidebar/Approvals/Dropdown";
import DropdownSideNavReports from "@/Components/Sidebar/Reports/Dropdown";
import DropdownSideNavSessions from "@/Components/Sidebar/Sessions/Dropdown";

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function Component({ children }) {
    const { auth } = usePage().props;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <nav>
                    <div className="flex items-center justify-between mb-6 px-4">
                        <Link
                            href="/"
                            className="text-white text-3xl font-semibold"
                        >
                            Loan Sys
                        </Link>
                        <button onClick={toggleSidebar} className="md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Link
                        href={route("main.dashboard")}
                        className={`block py-2.5 px-4 rounded ${
                            route().current() === "main.dashboard"
                                ? "bg-blue-700 text-white" // Active style (highlighted)
                                : "text-gray-300 hover:bg-blue-700 hover:text-white" // Default style
                        }`}

                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Dashboard
                    </Link>

                    {/** Activities Dropdown */}
                    <div>
                        <DropdownSideNavAct />
                    </div>

                    {/** Approvals Dropdown */}
                    <div>
                        <DropdownSideNavApprv />
                    </div>

                    {/** Master Files Dropdown */}
                    <div>
                        <DropdownSideNavMastFil />
                    </div>

                    {/** Reports Dropdown */}
                    <div>
                        <DropdownSideNavReports />
                    </div>

                    {/** Sessions Dropdown */}
                    {/* <div>
                        <DropdownSideNavSessions />
                    </div> */}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <button onClick={toggleSidebar} className="md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Loan Management System
                        </h1>
                        <div>
                            <DropdownNav auth={auth} />
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        {children}
                    </div>
                </main>

                <footer className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <div className="text-gray-500">
                            © 2024 Loan Management System. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
