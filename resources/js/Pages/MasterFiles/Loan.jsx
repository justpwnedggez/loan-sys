import App from '../App';

export default function Loan({ children }) {
    return (
        <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">
                Loans Management
            </h1>

            <div className="mt-6">{children}</div>
        </div>
    );
}

Loan.layout = (page) => <App children={page} />;
