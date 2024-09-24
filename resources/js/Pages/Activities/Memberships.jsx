import App from '../App';

export default function Memberships() {
    return (
        <div className="max-w-5xl mx-auto p-8 border border-gray-300 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-4">
                CABARUAN MULTI-PURPOSE COOPERATIVE
            </h1>
            <h2 className="text-xl text-center mb-6">Biodata</h2>

            {/* Personal Information Section */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block font-medium">Last Name:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">First Name:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Middle Name:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
            </div>

            {/* Address Section */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block font-medium">Present Address:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Permanent Address:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
            </div>

            {/* Additional Information Section */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block font-medium">Birthdate:</label>
                    <input type="date" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Age:</label>
                    <input type="number" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Birthplace:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
            </div>

            {/* Civil Status Section */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block font-medium">Civil Status:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Name of Husband/Wife:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
            </div>

            {/* Income and Education */}
            <div className="mb-4">
                <label className="block font-medium">Gross Annual Income:</label>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>below 50,000.00</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>50,000-100,000</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>100,000-200,000</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>200,000 above</span>
                </div>
            </div>

            {/* Designated Beneficiaries */}
            <div className="mb-4">
                <label className="block font-medium">Designated Beneficiaries:</label>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block font-medium">Name:</label>
                        <input type="text" className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block font-medium">Relationship:</label>
                        <input type="text" className="w-full border p-2 rounded" />
                    </div>
                </div>
            </div>

            {/* References */}
            <div className="mb-4">
                <label className="block font-medium">References (Must be a member of this cooperative):</label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">Name:</label>
                        <input type="text" className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block font-medium">Contact Number:</label>
                        <input type="text" className="w-full border p-2 rounded" />
                    </div>
                </div>
            </div>

            {/* Signature Section */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block font-medium">Signature:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Thumb Mark:</label>
                    <input type="text" className="w-full border p-2 rounded" />
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit
                </button>
            </div>
        </div>
    );
}

Memberships.layout = (page) => <App children={page} />;
