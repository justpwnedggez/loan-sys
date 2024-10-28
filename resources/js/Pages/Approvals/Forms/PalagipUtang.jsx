import React from 'react';

const PalagipUtang = () => {
    return (
        <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="font-bold text-xl">PALAGIP PANGGEP TI UTANG</h1>
            </div>

            {/* Greeting Section */}
            <p className="mb-6">
                Naimbag a aldaw u mam/sir!
            </p>
            <p className="mb-6">
                Maipalagip a ti utang mo ditoy Cabaruan MPC ket na due idi April 26, 2023, mabalin a umay u bayadan ditoy Coop tapnu haan a dumakkel iti mainayun a interest ken penalty.
                Agyaman kami iti panagtutuloy u a suporta ti serbisyo ti kooperatiba tayo.
            </p>

            {/* Loan Table */}
            <p className="mb-4">For your preference:</p>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-collapse border-black text-center mb-6">
                    <thead>
                        <tr>
                            <th className="border border-black px-4 py-2">PRINCIPAL</th>
                            <th className="border border-black px-4 py-2">Interest As of</th>
                            <th className="border border-black px-4 py-2">Pass Due Interest Penalty</th>
                            <th className="border border-black px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-black px-4 py-2">REGULAR LOAN</td>
                            <td className="border border-black px-4 py-2"></td>
                            <td className="border border-black px-4 py-2"></td>
                            <td className="border border-black px-4 py-2"></td>
                        </tr>
                        <tr>
                            <td className="border border-black px-4 py-2">EMERGENCY LOAN</td>
                            <td className="border border-black px-4 py-2"></td>
                            <td className="border border-black px-4 py-2"></td>
                            <td className="border border-black px-4 py-2"></td>
                        </tr>
                        <tr>
                            <td className="border border-black px-4 py-2">MORTUARY</td>
                            <td className="border border-black px-4 py-2"></td>
                            <td className="border border-black px-4 py-2"></td>
                            <td className="border border-black px-4 py-2"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Reminder */}
            <p className="mb-6">
                Nu nabayadan dytoy a utang paki disregard daytoy a palagip. Thank you
            </p>

            <p className="mb-6">
                in by the general manager Shirley P. Bata-ec
            </p>

            {/* Received By Section */}
            <div className="mt-12">
                <p className="font-bold">RECEIVED BY:</p>

                <div className="mt-12 mb-4">
                    <p className="border-t border-black w-1/2 mx-auto text-center">Signature Over Printed Name</p>
                </div>

                <div className="mt-4">
                    <p>DATE RECEIVED: <span className="underline"></span></p>
                </div>
            </div>
        </div>
    );
}

export default PalagipUtang;
