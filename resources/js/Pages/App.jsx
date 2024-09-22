import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import DropdownNav from "@/Components/NavBar/Dropdown";
import DropdownSideNav from "@/Components/Sidebar/MasterFiles/Dropdown";

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
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M4 4V16C4 18.2091 5.79086 20 8 20H20"
                                stroke="#6B7B94"
                            />
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M6.59869 14.5841C6.43397 14.8057 6.48012 15.1189 6.70176 15.2837C6.9234 15.4484 7.2366 15.4022 7.40131 15.1806L6.59869 14.5841ZM19.4779 4.85296C19.3967 4.58903 19.1169 4.4409 18.853 4.52211L14.552 5.8455C14.288 5.92671 14.1399 6.2065 14.2211 6.47043C14.3023 6.73436 14.5821 6.88249 14.846 6.80128L18.6692 5.62493L19.8455 9.44805C19.9267 9.71198 20.2065 9.8601 20.4704 9.7789C20.7344 9.69769 20.8825 9.41789 20.8013 9.15396L19.4779 4.85296ZM13.5434 12.4067L13.1671 12.7359L13.5434 12.4067ZM15.1797 12.2161L15.6216 12.45L15.1797 12.2161ZM7.40131 15.1806L10.6621 10.7929L9.85952 10.1964L6.59869 14.5841L7.40131 15.1806ZM11.4397 10.7619L13.1671 12.7359L13.9196 12.0774L12.1923 10.1034L11.4397 10.7619ZM15.6216 12.45L19.4419 5.23394L18.5581 4.76606L14.7378 11.9821L15.6216 12.45ZM13.1671 12.7359C13.8594 13.5272 15.1297 13.3792 15.6216 12.45L14.7378 11.9821C14.5739 12.2919 14.1504 12.3412 13.9196 12.0774L13.1671 12.7359ZM10.6621 10.7929C10.8522 10.5371 11.2299 10.522 11.4397 10.7619L12.1923 10.1034C11.5628 9.38385 10.4298 9.42903 9.85952 10.1964L10.6621 10.7929Z"
                                fill="#6B7B94"
                            />
                        </svg>
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M20,8H8A3,3,0,0,1,8,2H20a1,1,0,0,1,1,1V7A1,1,0,0,1,20,8ZM8,4A1,1,0,0,0,8,6H19V4Z" />
                            <path d="M19,22H5a3,3,0,0,1,0-6H19a1,1,0,0,1,1,1v4A1,1,0,0,1,19,22ZM5,18a1,1,0,0,0,0,2H18V18Z" />
                            <path d="M17,12H5A3,3,0,0,1,5,6H17a1,1,0,0,1,0,2H5a1,1,0,0,0,0,2H17a1,1,0,0,1,0,2Z" />
                            <path d="M21,18H10a4,4,0,0,1,0-8H21a1,1,0,0,1,0,2H10a2,2,0,0,0,0,4H20V14a1,1,0,0,1,2,0v3A1,1,0,0,1,21,18Z" />
                        </svg>
                        <span>Master Files</span>
                            <DropdownSideNav auth={auth} />
                    </Link>

                    <Link
                        href={route("main.sessions")}
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M3.99658 4H19.9999V20H3.99658V4ZM5.49658 5.5V8H18.4999V5.5H5.49658ZM18.4999 9.5H9.99994V18.5H18.4999V9.5ZM8.49994 18.5V16.5H5.49658V18.5H8.49994ZM5.49658 15H8.49994V13H5.49658V15ZM5.49658 11.5H8.49994V9.5H5.49658V11.5Z"
                                fill="#1F2328"
                            />
                        </svg>
                        Sessions
                    </Link>
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
