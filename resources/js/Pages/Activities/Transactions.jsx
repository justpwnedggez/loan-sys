import App from '../App';

export default function Transactions() {
    return (
        <div>
            <h1>Transaction Activity</h1>
        </div>
    );
}

Transactions.layout = (page) => <App children={page} />;
