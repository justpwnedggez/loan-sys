import App from '../App';

export default function LoanApproval() {
    return (
        <div>
            <h1>Loan Approvals</h1>
        </div>
    );
}

LoanApproval.layout = (page) => <App children={page} />;
