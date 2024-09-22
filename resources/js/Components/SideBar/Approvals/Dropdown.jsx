import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            {/* Activities toggle button */}
            <button
                onClick={toggleDropdown}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center w-full text-left"
            >
                <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g id="Approved"></g>
                        <g id="Approved_1_"></g> <g id="File_Approve"></g>
                        <g id="Folder_Approved"></g> <g id="Security_Approved"></g>
                        <g id="Certificate_Approved"></g> <g id="User_Approved"></g>
                        <g id="ID_Card_Approved"></g> <g id="Android_Approved"></g>
                        <g id="Privacy_Approved"></g> <g id="Approved_2_"></g>
                        <g id="Message_Approved"></g> <g id="Upload_Approved"></g>
                        <g id="Download_Approved"></g> <g id="Email_Approved">
                        <g>
                        <path d="M30.821,30.567c0.006-0.009,0.011-0.017,0.017-0.025c0.105-0.158,0.182-0.337,0.182-0.542c0-0.055-0.011-0.106-0.02-0.159 V16c0-0.113-0.025-0.221-0.061-0.325c-0.008-0.022-0.019-0.043-0.028-0.065c-0.054-0.124-0.124-0.24-0.224-0.334 c0-0.001,0-0.002-0.001-0.002L27,11.789V7.21c0-0.553-0.447-1-1-1s-1,0.447-1,1v5.01v5.858l-3.327,2.18l-4.966-4.965 c-0.391-0.391-1.023-0.391-1.414,0l-4.966,4.965L7,18.078V12.22V3h14.54c0.553,0,1-0.447,1-1s-0.447-1-1-1H6C5.447,1,5,1.447,5,2 v9.789l-3.687,3.484c-0.001,0-0.001,0.001-0.001,0.002c-0.1,0.094-0.17,0.21-0.224,0.334c-0.01,0.022-0.021,0.043-0.028,0.065 C1.025,15.779,1,15.887,1,16v14c0,0.016,0.006,0.03,0.007,0.046c0.002,0.05,0.013,0.098,0.022,0.147s0.019,0.098,0.035,0.145 c0.006,0.015,0.006,0.03,0.012,0.045c0.013,0.029,0.033,0.053,0.049,0.081c0.023,0.045,0.047,0.089,0.078,0.13 c0.029,0.039,0.063,0.073,0.096,0.107c0.034,0.033,0.068,0.066,0.107,0.096c0.041,0.031,0.085,0.055,0.13,0.078 c0.028,0.016,0.052,0.036,0.081,0.049c0.012,0.005,0.024,0.003,0.037,0.008C1.764,30.972,1.879,31,2,31h28c0.007,0,0.015,0,0.02,0 c0.217,0,0.406-0.083,0.57-0.2c0.018-0.014,0.038-0.023,0.055-0.037C30.714,30.706,30.77,30.641,30.821,30.567z M23.117,21.703 l0.268-0.176l3.163-2.07c0.001-0.001,0.002-0.002,0.003-0.003L29,17.851v9.734L23.117,21.703z M27,14.541l1.393,1.316L27,16.769 V14.541z M3,17.851l2.449,1.604c0.001,0.001,0.002,0.002,0.003,0.003l3.163,2.07l0.268,0.176L3,27.586V17.851z M5,16.769 l-1.393-0.911L5,14.541V16.769z M4.414,29l6.753-6.753L16,17.414l4.833,4.833L27.586,29H4.414z"></path> <path d="M10.684,6.301c-0.402-0.377-1.037-0.357-1.413,0.046C8.893,6.749,8.913,7.382,9.316,7.76l5.311,4.971 c0.192,0.18,0.438,0.27,0.684,0.27s0.491-0.09,0.684-0.27l10.689-10c0.403-0.378,0.424-1.011,0.047-1.414 c-0.379-0.402-1.01-0.424-1.414-0.047l-10.006,9.361L10.684,6.301z">

                        </path> </g> </g> <g id="Data_Approved"></g> </g></svg>
                <span>Approvals</span>

                {/* Dropdown arrow */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-auto h-5 w-5 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown options */}
            {isOpen && (
                <div className="mt-4 ml-8 space-y-2 w-full">
                    <Link
                        href={route("main.loan_approve")}
                        className="block max-w-48 px-4 py-2 text-gray-300 hover:bg-gray-600 rounded hover:text-white"
                    >
                        Loans
                    </Link>
                    <Link
                        href={route("main.mems_approve")}
                        className="block max-w-48 px-4 py-2 text-gray-300 hover:bg-gray-600 rounded hover:text-white"
                    >
                        Membership
                    </Link>
                </div>
            )}
        </div>
    );
}
